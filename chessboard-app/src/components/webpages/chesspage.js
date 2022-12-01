import React from "react";
import { Chessboard } from "react-chessboard";
import "./../../index.css";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import Home from "../chatpages/home";
import { useState } from "react";
import Chat from "../chatpages/chat";
import Chess from "chess.js";
import EvaluateBoard from "./../ChessEngine/EvaluateBoard";
import GetBestMove from "../ChessEngine/GetBestMove";
import Assets from "./../Assets/move-self.mp3";
const socket = io.connect("http://localhost:4000");

let globalSum = 0;
export default function ChessGame() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [roomJoined, setRoomJoined] = useState(false);
  const [game, setGame] = useState(new Chess());
  const [PvP, setPvP] = useState(() => onDropPvP);
  const [refresh, setRefresh] = useState(()=> false);
  const [undoState, setUndoState] = useState(()=>false);

  // const [promotion, setPromotion] = useState("q");
  // const [promoPrompt, setPromoPrompt] = useState(false);

  // useEffect(()=>{
  //   console.log("Use effect " + promotion);
  // }, [promotion])

  // useEffect(()=>{
  //   console.log(game.in_check());
  //   if (game.in_check() === true) {
  //     setRefresh(true);
  //     alert("you are in check");
  //   }
  // })

  function play() {
    new Audio(Assets).play();
  }

  // perform modify function on game state
  function safeGameMutate(modify) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function makeBestMove(color) {
    let move = null;
    if (color === "b") {
      move = GetBestMove(game, color, globalSum)[0];
    } else {
      move = GetBestMove(game, color, -globalSum)[0];
    }
    globalSum = EvaluateBoard(move, globalSum, "b");

    console.log(globalSum);
    game.move(move);
  }

  // make computer move
  function AIMove() {
    const possibleMove = makeBestMove("b");
    // exit if the game is over
    if (game.game_over() || game.in_draw()) return;
    let move = null;
    safeGameMutate((game) => {
      move = game.move(possibleMove);
      play();
    });
  }

  function onDropPvC(sourceSquare, targetSquare) {
    // attempt move
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q",
      });
    });
    play();
    // illegal move made
    if (move === null) return false;
    // valid move made, make computer move
    setRefresh(false);
    setTimeout(AIMove, 200);
    return true;
  }

  // function pawnPromotion(value){
  //   <PromotionPrompt
  //   trigger={promoPrompt}
  //   setTrigger={setPromoPrompt}
  //   promotion={pawnPromotion}
  // />
  //   setPromotion((promotion) => promotion = value)
  //   console.log("promotion value is now " + promotion);
  //   return promotion;
  // }

  function historyFeed() {
    let gameHistory = game.history();
    return gameHistory.map((move) => <li key={move}>{move},</li>);
  }

  function undo(){
    if (refresh === false) {
      setRefresh(true);
      game.undo();
    }else if(refresh === true){
      setRefresh(false);
      game.undo();
    }
  }

  function promotionPrompt() {
    const promotion = prompt();
    return promotion;
  }

  function onDropPvP(sourceSquare, targetSquare) {
    let from = sourceSquare;
    let to = targetSquare;
    const gameCopy = { ...game };

    const isPromotion =
      gameCopy
        .moves({ verbose: true })
        .filter(
          (move) =>
            move.from === from && move.to === to && move.flags.includes("p")
        ).length > 0;

    if (isPromotion) {
      let promotion = promotionPrompt();
      //var temp = setPromoPrompt(promoPrompt => true);
      gameCopy.move({ to, from, promotion: promotion });
    } else {
      gameCopy.move({ to, from });
    }
    play();
    setRefresh(false);
    setGame(gameCopy);
    return gameCopy.move;
  }

  // function onSnapEnd(promotion, gameCopy){
  //   gameCopy.position(game.fen)
  //   console.log("onSnapEnd " + promotion)
  // }

  const handleJoinRoom = (joined) => {
    setRoomJoined(joined);
  };

  return (
    <>
      <div className="game-btns">
        <button
          className="btnscomp"
          onClick={() => {
            setPvP((PvP) => onDropPvC);
            setUndoState(true);
            game.reset();
          }}
        >
          Player Vs. Computer
        </button>
        <button
          className="btnsperson"
          onClick={() => {
            setPvP((PvP) => onDropPvP);
            setUndoState(false)
            game.reset();
          }}
        >
          Player Vs. Player
        </button>
      </div>

          {/* style={{display:game.in_check()? 'none':'visible'}}  */}
      <div className="chessboard">
        <div className="chessitsself">
          <Chessboard position={game.fen()} onPieceDrop={PvP} />
        </div>{" "}
        {roomJoined ? (
          <Chat username={username} room={room} socket={socket} />
        ) : (
          <Home
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            socket={socket}
            roomJoined={setRoomJoined}
          />
        )}
      </div>
      <div className="reset-btns">
        <button
          className="btnsperson"
          onClick={() => {
            setUndoState(false)
            setRefresh(false);
            setPvP((PvP) => onDropPvP);
            game.reset();
          }}
        >
          Reset Game
        </button>
        <button
          className="btnsperson"
          onClick={() => {
            if (undoState === true) {
              alert("You cant undo a computers move")
            }else{
               undo();
            }
          }}
        >
          Undo Move
        </button>
      </div>

        <div className='history-box'>
          <h1>Move History</h1>
          <div className="history">
            <ol>{historyFeed()}</ol>
          </div>
        </div>
      
    </>
  );
}

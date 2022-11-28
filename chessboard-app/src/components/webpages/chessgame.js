import './../../index.css';
import { useEffect, useState } from "react";
import { Chessboard } from "react-chessboard";
import Chess from "chess.js";
import EvaluateBoard from "./../ChessEngine/EvaluateBoard"
import GetBestMove from '../ChessEngine/GetBestMove';
import Assets from './../Assets/src_chess_assets_moveSoundEffect_1.mp3';
//import PromotionPrompt from "./Promotion_Prompt/PromotionPrompt";

let globalSum = 0;
function ChessApp() {
  const [game, setGame] = useState(new Chess());
  const [PvP, setPvP] = useState(()=>{});

  // const [promotion, setPromotion] = useState("q");
  // const [promoPrompt, setPromoPrompt] = useState(false);

  // useEffect(()=>{
  //   console.log("Use effect " + promotion);
  // }, [promotion])

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

// perform action when piece dropped by user
function onDropPvC(sourceSquare, targetSquare) {
  // attempt move
  let move = null;
  safeGameMutate((game) => {
    move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q'
    });
  });
  play();
  // illegal move made
  if (move === null) return false;
  // valid move made, make computer move
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
  function historyFeed(){
    let gameHistory = game.history();
    return gameHistory.map((move)=> <li key={move}>){move},</li>);
  }

  function promotionPrompt(){
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
      gameCopy.move({ to, from })
    }
    setGame(gameCopy);
    return gameCopy.move;
  }

  // function onSnapEnd(promotion, gameCopy){
  //   gameCopy.position(game.fen)
  //   console.log("onSnapEnd " + promotion)
  // }

  
    <div>
      <Chessboard position={game.fen()} onPieceDrop={PvP} />;
      <button onClick={()=>{
        setPvP(PvP => onDropPvC);
      }}>Player Vs. Computer</button>
      <button onClick={()=>{
        setPvP(PvP => onDropPvP);
      }}>Player Vs. Player</button>
      <div className='history'>
        <ol>{historyFeed()}</ol>
      </div>
      {/* <PromotionPrompt
        trigger={promoPrompt}
        setTrigger={setPromoPrompt}
        promotion={pawnPromotion}
      /> */}
    </div>
 
}
export default ChessApp;
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import Chess from 'chess.js';
import EvaluateBoard from './ChessEngine/EvaluateBoard';
import GetBestMove from './ChessEngine/GetBestMove';
import Assests from './Assests/src_chess_assets_moveSoundEffect_1.mp3'
import PromotionPrompt from "./Promotion_Prompt/PromotionPrompt"

let globalSum = 0;


function App() {
  const [game, setGame] = useState(new Chess());
  const [promotion, setPromotion] = useState('q');
  const [promoPrompt, setPromoPrompt] = useState(false);
  //const [histoy, setHistory] = useState([]);
  var history = game.history()



  function play() {

    new Audio(Assests).play();
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
    if (color === 'b') {
      move = GetBestMove(game, color, globalSum)[0];
    } else {
      move = GetBestMove(game, color, -globalSum)[0];
    }
    globalSum = EvaluateBoard(move, globalSum, 'b');

    console.log(globalSum);
    game.move(move);
  }

  // make computer move
  function AIMove() {
    const possibleMove = makeBestMove('b')
    // exit if the game is over
    if (game.game_over() || game.in_draw()) return;
    let move = null;
    safeGameMutate((game) => {
      move = game.move(possibleMove);
      play();
    });
  }

  // perform action when piece dropped by user
  // function onDrop(sourceSquare, targetSquare) {
  //   // attempt move
  //   let move = null;
  //   safeGameMutate((game) => {
  //     move = game.move({
  //       from: sourceSquare,
  //       to: targetSquare,
  //       promotion: promotion
  //     });
  //   });
  //   play();
  //   // illegal move made
  //   if (move === null) return false;
  //   // valid move made, make computer move
  //   setTimeout(AIMove, 200);
  //   return true;
  // }



  function onDrop(sourceSquare, targetSquare) {
    var history = game.history()
    console.log(history)

    var abc = document.getElementById("history1").innerText = history

    const from = sourceSquare;
    const to = targetSquare;
    const gameCopy = { ...game };

    const isPromotion =
      gameCopy
        .moves({ verbose: true })
        .filter(
          (move) =>
            move.from === from && move.to === to && move.flags.includes("p")
        ).length > 0;

    if (isPromotion) {
      setPromoPrompt(true);
      <PromotionPrompt trigger={promoPrompt} setTrigger={setPromoPrompt} promotion={promotion} setPromotion={setPromotion} />;
      gameCopy.move({ to, from, promotion: promotion });
    } else {
      gameCopy.move({ to, from });
    }

    setGame(gameCopy);
    return gameCopy.move;



  }

  return <div>
    <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
    <button onMouseDown={() => setPromoPrompt(true)}> open PopUp</button>
    <PromotionPrompt trigger={promoPrompt} setTrigger={setPromoPrompt} promotion={promotion} setPromotion={setPromotion} />

    <div className='history' id={"history1"}></div>

  </div>


}
export default App;
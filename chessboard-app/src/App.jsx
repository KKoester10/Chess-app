import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import Chess from 'chess.js';
import EvaluateBoard from './ChessEngine/EvaluateBoard';
import GetBestMove from './ChessEngine/GetBestMove';
import Assests from './Assests/src_chess_assets_moveSoundEffect_1.mp3'

let globalSum = 0;
function App() {
  const [game, setGame] = useState(new Chess());

  function play(){
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
  function onDrop(sourceSquare, targetSquare) {
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

  return <div>
    <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
  </div>   
  
}
export default App;
import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import Chess from 'chess.js';
import EvaluateBoard from './Components/EvaluateBoard';
import GetBestMove from './Components/GetBestMove';

let globalSum = 0;
function App() {
  const [game, setGame] = useState(new Chess());



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
  function makeRandomMove() {
    const possibleMove = makeBestMove('b')
    // exit if the game is over
    if (game.game_over() || game.in_draw()) return;
    // select random move
    // const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    // play random move
    let move = null;
    safeGameMutate((game) => {
      move = game.move(possibleMove);
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
    console.log(move);
    console.log(EvaluateBoard(move, 0 , 'b'));
    });
    
    // illegal move made
    if (move === null) return false;
    // valid move made, make computer move
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return <div>
    <Chessboard position={game.fen()} onPieceDrop={onDrop} />;
    
  </div>   
  
}
export default App;
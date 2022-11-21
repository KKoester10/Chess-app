import MiniMax from './MiniMax';

export default function GetBestMove(game, color, currSum) {
    // positionCount = 0;
    let depth;
    if (color === 'b') {
        depth = 3;
    } else {
        depth = 3;
    }
    var [bestMove, bestMoveValue] = MiniMax(
      game,
      depth,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      true,
      currSum,
      color
    );
    return [bestMove, bestMoveValue]; 
}

import MiniMax from './MiniMax';

export default function GetBestMove(game, color, currSum) {
    // positionCount = 0;
    let depth;
    if (color === 'b') {
        depth = 1
        // parseInt($('#search-depth').find(':selected').text());
    } else {
        depth = 1
        // parseInt($('#search-depth-white').find(':selected').text());
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

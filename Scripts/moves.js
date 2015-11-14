/**
 * Moves.js
 *
 * @function
 *
 *
 *
 *
 *
 * @author
 * Mateus M. F. Mendonça
 * Matheus Mello Nascimento
 */




function nextPossibleMove (hoveredPawn){
  //console.log(board.pawns[2].color);
  pawnColor = hoveredPawn.color;
  for (var i = board.discs.length; i >= 0; i--) {
    if (board.discs[i].color == pawnColor) {
      console.log(pawnColor," ### ", board.discs[i].color);
      break;
    }
  }
}

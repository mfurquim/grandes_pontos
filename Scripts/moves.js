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
  //console.log(hoveredPawn);
  pawnColor = hoveredPawn._color;

  for (var i = board.discs.length-1; i >= 0; i--) {
    if (board.discs[i]._color == pawnColor) {
      //console.log(pawnColor," ### ", board.discs[i]._color);
      
      break;
    }
  }
}

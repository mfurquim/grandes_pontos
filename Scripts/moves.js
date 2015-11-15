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



      var nextCoordinate = {
        x : board.discs[i]._positionCoordinates.x,
        y : board.discs[i]._positionCoordinates.y
      };

/** Draw Function **/
    var color;

    switch (board.discs[i]._color) {
      case 0: color = "green";
      break;
      case 1: color = "blue";
      break;
      case 2: color = "red";
      break;
      case 3: color = "purple";
      break;
      case 4: color = "yellow";
      break;
      case 5: color = "white";
      break;
      case 6: color = "black";
      break;
    }


    //console.log(board.discs[i]);
    board.discs[i].changeName("Bordered","disc",color);



      return board.discs[i];
    }
  }

}

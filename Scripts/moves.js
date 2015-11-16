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

  for (var j = NUMBER_DISC_COL; j >= 0; j--) {
    for (var i = NUMBER_DISC_ROW; i >= 0; i--) {
      currentDisc = board.discs[(i*j)-1];
      if (currentDisc._color == pawnColor) {
        var nextCoordinate = {
          x : currentDisc._positionCoordinates.x,
          y : currentDisc._positionCoordinates.y
        };

      /** Draw Function **/
      var color;

      switch (currentDisc._color) {
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

      //console.log(currentDisc);
      currentDisc.changeName("Bordered","disc",color);

        return currentDisc;
      }
    }
  }
}

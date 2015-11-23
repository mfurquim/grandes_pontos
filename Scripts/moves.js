/**
 * Moves.js
 *
 * @function
 * nextPossibleMove shows next moves the user can do with the hovered pawn
 * next moves the hovered pawn to the next disc that matches its color
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

  for (var j = NUMBER_DISC_COL; j > 0; j--) {
    for (var i = NUMBER_DISC_ROW; i > 0; i--) {
/*
      var num = ((i-1)*5)+(j-1);
*/
      var num = 0;
      if (j % 2 === 0) {
        num = ((NUMBER_DISC_ROW-i)*5)+(j-1);
        console.log("Par");
        console.log("(" + String(i) + "," + String(j) + ") -> " + String(num));
      } else {
        num = ((i-1)*5)+(j-1);
        console.log("Impar");
        console.log("(" + String(i) + "," + String(j) + ") -> " + String(num));
      }
//      console.log("(" + String(i) + "," + String(j) + ") -> " + String(num));
      currentDisc = board.discs[num];
      if (currentDisc._color === pawnColor) {
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

        console.log("(" + String(i) + "," + String(j) + ") -> " + String(num));
        return currentDisc;
      }
    }
  }
}

function next (hoveredPawn){
  //console.log(board.pawns[2].color);
  //console.log(hoveredPawn);
  pawnColor = hoveredPawn._color;

  for (var j = NUMBER_DISC_COL; j > 0; j--) {
    for (var i = NUMBER_DISC_ROW; i > 0; i--) {
      var num = ((i-1)*5)+(j-1);
      console.log("(" + String(i) + "," + String(j) + ") -> " + String(num));
      currentDisc = board.discs[num];
      if (currentDisc._color == pawnColor) {
        var nextCoordinate = {
          x : currentDisc._positionCoordinates.x,
          y : currentDisc._positionCoordinates.y
        };





      console.log("##################",hoveredPawn);
      console.log(">>>>",nextCoordinate);
      hoveredPawn._positionCoordinates = nextCoordinate;
      currentDisc._positionCoordinates = [50,50];
      currentDisc._color = 10;
      // hoveredPawn.move(nextCoordinate);


        return currentDisc;
      }
    }
  }
}

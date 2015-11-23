/**
* event.js
*
* @var
* gridConfiguration describes the rows, columns, width, height and offset
*
* @function
* windows.onclick [will] call resolveTurn if the click was inside grid
*
* @author
* Matheus Mello
* Mateus M. F. Mendonça
*/

var gridConfiguration = {
  rows: NUMBER_DISC_ROW,
  cols: NUMBER_DISC_COL,
  width: DISC_DIMENSION.WIDTH,
  height: DISC_DIMENSION.HEIGHT,
  offset: {
    x: BOARD_OFFSET.X,
    y: BOARD_OFFSET.Y
  }
};

// Listen to key pressing events
window.addEventListener("keypress", doKeyDown, false);

// Listen to key pressing events
function doKeyDown(event) {

  switch (event.code) {
    // If the key D is pressed, Swap DEBUG_ON flag
    case "KeyD":
    DEBUG_ON = DEBUG_ON ? false : true;
    console.log("Debug is: " + String(DEBUG_ON));
    break;

    // If the key C is pressed, change pawn's style
    case "KeyC":
    if (DEBUG_ON) {
      var border = prompt("Pawn's border (Multi, Single or Bordered)");
      var type = prompt("Pawn's type (pawn1, pawn2, pawn3, classic, thin, human or meeple)");
      var color = prompt("Pawn's color (green, blue, red, purple, yellow)");
      var position = prompt("Pawn's position (0,4)");
      board.pawns[position].changeName(border, type, color);
    }
    break;

    default:
    if (DEBUG_ON) {
      console.log(event);
    }
  }

  drawBoard(context);
}

/**
* Window On Click adjust the mouseClick to gridClick and calls resolveTurn()
* @param mouseClick
*/
window.onmousemove = function(mouseMove){

  var mousePosition = {
    x: mouseMove.pageX,
    y: mouseMove.pageY
  };

  var gridClick = {
    x: Math.floor(
      (mousePosition.x - gridConfiguration.offset.x)/
      gridConfiguration.width),
    y: Math.floor(
      (mousePosition.y - gridConfiguration.offset.y)/
      gridConfiguration.height)
  };

  if (isInsideBoard(gridClick) === true) {
    getHoveredElement(gridClick);
  }

  // Call function to resolve the turn based on the gridClick.
  resolveTurn(gridClick);
  drawBoard(context);
};

window.onclick = function(mouseClick){
  console.log(mouseClick);
  var mousePosition = {
    x: mouseClick.pageX,
    y: mouseClick.pageY
  };

  var gridClick = {
    x: Math.floor(
      (mousePosition.x - gridConfiguration.offset.x)/
      gridConfiguration.width),
    y: Math.floor(
      (mousePosition.y - gridConfiguration.offset.y)/
      gridConfiguration.height)
  };

  if (isInsideBoard(gridClick) === true) {
    getClickedElement(gridClick);
  }

  // Call function to resolve the turn based on the gridClick.
  resolveTurn(gridClick);
  drawBoard(context);
};

function getClickedElement(gridClick) {

  var nextMove = 10;
  var color = 10;

  for (var i = board.pawns.length-1; i >= 0; i--) {
    //console.log(board.pawns[i]);
    var currentPawn = board.pawns[i];

    var pawnGrid = {
      x : (currentPawn._positionCoordinates.x - gridConfiguration.offset.x) /
      gridConfiguration.width,
      y : (currentPawn._positionCoordinates.y - gridConfiguration.offset.y) /
      gridConfiguration.height,
    };

    if (gridClick.x == pawnGrid.x && gridClick.y == pawnGrid.y) {
      if (DEBUG_ON === true) {
        //console.log(currentPawn._color);
      }
      if (DEBUG_ON === true) {
        console.log(currentPawn);
      }
      nextMove = next(currentPawn);
    }
    else {
      switch (nextMove._color) {
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
      //console.log(color);

      if (nextMove !== null && typeof(nextMove) === 'object') {
        //  console.log(nextMove);
        //  nextMove.changeName("Multi","disc",color);
      }

    }
  }
}



function getHoveredElement(gridClick) {

  var nextMove = 10;
  var color = 10;

  for (var i = board.pawns.length-1; i >= 0; i--) {
    //console.log(board.pawns[i]);
    var currentPawn = board.pawns[i];

    var pawnGrid = {
      x : (currentPawn._positionCoordinates.x - gridConfiguration.offset.x) /
      gridConfiguration.width,
      y : (currentPawn._positionCoordinates.y - gridConfiguration.offset.y) /
      gridConfiguration.height,
    };

    if (gridClick.x == pawnGrid.x && gridClick.y == pawnGrid.y) {
      if (DEBUG_ON === true) {
        //console.log(currentPawn._color);
      }
      if (DEBUG_ON === true) {
        console.log(currentPawn);
      }
      nextMove = nextPossibleMove(currentPawn);
    }
    else {
      switch (nextMove._color) {
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
      //console.log(color);

      if (nextMove !== null && typeof(nextMove) === 'object') {
        //  console.log(nextMove);
        //  nextMove.changeName("Multi","disc",color);
      }

    }
  }
}

// window.onclick = function(mouseClick){
//
//
//   // Object mouse containing the coordinate (x,y) of the event
//   var mousePosition = {
//     x: mouseClick.pageX,
//     y: mouseClick.pageY
//   };
//
//
//   // A debug function to print the mouse coordinates on the console
//   mousePosition.toConsole = function () {
//     if (DEBUG_ON === true) {
//       console.log("Mouse position: (" +
//         String(mousePosition.x) + ", " +
//         String(mousePosition.y) + ")");
//     }
//   };
//
//   mousePosition.toConsole();
//
//   // Object gridClick containing the grid cell (x,y) of the click
//   var gridClick = {
//     x: Math.floor(
//       (mousePosition.x - gridConfiguration.offset.x)/
//       gridConfiguration.width),
//     y: Math.floor(
//       (mousePosition.y - gridConfiguration.offset.y)/
//       gridConfiguration.height)
//   };
//
//   // A debug function to print the grid coordinates on the console
//   gridClick.toConsole = function () {
//     if (DEBUG_ON === true) {
//       console.log("Grid Click: (" +
//         String(gridClick.x) + ", " +
//         String(gridClick.y) + ")");
//     }
//   };
//
//   if (isInsideBoard(gridClick) === true) {
//     gridClick.toConsole();
//     // Call function to resolve the turn based on the gridClick.
//     resolveTurn(gridClick);
//     drawBoard(context);
//   }
// };

/**
 * Is Inside Board checks whether the click was in the board
 * @param gridClick
 * @return insideBoard
 */
function isInsideBoard(gridClick) {
  var insideBoard = false;

  if (gridClick.x < gridConfiguration.rows+1 &&
      gridClick.y < gridConfiguration.cols &&
      gridClick.x >= 0 &&
      gridClick.y >= 0) {
    insideBoard = true;
  }
  else {
    insideBoard = false;
  }

  return insideBoard;
}

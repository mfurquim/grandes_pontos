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
    x: BOADR_OFFSET.X,
    y: BOADR_OFFSET.Y
  }
};

/**
 * Window On Click adjust the mouseClick to gridClick and calls resolveTurn()
 * @param mouseClick
 */
window.onclick = function(mouseClick){

  // Object mouse containing the coordinate (x,y) of the event
  var mousePosition = {
    x: mouseClick.pageX,
    y: mouseClick.pageY
  };

  // A debug function to print the mouse coordinates on the console
  mousePosition.toConsole = function () {
    console.log("Mouse position: (" +
      String(mousePosition.x) + ", " +
      String(mousePosition.y) + ")");
  };

  if (DEBUG_ON === true) {
    mousePosition.toConsole()
  } else {
    // Do not print mousePosition debug information to console
  }

  // Object gridClick containing the grid cell (x,y) of the click
  var gridClick = {
    x: Math.floor(
      (mousePosition.x - gridConfiguration.offset.x)/
      gridConfiguration.width),
    y: Math.floor(
      (mousePosition.y - gridConfiguration.offset.y)/
      gridConfiguration.height)
  }

  // A debug function to print the grid coordinates on the console
  gridClick.toConsole = function () {
    console.log("Grid Click: (" +
      String(gridClick.x) + ", " +
      String(gridClick.y) + ")");
  };

  if (isInsideBoard(gridClick) === true) {
    gridClick.toConsole();
    // Call function to resolve the turn based on the gridClick.
    // resolveTurn(gridClick);
  }
};

/**
 * Is Inside Board checks whether the click was in the board
 * @param gridClick
 * @return insideBoard
 */
function isInsideBoard(gridClick) {
  var insideBoard = false;

  if (gridClick.x < gridConfiguration.rows &&
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

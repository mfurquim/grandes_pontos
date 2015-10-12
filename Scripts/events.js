/*
public methods:

init() - Initialize the Canvas, calling the drawCanvas function

drawCanvas() - Draw the canvas grid system according to the configuration
variable s

Variables:

canvas - main canvas of the game

c - canvas context

screenConfiguration - screen configuration setup
screenConfiguration.rows - number of rows in the grid system
screenConfiguration.cols - number of cols in the grid system
screenConfiguration.height - height in pixels of each grid cell
screenConfiguration.width - width in pixels of each grid cell

mousePositionX - mouse position in X axis, starts in the top left corner

mousePositionY - mouse position in Y axis, starts in the top left corner

clickedX - mouse position in X axis when mouse left button is pressed

clickedY - mouse position in Y axis when mouse left button is pressed

box - image to de displayed in each grid cell

*/

var screenConfiguration = {
  rows: 11,
  cols: 5,
  width: 50,
  height: 50
};

var canvasContext;

window.onload = function() {
  var canvas = document.getElementById("myCanvas");
  canvasContext = canvas.getContext("2d");

  init();
};

/*function getMousePos(canvas) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}*/

// var mousePosition;
var mousePositionX;
var mousePositionY;
var clickedX;
var clickedY;

window.onclick = function(e){
  mousePositionX = e.pageX;
  mousePositionY = e.pageY;

  // console.log(mousePositionX + "," + mousePositionY);

 if(Math.floor(mousePositionX/screenConfiguration.width) < screenConfiguration.rows && Math.floor(mousePositionY/screenConfiguration.height) < screenConfiguration.cols){
clickedX = Math.floor(mousePositionX/screenConfiguration.width);
clickedY = Math.floor(mousePositionY/screenConfiguration.height);
console.log(clickedX + "," + clickedY);
 }
 };

var box;
box = new Image();
box.src = "box.png";

function init(){
  // drawCanvas();
}

function drawCanvas(){
  canvasContext.clearRect(0, 0, 400, 400);

  for (var i = 0; i < screenConfiguration.rows; i++) {
    for (var n = 0; n < screenConfiguration.cols; n++) {
      var x = n*screenConfiguration.width;
      var y = i*screenConfiguration.height;
      canvasContext.drawImage(box, x, y);
    }
  }
}

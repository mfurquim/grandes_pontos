var canvas = null,
    context = null,
    atlasJSON = null,
    url = "./Assets/Assets.png";

function load() {
  context.fillText('Loading', 152, 152);
  context.drawImage(atlasJSON, 0, 0);
  context.drawImage(atlasJSON, 2, 2, 42, 28, 150, 150, 42, 28);
}

var setup = function() {
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.font = '40px Arial';
  context.fillStyle = 'green';
  atlasJSON = new Image();
  atlasJSON.onload = load;
  atlasJSON.src = url;
};

function writeInScreen() {
  context.fillText("MouseClick verificado",193,548);
}


setup();
context.fillText('Game Loaded', 152, 200);


var bw = 484;
var bh = 150;
var p = 0;


function drawBoard(){
for (var x = 0; x <= bw; x += 44) {
    context.moveTo(0.5 + x + p, p);
    context.lineTo(0.5 + x + p, bh + p);
}


for (var x = 0; x <= bh; x += 30) {
    context.moveTo(p, 0.5 + x + p);
    context.lineTo(bw + p, 0.5 + x + p);
}

context.strokeStyle = "black";
context.stroke();
}

drawBoard();


// Draw Circle on Screen
context.arc(590,300,40,0,2*Math.PI);
context.stroke();


// Draw DOM in Canvas
var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
           '<foreignObject width="100%" height="100%">' +
           '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px;padding:50px 100px" id="button">' +
             '<em>Click!</em> Me!' + 
           '</div>' +
           '</foreignObject>' +
           '</svg>';

var DOMURL = window.URL || window.webkitURL || window;

var img = new Image();
var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
var url = DOMURL.createObjectURL(svg);

img.onload = function () {
  context.drawImage(img, 0, 0);
  DOMURL.revokeObjectURL(url);
};

img.src = url;

var click = document.getElementById("button");
console.log(click);
console.log(canvas);

//Calculate position of Canvas DOM element on the page

// var canvasPosition = {
//   x : canvas.offset().left,
//   y : canvas.offset().top
// };

// canvas.on('click', function(e) {
//   // pageX and pageY to get the mouse position relative to the browser window

//   var mouse = {
//     x : e.pageX - canvasPosition.x,
//     y : e.pageY - canvasPosition.y
//   };

//   //local coordinates (0,0) = origin = top-left of canvas element
// });

// function showCoordinates() {
//   var axisX = event.clientX;
//   var axisY = event.clientY;
  
//   console.log("Coordenada X: "+axisX+", Coordenada Y: "+axisY);
  
// }

function specifiedCoordinates() {
  var axisX = event.clientX;
  var axisY = event.clientY;
  if (axisX >= 550 && axisX <= 640 && axisY >= 267 && axisY <= 350) {
    console.log("Coordenada X: "+axisX+", Coordenada Y: "+axisY);
    context.fillText("Voce clicou no Circulo!",193,548);
  }
}


canvas.addEventListener("mousedown", specifiedCoordinates, false);


/*
Drawable.prototype = {
  drawDrawable: function(dx, dy) {
    this.dx = dx;
    this.dy = dy;
  }
};

function Drawable (spriteName, sx, sy, sw, sh) {
  this.spriteName = spriteName;
  this.sx = sx;
  this.sy = sy;
  this.sw = sw;
  this.sh = sh;
}

var disc = new Drawable("Multi/disc_green.png", 2, 2, 42, 28);
disc.drawDrawable(150, 150);
*/

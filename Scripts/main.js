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

function showCoordinates() {
  var axisX = event.clientX;
  var axisY = event.clientY;
  console.log("Coordenada X: "+axisX+", Coordenada Y: "+axisY);

}

function writeInScreen() {
  context.fillText("MouseClick verificado",193,548);
}


setup();
context.fillText('Game Loaded', 152, 200);
canvas.addEventListener("mousedown", showCoordinates, false);
canvas.addEventListener("onmousedown",writeInScreen, false);

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

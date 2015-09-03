var canvas = null,
    context = null,
    atlasJSON = null,
    url = "./Assets/Assets.png";

function load() {
  context.fillText('Loading', 152, 152);

  context.drawImage(atlasJSON, 0, 0);
  context.drawImage(atlasJSON, 2, 2, 42, 28, 150, 400, 42, 28);

  context.fillText('Game Loaded', 152, 200);
}

function cropAndDraw(filename, destinationX, destinationY) {
  var sourceX = 0,
      sourceY = 0,
      width = 0,
      height = 0;

  function parseAtlas(atlJSON) {
    var parsed = JSON.parse(atlJSON);
    console.log("Oi");

    for(var key in parsed.frames) {
      var sprite = parsed.frames[key];

      console.log(sprite);

//    this.defAtlas(key, sprite.frame.x, sprite.frame.y, sprite.frame.w, sprite.frame.h, cx, cy);
    }
  }

  parseAtlas(atlasJSON);

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

  cropAndDraw("Bordered/classic_blue_.png", 150, 150);
};

setup();

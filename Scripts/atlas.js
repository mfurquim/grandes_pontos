var atlasAsset = null,
    sprites = [],
    url = "./Assets/Assets.png";

/* Function loadJSON receives a JSON path as parameter and a callback.
 * It is called right after load().
 * It loads JSON files.
 * It returns the JSON file loaded.
 */
function loadJSON(file, callback) { 
    try{
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
  } catch( error_loadJSON ) {
    alert( error_loadJSON );
  }
 }

/* Function load does not receive parameters.
 * It is called immediately after giving the source of the image.
 * It parses the JSON file and call defSprite.
 * It returns nothing.
 */
function load() {

  loadJSON("./Assets/Assets-non-idented.json", function(load_json) {

    var parsed = JSON.parse(load_json);
    for(var key in parsed.frames) {
      var sprite = parsed.frames[key];

      var center_x = -sprite.frame.w * 0.5;
      var center_y = -sprite.frame.h * 0.5;

      defSprite(sprite.filename, sprite.frame.x, sprite.frame.y, sprite.frame.w,
        sprite.frame.h, center_x, center_y);
    }
  });
}
/* Function defSprite receives 7 parameters:
 * 1. The name of the image;
 * 2,3. The (x,y) starting coordinate;
 * 4,5. The width and height of the image;
 * 6,7. The (x,y) center coordinate;
 * It is called for each parsed sprite of the JSON file.
 * It stores all the nedded information about images
 * into the array called sprites.
 * It returns nothing.
 */
function defSprite(name, coordinate_x, coordinate_y,
  width, height, center_x, center_y) {
  var sprite = {
  	"name": name,
    "coordinate_x": coordinate_x,
    "coordinate_y": coordinate_y,
    "width": width,
    "height": height,
    "center_x": center_x == null ? 0 : center_x,
    "center_y": center_y == null ? 0 : center_y
  };
	sprites.push(sprite);
}

/* Function loadingAssets does not receive parameters.
 * It is called on the main.js.
 * It loads the Atlas image and calls the load function.
 * It returns nothing.
 */
function loadingAssets() {
  atlasAsset = new Image();
  atlasAsset.onload = load;
  atlasAsset.src = url;
}

/* Function searchSprite receives 1 parameter:
 * 1. Name of the sprite to search.
 * It is called on drawSprite.
 * It searches on the sprites array for the sprite with name.
 * It returns the sprite upon succes, or null otherwise.
 */
function searchSprite(name) {
  console.log(sprites);
  for(var key in sprites) {
    console.log(sprites[key]["name"]);
    if (sprites[key]["name"] === name) {
      return sprites[key];
    } else {
      // Does nothing. Keep transversing the array for a match
    }
  }
  return null;
}

/* Function searchSprite receives 3 parameters:
 * 1. Name of the sprite to draw;
 * 2,3. The (x,y) drawing coordinate.
 * It is called on main.js.
 * It draws any sprite upon request.
 * It returns 1 if it could not find the sprite to draw.
 */
function drawSprite(name, destination_x, destination_y) {
  console.log("drawSprite");
  var sprite = searchSprite(name);
  console.log(sprite);
  if (sprite != null) {
    context.drawImage(atlasAsset, sprite.coordinate_x, sprite.coordinate_y,
      sprite.width, sprite.height, destination_x, destination_y,
      sprite.width, sprite.height);
  } else {
    return 1;
  }
}

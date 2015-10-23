/**
 * ATLAS
 *
 * The ATLAS module loads an atlas sheet into an array
 * of objects called sprites, based on a JSON file.
 *
 * @var
 * atlasAsset is an Object which contains an Atlas sheet with all images.
 * sprites is an Array which contains useful information to draw and image.
 * url is a String which contains the path to the image Atlas.
 * sprite is an Object which contains its name, coordinates and dimension.
 *
 * @function
 * loadJSON receives a JSON path and loads it.
 * loadingAssets loads the Atlas image and calls the load function.
 * storeSprite parses the JSON file and call defSprite.
 * drawSprite draws any sprite upon request.
 * defSprite stores all the nedded information about images into sprites.
 */

var ATLAS = (function() {
  var atlasAsset = null,
      sprites = [],
      url = "./Assets/Assets.png";

  /**
   * Function loadJSON receives a JSON path as parameter and a callback.
   * It is called right after load().
   * It loads JSON files.
   * It returns the JSON file loaded.
   */
  var loadJSON = function(file, callback) {
    try {
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
    }
    catch( error_loadJSON ) {
      alert( error_loadJSON );
    }
  };

  /**
   * Function storeSprite does not receive parameters.
   * It is called immediately after giving the source of the image.
   * It parses the JSON file and call defSprite.
   * It returns nothing.
   */
  var storeSprite = function() {

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
  };

  /**
   * It is called for each parsed sprite of the JSON file.
   * It stores all the nedded information about images
   * into the array called sprites.
   * It returns nothing.
   *
   * @param
   * name is the name of the image.
   * coordinate_x and coordinate_y are the starting coordinates.
   * width and heigh are the dimensions of the image.
   * center_x and center_y are the center coordiantes of the image.
   */
  var defSprite = function(name, coordinate_x, coordinate_y,
    width, height, center_x, center_y) {
    var sprite = {
    	"name": name,
      "sourceCoordinates": {x:coordinate_x, y:coordinate_y},
      "dimensions": {width:width, height: height}
    };
  	sprites.push(sprite);
  };

  /**
   * It is called on drawSprite.
   * It searches on the sprites array for the sprite with name.
   * It returns the sprite upon succes, or null otherwise.
   *
   * @param
   * name is the name of the sprite that'll be seached.
   */
  var searchSprite = function(name) {
    // console.log(sprites);
    for(var key in sprites) {
      // console.log(sprites[key]["name"]);
      if (sprites[key]["name"] === name) {
        return sprites[key];
      } else {
        // Does nothing. Keep transversing the array for a match
      }
    }
    return null;
  };

  return {

    /**
     * Function loadingAssets does not receive parameters.
     * It loads the Atlas image and calls the load function.
     * It is called on the main.js.
     * It returns nothing.
     */
    loadingAssets: function() {
      atlasAsset = new Image();
      atlasAsset.onload = storeSprite;
      atlasAsset.src = url;
    },

    fetchSprite: function(name) {
      return searchSprite(name);
    },

    fetchAtlas: function() {
      return atlasAsset;
    },

    /**
     * It is called on main.js.
     * It draws any sprite upon request.
     * It returns 1 if it could not find the sprite to draw.
     *
     * @param
     * name stands for the name of the sprite to draw.
     * destination_x and destination_y are for the drawing coordinates.
     */
    drawSprite: function(name, destination_x, destination_y) {
      try {
        // console.log("drawSprite");
        var sprite = searchSprite(name);
        context.drawImage(atlasAsset, sprite.coordinate_x, sprite.coordinate_y,
          sprite.width, sprite.height, destination_x, destination_y,
          sprite.width, sprite.height);
      }
      catch (sprite_null_error) {
        alert(sprite_null_error);
        // console.log(sprite);
      }
    }
  };
})();

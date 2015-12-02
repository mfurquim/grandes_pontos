/**
 * ATLAS
 *
 * The ATLAS module loads an atlas sheet into an array
 * of objects called sprites, based on a JSON file.
 *
 * public methods:
 *  loadingAssets,
 *  drawSprite.
 *
 * Variables:
 * atlasAsset is an Object which contains an Atlas sheet with all images.
 * sprites is an Array which contains useful information to draw and image
 * url is a String which contains the path to the image Atlas
 * sprite is an Object which contains its name, coordinates and dimension
 */

var ATLAS = (function() {

  // Color constants
  const GREEN  = 0,
  			BLUE   = 1,
  			RED    = 2,
  			PURPLE = 3,
  			YELLOW = 4,
  			WHITE  = 5,
  			BLACK  = 6;

  // Constants to capture images
  const IMAGE_BORDER_MULTI		= "Multi",
  			IMAGE_BORDER_SINGLE		= "Single",
  			IMAGE_BORDER_BORDERED	= "Bordered",
  			IMAGE_TYPE_DISC				= "disc",
  			IMAGE_TYPE_PAWN1			= "pawn1",
  			IMAGE_TYPE_PAWN2			= "pawn2",
  			IMAGE_TYPE_PAWN3			= "pawn3",
  			IMAGE_TYPE_CLASSIC 		= "classic",
  			IMAGE_TYPE_THIN				= "thin",
  			IMAGE_TYPE_HUMAN			= "human"
  			IMAGE_TYPE_MEEPLE			= "meeple",
  			IMAGE_COLOR_GREEN 		= "green",
  			IMAGE_COLOR_BLUE			= "blue",
  			IMAGE_COLOR_RED				= "red",
  			IMAGE_COLOR_PURPLE		= "purple",
  			IMAGE_COLOR_YELLOW		= "yellow",
  			IMAGE_COLOR_WHITE			= "white",
  			IMAGE_COLOR_BLACK			= "black";

  // Discs sprite name
  const	GREEN_DISC_NAME		= "Multi/disc_green.png",
  			BLUE_DISC_NAME		= "Multi/disc_blue.png",
  			RED_DISC_NAME			= "Multi/disc_red.png",
  			PURPLE_DISC_NAME	= "Multi/disc_purple.png",
  			YELLOW_DISC_NAME	= "Multi/disc_yellow.png",
  			WHITE_DISC_NAME		= "Multi/disc_white.png",
  			BLACK_DISC_NAME		= "Multi/disc_black.png";

  // Pawns sprite name
  const GREEN_PAWN_NAME		= "Multi/classic_green.png",
  			BLUE_PAWN_NAME		= "Multi/classic_blue.png",
  			RED_PAWN_NAME			= "Multi/classic_red.png",
  			PURPLE_PAWN_NAME	= "Multi/classic_purple.png",
  			YELLOW_PAWN_NAME	= "Multi/classic_yellow.png";

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

    loadJSON("./Assets/Assets.json", function(load_json) {

      var parsed = JSON.parse(load_json);
      for(var key in parsed.frames) {
        var sprite = parsed.frames[key];

        var center_x = -sprite.frame.w * 0.5;
        var center_y = -sprite.frame.h * 0.5;

        defSprite(sprite.filename, sprite.frame.x, sprite.frame.y, sprite.frame.w,
          sprite.frame.h, center_x, center_y);
      }
    });
    console.log("Assets Loaded!");
  };

  /**
   * Function defSprite receives 7 parameters:
   * 1. The name of the image;
   * 2,3. The (x,y) starting coordinate;
   * 4,5. The width and height of the image;
   * 6,7. The (x,y) center coordinate;
   * It is called for each parsed sprite of the JSON file.
   * It stores all the nedded information about images
   * into the array called sprites.
   * It returns nothing.
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
   * Function searchSprite receives 1 parameter:
   * 1. Name of the sprite to search.
   * It is called on drawSprite.
   * It searches on the sprites array for the sprite with name.
   * It returns the sprite upon succes, or null otherwise.
   */
  var searchSprite = function(name) {
    // console.log(sprites);
    for(var key in sprites) {
      // console.log(sprites[key]["name"]);
      if (sprites[key].name === name) {
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
     * It is called on the main.js.
     * It loads the Atlas image and calls the load function.
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

    /**
     * Fetch disc receives a color and returns its sprite
     */
    fetchDisc: function(color) {
      var discSpriteName = "";

      switch (color) {
        case GREEN:
          discSpriteName = GREEN_DISC_NAME;
          break;

        case BLUE:
          discSpriteName = BLUE_DISC_NAME;
          break;

        case RED:
          discSpriteName = RED_DISC_NAME;
          break;

        case PURPLE:
          discSpriteName = PURPLE_DISC_NAME;
          break;

        case YELLOW:
          discSpriteName = YELLOW_DISC_NAME;
          break;

        case WHITE:
          discSpriteName = WHITE_DISC_NAME;
          break;

        case BLACK:
          discSpriteName = BLACK_DISC_NAME;
          break;

        default:
          // Should never be reached. There are only seven Discs's colors.
      }

      var discSprite = ATLAS.fetchSprite(discSpriteName);
      return discSprite;
    },

    /**
     * Fetch pawn receives a color and returns its sprite
     */
    fetchPawnByNumber: function(pawnColor) {

    	var pawnSpriteName = "";

    	switch (pawnColor) {
    		case GREEN:
    			pawnSpriteName = GREEN_PAWN_NAME;
    			break;

    		case BLUE:
    			pawnSpriteName = BLUE_PAWN_NAME;
    			break;

    		case RED:
    			pawnSpriteName = RED_PAWN_NAME;
    			break;

    		case PURPLE:
    			pawnSpriteName = PURPLE_PAWN_NAME;
    			break;

    		case YELLOW:
    			pawnSpriteName = YELLOW_PAWN_NAME;
    			break;

    		default:
    			// Should never be reached. There are only five Pawns's colors.
    	}

    	var pawnSprite = ATLAS.fetchSprite(pawnSpriteName);
    	return pawnSprite;
    },

    getColorPawns: function() {
      return [GREEN, BLUE, RED, PURPLE, YELLOW];
    },


    fetchAtlas: function() {
      return atlasAsset;
    }
  };
})();

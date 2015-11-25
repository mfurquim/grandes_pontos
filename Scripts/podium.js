/**
 * Podium.js
 *
 * @function
 * Player creates a Player object
 * drawItself add its image to the context
 * scale changes the object scale (width, height)
 *
 * @author
 * Mateus M. F. Mendonça
 */

const INITIAL_COORDINATE = {
	X:BOARD_OFFSET.X,
	Y:BOARD_OFFSET.Y - (DISC_DIMENSION.HEIGHT + 50)};

/**
 * The constructor to create the Podium
 *
 * @param
 * Sprite as defined in Atlas.js
 * number is the number of the player
 * scale (width, height)
 *
 */

var Podium = function () {
  this._steps = [];
  this._sprite = {};

  brickSprite = ATLAS.fetchSprite("brick_black.png");

  this._sprite.name = brickSprite.name;
  this._sprite.sourceCoordinates = brickSprite.sourceCoordinates;
  this._sprite.dimensions = brickSprite.dimensions;

	this._positionCoordinates = {
    x: 30,
    y: 30
  };
	this._sprite.scale = {};
  this._sprite.scale.width = 1;
	this._sprite.scale.height = 1;

	this._stackDisc = [];

  var scale = {
    width: 1,
    height: 1
  };

  for (var i = 0; i < NUMBER_PAWNS; i++) {
    var discSpriteName = "";

  	switch (discColor) {
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
    var positionCoordinates = {
      x: 10,
      y: 10
    };
    var discObject = new GameObject(discSprite, positionCoordinates, i, scale);
		this._stackDisc.push(discObject);
	}

	try {
	}
	catch (errorSprite) {
		alert(errorSprite);
	}

	this._positionCoordinates.x = INITIAL_COORDINATE.X + (number*150);
	this._positionCoordinates.y = INITIAL_COORDINATE.Y;
};

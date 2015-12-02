/**
 * Player.js
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
 * The constructor to create a Player
 *
 * @param
 * Sprite as defined in Atlas.js
 * number is the number of the player
 * scale (width, height)
 *
 */

var Player = function (sprite, number, scale) {
	this._sprite = {};
	this._positionCoordinates = {};
	this._sprite.scale = {};
	this._pool = [];
	this._countDiscs = [];

	for (var i = 0; i < NUMBER_DISC_COLORS; i++) {
		this._countDiscs[i] = 0;
	}

	try {
		this._sprite.name = sprite.name;
		this._sprite.sourceCoordinates = sprite.sourceCoordinates;
		this._sprite.dimensions = sprite.dimensions;
	}
	catch (errorSprite) {
		alert(errorSprite);
	}

	this._number = number;
	this._positionCoordinates.x = INITIAL_COORDINATE.X + (number*150);
	this._positionCoordinates.y = INITIAL_COORDINATE.Y;
	this._sprite.scale.width = 1;
	this._sprite.scale.height = 1;
};

/**
 * Draws itself given a context to draw on, and an atlasImage (the source)
 *
 * @param
 * context to draw on
 * atlasImage to crop the sprite from
 */
Player.prototype.drawItself = function(context, atlasImage) {
	if (DEBUG_ON) {
		console.log("Player: " + this._sprite.name +
			"\nSource: (" + this._sprite.sourceCoordinates.x + "," +
			"\nCoordinates: (" + this._positionCoordinates.x + "," +
			this._positionCoordinates.y + ")");
	}

	context.drawImage(atlasImage,
		this._sprite.sourceCoordinates.x,
		this._sprite.sourceCoordinates.y,
		this._sprite.dimensions.width,
		this._sprite.dimensions.height,
		this._positionCoordinates.x,
		this._positionCoordinates.y,
		this._sprite.dimensions.width * this._sprite.scale.width,
		this._sprite.dimensions.height * this._sprite.scale.height);

	this._pool.forEach( function(miniDisc) {
		/*
		console.log("Drawing Pool");
		console.log(miniDisc.getCoordinates());
		*/
		miniDisc.drawItself(context, atlasImage);
	});

	/*
	context.drawImage(ATLAS.fetchAtlas(), 1520,68,64,64,100,0,64*0.16,64*0.16);
	context.drawImage(ATLAS.fetchAtlas(), 1520,68,64,64,100,4,64*0.16,64*0.16);
	context.drawImage(ATLAS.fetchAtlas(), 1454,68,64,64,108,0,64*0.16,64*0.16);
	*/
};

Player.prototype.collectDisc = function(fullDisc) {
	var miniScale = {
		width: 0.20,
		height: 0.20
	};

	var color = fullDisc.getColor();

	var miniPositionCoordinates = {
		x:8*color + this._positionCoordinates.x + this._sprite.dimensions.width + 2,
		y:4*this._countDiscs[color]
	};

	this._countDiscs[color]++;
	var miniDiscSprite = fullDisc.getSprite();
	miniDisc = new GameObject(miniDiscSprite, miniPositionCoordinates, color, miniScale);
	this._pool.push(miniDisc);

	var discImageName = "";

	switch (color) {
		case GREEN:
			discImageName = IMAGE_COLOR_GREEN;
			break;

		case BLUE:
			discImageName = IMAGE_COLOR_BLUE;
			break;

		case RED:
			discImageName = IMAGE_COLOR_RED;
			break;

		case PURPLE:
			discImageName = IMAGE_COLOR_PURPLE;
			break;

		case YELLOW:
			discImageName = IMAGE_COLOR_YELLOW;
			break;

		case WHITE:
			discImageName = IMAGE_COLOR_WHITE;
			break;

		case BLACK:
			discImageName = IMAGE_COLOR_BLACK;
			break;

		default:
			// Should never be reached. There are only seven Discs's colors.
	}

	fullDisc.changeName(IMAGE_BORDER_SINGLE,IMAGE_TYPE_DISC,discImageName);
};

/**
 * Scale a GameObject
 *
 * @param
 * scale (width, height)
 */
Player.prototype.scale = function(scale) {
	this._sprite.scale = scale;
};

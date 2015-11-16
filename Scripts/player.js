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
	Y:BOARD_OFFSET.Y - (DISC_DIMENSION.HEIGHT + 20)}


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

	try {
		this._sprite.name = sprite.name;
		this._sprite.sourceCoordinates = sprite.sourceCoordinates;
		this._sprite.dimensions = sprite.dimensions;
	}
	catch (errorSprite) {
		alert(errorSprite);
	}

	this._number = number;
	this._positionCoordinates.x = INITIAL_COORDINATE.X + (number*125);
	this._positionCoordinates.y = INITIAL_COORDINATE.Y;
	this._sprite.scale = scale | 1;
};

/**
 * Draws itself given a context to draw on, and an atlasImage (the source)
 *
 * @param
 * context to draw on
 * atlasImage to crop the sprite from
 */
Player.prototype.drawItself = function(context, atlasImage) {
	context.drawImage(atlasImage,
		this._sprite.sourceCoordinates.x,
		this._sprite.sourceCoordinates.y,
		this._sprite.dimensions.width,
		this._sprite.dimensions.height,
		this._positionCoordinates.x,
		this._positionCoordinates.y,
		this._sprite.dimensions.width * this._sprite.scale.width,
		this._sprite.dimensions.height * this._sprite.scale.height);
}

/**
 * Scale a GameObject
 *
 * @param
 * scale (width, height)
 */
Player.prototype.scale = function(scale) {
	this._sprite.scale = scale;
}

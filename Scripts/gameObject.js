/**
 * gameObject.js
 *
 * @var
 * GameObject responsible for handling all the objects in the game.
 *
 * @function
 * GameObject (constructor) creates a GameObject object.
 * drawItself add its image to the context.
 * move changes the coordinate (x,y).
 * scale changes the object scale (width, height).
 *
 * @author
 * Mateus M. F. Mendonça
 */


/**
 * The constructor to create a GameObject
 *
 * @param
 * Sprite as defined in Atlas.js.
 * positionCoordinates (x,y).
 * scale (width, height).
 */
var GameObject = function (sprite, positionCoordinates, scale) {
	this._sprite = {};
	try {
		this._sprite.name = sprite.name;
		this._sprite.sourceCoordinates = sprite.sourceCoordinates;
		this._sprite.dimensions = sprite.dimensions;
		this._sprite.positionCoordinates = positionCoordinates;
		this._sprite.scale = scale;
	}
	catch (errorSprite) {
		alert(errorSprite);
	}
};

/**
 * Draws itself given a context to draw on, and an atlasImage (the source).
 *
 * @param
 * context to draw on.
 * atlasImage to crop the sprite from.
 */
GameObject.prototype.drawItself = function(context, atlasImage) {
	context.drawImage(atlasImage,
		this._sprite.sourceCoordinates.x,
		this._sprite.sourceCoordinates.y,
		this._sprite.dimensions.width,
		this._sprite.dimensions.height,
		this._sprite.positionCoordinates.x,
		this._sprite.positionCoordinates.y,
		this._sprite.dimensions.width * this._sprite.scale.width,
		this._sprite.dimensions.height * this._sprite.scale.height);
}

/**
 * Moves a GameObject.
 *
 * @param
 * positionCoordinates (x,y).
 */
GameObject.prototype.move = function(positionCoordinates) {
	this._sprite.positionCoordinates = positionCoordinates;
}

/**
 * Scale a GameObject.
 *
 * @param
 * scale (width, height).
 */
GameObject.prototype.scale = function(scale) {
	this._sprite.scale = scale;
}

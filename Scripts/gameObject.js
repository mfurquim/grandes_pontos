/**
 * The constructor to create a GameObject.
 * a Sprite as defined in Atlas.js and a positionCoordinates (x,y)
 */
var GameObject = function (sprite, positionCoordinates) {
	this._sprite = {};
	try {
		this._sprite.name = sprite.name;
		this._sprite.sourceCoordinates = sprite.sourceCoordinates;
		this._sprite.dimensions = sprite.dimensions;
		this._sprite.positionCoordinates = positionCoordinates;
	}
	catch (errorSprite) {
		alert(errorSprite);
	}
};

/**
 * Draws itself given a context to draw on, and an atlasImage (the source)
 */
GameObject.prototype.drawItself = function(context, atlasImage) {
	context.drawImage(atlasImage,
		this._sprite.sourceCoordinates.x,
		this._sprite.sourceCoordinates.y,
		this._sprite.dimensions.width,
		this._sprite.dimensions.height,
		this._sprite.positionCoordinates.x,
		this._sprite.positionCoordinates.y,
		this._sprite.dimensions.width,
		this._sprite.dimensions.height);
}

/**
 * Moves a GameObject to positionCoordinates (x,y)
 */
GameObject.prototype.Move = function(positionCoordinates) {
	_sprite.positionCoordinates = positionCoordinates;
}

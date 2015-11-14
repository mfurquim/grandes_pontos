/**
 * GameObject.js
 *
 * @function
 * GameObject creates a GameObject object
 * drawItself add its image to the context
 * move changes the coordinate (x,y)
 * scale changes the object scale (width, height)
 *
 * @author
 * Mateus M. F. Mendonça
 * Matheus Mello Nascimento
 */


/**
 * The constructor to create a GameObject
 *
 * @param
 * Sprite as defined in Atlas.js
 * positionCoordinates (x,y)
 * scale (width, height)
 *
 */
var GameObject = function (sprite, positionCoordinates, color, scale) {
	this._sprite = {};

	try {
		this._sprite.name = sprite.name;
		this._sprite.sourceCoordinates = sprite.sourceCoordinates;
		this._sprite.dimensions = sprite.dimensions;
	}
	catch (errorSprite) {
		alert(errorSprite);
	}

	this._positionCoordinates = positionCoordinates;
	this._color = color;
	this._sprite.scale = scale;
};

/**
 * Draws itself given a context to draw on, and an atlasImage (the source)
 *
 * @param
 * context to draw on
 * atlasImage to crop the sprite from
 */
GameObject.prototype.drawItself = function(context, atlasImage) {
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
 * Moves a GameObject
 *
 * @param
 * positionCoordinates (x,y)
 */
GameObject.prototype.move = function(positionCoordinates) {
	this._sprite.positionCoordinates = positionCoordinates;
}

/**
 * Scale a GameObject
 *
 * @param
 * scale (width, height)
 */
GameObject.prototype.scale = function(scale) {
	this._sprite.scale = scale;
}

/**
 * changeName changes the sprite name of the GameObject
 *
 * @param
 * name (border/type_color.png)
 */
GameObject.prototype.changeName = function(border, type, color) {
	var newName = this.makeName(border, type, color);
	console.log(newName);
	var newSprite = ATLAS.fetchSprite(newName);
	try {
		this._sprite.name = newSprite.name;
		this._sprite.sourceCoordinates = newSprite.sourceCoordinates;
		this._sprite.dimensions = newSprite.dimensions;
	}
	catch (errorSprite) {
		alert(errorSprite);
	}
}

/**
 * makeName combines parameters into appropriate form to change sprite's name
 *
 * @param
 * border (multi, single or bordered)
 * type (disc, pawn1, pawn2, pawn3, classic, thin, human or meeple)
 * color (green, blue, red, purple, yellow, white or black)
 *
 * @return
 * name (border/type_color.png)
 */
GameObject.prototype.makeName = function(border, type, color) {
	var newName = border + "/" + type + "_" + color + ".png";
	return newName;
}

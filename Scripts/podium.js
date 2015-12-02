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

const PODIUM_INITIAL_COORDINATE = {
  x: 50,
  y: 110
}

/**
 * The constructor to create the Podium
 */
var Podium = function () {
  this.generateStackDisc();
  this.generateSteps();
  this._pawnsPosition = [];
};

Podium.prototype.stepup = function(pawn) {
  var newPawn = true;
  console.log(this._pawnsPosition);
  for (innerPawn in this._pawnsPosition) {
    if (innerPawn.getColor() === pawn.getColor()) {
      newPawn = false;
      break;
    }
  }
  if (newPawn === true) {
    this._pawnsPosition.push(pawn);
  }

  this._steps = [];

  var scale = {
    width: 1,
    height: 0.5
  };

  for (var i = 0; i < this._pawnsPosition.length; i++) {
    this._sprite = {};

    var brickSpriteName = "brick_black.png";
    switch (this._pawnsPosition[i].getColor()) {
      case 0:
        brickSpriteName = "brick_green.png";
        break;

      case 1:
        brickSpriteName = "brick_blue.png";
        break;

      case 2:
        brickSpriteName = "brick_red.png";
        break;

      case 3:
        brickSpriteName = "brick_purple.png";
        break;

      case 4:
        brickSpriteName = "brick_yellow.png";
        break;

      default:
        // Should never be reached. There are only five Pawn's colors.
    }
    brickSprite = ATLAS.fetchSprite(brickSpriteName);
    this._sprite.name = brickSprite.name;
    this._sprite.sourceCoordinates = brickSprite.sourceCoordinates;
    this._sprite.dimensions = brickSprite.dimensions;
    for (var j = 0; j <= i; j++) {
      var positionCoordinates = {
        x: PODIUM_INITIAL_COORDINATE.x + (brickSprite.dimensions.width*(i+1)),
        y: PODIUM_INITIAL_COORDINATE.y - (brickSprite.dimensions.height*scale.height*(j+1)) + (4*(j+1))
      };

      var step = new GameObject(brickSprite, positionCoordinates, -1, scale);
      this._steps.push(step);
    }
  }
}

Podium.prototype.generateStackDisc = function() {
  this._stackDisc = [];

  var scale = {
    width: 1,
    height: 1
  };


  // One disc for each pawn
  for (var i = 0; i < NUMBER_PAWNS; i++) {
  	var discSprite = ATLAS.fetchDisc(i);
    var positionCoordinates = {
      x: 430,
      y: 70 - (i*10)
    };
    var discObject = new GameObject(discSprite, positionCoordinates, i, scale);
		this._stackDisc.push(discObject);
	}
};


Podium.prototype.generateSteps = function() {
  this._steps = [];

  this._sprite = {};

  brickSprite = ATLAS.fetchSprite("brick_black.png");

  this._sprite.name = brickSprite.name;
  this._sprite.sourceCoordinates = brickSprite.sourceCoordinates;
  this._sprite.dimensions = brickSprite.dimensions;

  this._sprite.scale = {};
  this._sprite.scale.width = 1;
  this._sprite.scale.height = 1;

  var scale = {
    width: 1,
    height: 0.5
  };

  for (var i = 0; i < NUMBER_PAWNS; i++) {
    for (var j = 0; j <= i; j++) {
      var positionCoordinates = {
        x: PODIUM_INITIAL_COORDINATE.x + (brickSprite.dimensions.width*(i+1)),
        y: PODIUM_INITIAL_COORDINATE.y - (brickSprite.dimensions.height*scale.height*(j+1)) + (4*(j+1))
      };

      var step = new GameObject(brickSprite, positionCoordinates, -1, scale);
      this._steps.push(step);
    }
  }
};

Podium.prototype.drawItself = function(context, atlasImage) {
  this._stackDisc.forEach( function(stackDisc) {
    stackDisc.drawItself(context, atlasImage);
  });

  this._steps.forEach( function(step) {
    step.drawItself(context, atlasImage);
  });
};

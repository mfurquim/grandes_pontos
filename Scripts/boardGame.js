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

// Number of discs' colors
const NUMBER_DISC_COLORS = 7;

// Disc's width plus offset (42 + 8)
const DISC_DIMENSION = {WIDTH: 50, HEIGHT: 50};

// Number of discs in a row
const NUMBER_DISC_ROW = 11;

// Number of discs in a row
const NUMBER_DISC_COL = 5;

// Black and White discs are specials, other colors are regular ones
const DISC_LIMIT = 9,
			DISC_SPECIAL_LIMIT = 5;

// All five pawns' colors
const COLOR_PAWNS = [GREEN, BLUE, RED, PURPLE, YELLOW];

// Number of pawns to be drawn
const NUMBER_PAWNS = 5;

// Pawn's height plus offset (45 + 5)
const PAWN_DIMENSION = {WIDTH: 50, HEIGHT: 50};

// Initial Pawns' position is located at the board's right
const PAWN_INITIAL_COORDINATES = {
	X: (DISC_DIMENSION.WIDTH * NUMBER_DISC_ROW),
	Y: (PAWN_DIMENSION.HEIGHT * (NUMBER_PAWNS - 1))
};

const BOARD_OFFSET = {X: 50, Y: 100};

// Board object containing all the Discs and Panws
var board = {};

/**
 * Generate Board creates Discs ans Pawn objects.
 */
function generateBoard() {

	board.pawns = generatePawns();
	board.discs = generateDiscs();
}

/**
 * Draw board draws all objects in the board game (Discs and Pawns)
 */
function drawBoard(context) {

	/**
	 * Clean the canvas' context before drawing,
	 * otherwise images will be drawn on top of each other.
	 */
	context.clearRect(0,0,canvas.width,canvas.height);

	// Fetch atlas image containing all images
	var atlas = ATLAS.fetchAtlas();

	// For each pawn in pawns, draw itself
	board.pawns.forEach( function(pawn) {
		pawn.drawItself(context, atlas);
	});

	// For each disc in discs, draw itself
	board.discs.forEach( function(disc) {
		disc.drawItself(context, atlas);
	});
}

/**
 * Generate Pawns creates one Pawn object of each color
 * and poised them in the board.
 */
function generatePawns() {

	// Array containing all five pawns
	var pawns = [];

	/**
	 * For each pawn, fetch its sprite and push the object into the array.
	 * Its y coordinate is changed to be drawn on top of the previous one.
	 */
	COLOR_PAWNS.forEach( function(item, index) {

		var positionCoordinates = {
			x:PAWN_INITIAL_COORDINATES.X + BOARD_OFFSET.X,
			y:PAWN_INITIAL_COORDINATES.Y - (PAWN_DIMENSION.HEIGHT * index)
				+ BOARD_OFFSET.Y
		};

		var sprite = fetchPawn(item);

		var scale = {
			width: 0.8,
			height: 0.8
		};

		// Create and Seal object to prevent properties addition
		var pawnObject = new GameObject(sprite, positionCoordinates, scale);
		Object.seal(pawnObject);
		pawns.push(pawnObject);
	});

	// Return array of pawns
	return pawns;
}

/**
 * Generate Discs creates discs object (5 for each color + 5 white and black)
 * and poised them in the board.
 */
function generateDiscs() {

	// Keeping track of how many discs of a specific color has been already drawn
	var discCount = [];

	// There are no discs of any color right now
	for (var i = 0; i < NUMBER_DISC_COLORS; i++) {
		discCount[i] = 0;
	}

	// Array of Disc Object
	var discs = [];

	// Fill the board with random discs along the x and y axis (rows and columns)
	for (var discX = 0; discX < NUMBER_DISC_ROW; discX++) {
		for (var discY = 0; discY < NUMBER_DISC_COL; discY++) {

			var discColor = Math.floor(Math.random()*(NUMBER_DISC_COLORS));

			// If the number of discs of a given color does not exceed the maximum
			if (validateDisc(discCount, discColor) === true) {

				// One more disc of discColor will be drawn
				discCount[discColor] += 1;

				var positionCoordinates = {
					x:((discX * DISC_DIMENSION.HEIGHT) + BOARD_OFFSET.X),
					y:((discY * DISC_DIMENSION.WIDTH) + BOARD_OFFSET.Y)
				};

				var discSprite = fetchDisc(discColor);

				var scale = {
					width: 1,
					height: 1
				};

				// Create and Seal object to prevent properties addition
				var discObject = new GameObject(discSprite, positionCoordinates, scale);
				Object.seal(discObject);
				discs.push(discObject);
			}
			// If it's not valid, redo that disc
			else {
				discY-=1;
			}
		} // End for discY < NUMBER_DISC_COL
	} // End for discX < NUMBER_DISC_ROW

	return discs;
}

/**
 * Fetch pawn receives a color and returns its sprite
 */
function fetchPawn(pawnColor) {

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
}

/**
 * Fetch disc receives a color and returns its sprite
 */
function fetchDisc(discColor) {

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
	return discSprite;
}

/**
 * Validate disc checks whether there are enough discs of that color.
 */
function validateDisc(discCount, discColor) {

	var isValid = false;

	// Discs white and black are considered special discs
	if (discColor === WHITE || discColor === BLACK) {
		isValid = (discCount[discColor] < DISC_SPECIAL_LIMIT);
	} else {
		isValid = (discCount[discColor] < DISC_LIMIT);
	}

	return isValid;
}

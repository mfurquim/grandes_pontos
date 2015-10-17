// Color constants
const GREEN  = 0,
			BLUE   = 1,
			RED    = 2,
			PURPLE = 3,
			YELLOW = 4,
			WHITE  = 5,
			BLACK  = 6;

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
	// Fetch atlas image containing all images
	var atlas = ATLAS.fetchAtlas();

	// For each pawn in pawns, draw itself
	board.pawns.forEach( function(pawn, index, array) {
		pawn.drawItself(context, atlas);
	});

	// For each disc in discs, draw itself
	board.discs.forEach( function(disc, index, array) {
		disc.drawItself(context, atlas);
	});
}

/**
 * Generate Pawns creates one Pawn object of each color
 * and poised them in the board.
 */
function generatePawns() {
	// All five pawns' colors
	const COLOR_PAWNS = [GREEN, BLUE, RED, PURPLE, YELLOW];

	// Pawn's height plus offset (45 + 5)
	const PAWN_HEIGHT = 50;

	// Disc's width plus offset (42 + 8)
	const DISC_WIDTH = 50;

	// Number of discs in a row
	const NUMBER_DISC_ROW = 11;

	// Number of pawns to be drawn
	const NUMBER_PAWN = 5;

	// Initial Pawns' position
	const INITIAL_COORDINATES = {
		x: (DISC_WIDTH * NUMBER_DISC_ROW),
		y: (PAWN_HEIGHT * (NUMBER_PAWN - 1))
	};

	// Array containing all five pawns
	var pawns = [];

	// Sprite of each pawn
	var sprite = null;

	/**
	 * For each pawn, fetch its sprite and push to the array.
	 * Its y coordinate is changed to be drawn on top of the previous one.
	 */
	COLOR_PAWNS.forEach( function(item, index, array) {
		sprite = fetchPawn(item);
		var pawnObject = new GameObject(sprite, {
			x:INITIAL_COORDINATES.x,
			y:INITIAL_COORDINATES.y - (PAWN_HEIGHT * index)
		});

		// Seal object to prevent properties addition
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
	var discCount=[];

	for(var i = 0; i<=6; i++){
		discCount[i]=0;
	}
	discObjects = [];
	discs = [];
	var discsInBoard=[];
	var currentDisc;
	for (var discX = 0;discX<11;discX++){
		discs[discX]=[];
		discsInBoard[discX]=[];
		for (var discY = 1; discY<6;discY++) {
			// console.log(discX,discY);

			discNumber = Math.floor(Math.random()*(7));

			discCount[discNumber]+=1;

			// console.log(discCount[discNumber]);


			if(validateDisc(discCount,discNumber)){
				// discsInBoard[discX][discY]=discNumber;
				discsInBoard[discX][discY]={color: discNumber};
				currentDisc = fetchDisc(discsInBoard[discX][discY].color);
				// console.log(sprt);
				var disco = new GameObject(currentDisc, positionCoordinates = {x:(discX * 50), y:((discY - 1) * 50)});
				discObjects.push(disco);
//				disco.drawItself(context,atls);

				discs[discX][discY] = discsInBoard[discX][discY];
			}
			else {
				discY-=1;
				discCount[discNumber]-=1;
			}
		}
	}

	return discObjects;
}

/**
 * Fetch pawn receives a color and returns its sprite
 */
function fetchPawn(pawnColor) {
	const	GREEN_PAWN_NAME		= "Multi/classic_green.png",
				BLUE_PAWN_NAME		= "Multi/classic_blue.png",
				RED_PAWN_NAME			= "Multi/classic_red.png",
				PURPLE_PAWN_NAME	= "Multi/classic_purple.png",
				YELLOW_PAWN_NAME	= "Multi/classic_yellow.png";

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
	const	GREEN_DISC_NAME		= "Multi/disc_green.png",
				BLUE_DISC_NAME		= "Multi/disc_blue.png",
				RED_DISC_NAME			= "Multi/disc_red.png",
				PURPLE_DISC_NAME	= "Multi/disc_purple.png",
				YELLOW_DISC_NAME	= "Multi/disc_yellow.png",
				WHITE_DISC_NAME		= "Multi/disc_white.png",
				BLACK_DISC_NAME		= "Multi/disc_black.png";

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
 * Validate disc check whether there are enough discs of that color.
 */
function validateDisc(discCount,discNumber){
	// console.log("validando");
	// console.log(discCount[discNumber]);
	var isValid = true;
	if (discCount[discNumber]>9){
		isValid = false;
	}
	else if (discNumber==5 && discCount[5]>5){
		isValid = false;
	}
	else if (discNumber==6 && discCount[6]>5){
		isValid = false;
	}
	else {
		//
	}
	// console.log(isValid);
	return isValid;
}

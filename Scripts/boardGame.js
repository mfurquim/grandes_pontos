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
	generateDiscs();
	board.pawns = generatePawns();

}

/**
 * Draw board draws all objects in the board game (Discs and Pawns)
 */
function drawBoard(context) {
	// Fetch atlas image containing all images
	var atlas = ATLAS.fetchAtlas();

	// For each pawn, draw itself
	board.pawns.forEach( function(item, index, array) {
		item.drawItself(context, atlas);
	});
}

/**
 * Generate Pawns creates one Pawn object of each color
 * and poised them in the board.
 */
function generatePawns() {
	// All five pawns' colors
	const COLOR_PAWNS = [GREEN,	BLUE, RED, PURPLE, YELLOW];

	// Pawn's height plus offset (45 + 5)
	const PAWN_HEIGHT = 50;

	// Initial Pawns' position
	const INITIAL_COORDINATES = {x: (50.0 * 11.0), y: (PAWN_HEIGHT * 4.0)};

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
		pawns.push(new GameObject(sprite, {
			x:INITIAL_COORDINATES.x,
			y:INITIAL_COORDINATES.y - (PAWN_HEIGHT * index)
		}));
	});

	// Return array of pawns
	return pawns;
}

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
			// Should never be reached. There are only five Pawn's colors.
	}

	var pawnSprite = ATLAS.fetchSprite(pawnSpriteName);

	return pawnSprite;
}

function generateDiscs() {
	var discCount=[];

	for(var i = 0; i<=6; i++){
		discCount[i]=0;
	}
	board.discs = [];
	var discsInBoard=[];
	var currentDisc;
	for (var discX = 0;discX<11;discX++){
		board.discs[discX]=[];
		discsInBoard[discX]=[];
		for (var discY = 1; discY<6;discY++) {
			// console.log(discX,discY);

			discNumber = Math.floor(Math.random()*(7));

			discCount[discNumber]+=1;

			// console.log(discCount[discNumber]);


			if(validateDisc(discCount,discNumber)){
				// discsInBoard[discX][discY]=discNumber;
				discsInBoard[discX][discY]={color: discNumber};
				currentDisc = drawDisc(discsInBoard[discX][discY].color);
				var sprt = ATLAS.fetchSprite(currentDisc);
				// console.log(sprt);
				var atls = ATLAS.fetchAtlas();
				var disco = new GameObject(sprt, positionCoordinates = {x:(discX * 50), y:((discY - 1) * 50)});
				disco.drawItself(context,atls);

				board.discs[discX][discY] = discsInBoard[discX][discY];
			}
			else {
				discY-=1;
				discCount[discNumber]-=1;
			}
		}
	}

	// console.log("********");
	// console.log(discsInBoard);
}

function drawDisc(discNumber) {
	var disc;
	if(discNumber===GREEN){
		disc = "Multi/disc_green.png";
	}
	else if (discNumber==BLUE){
		disc = "Multi/disc_blue.png";
	}
	else if (discNumber==RED){
		disc = "Multi/disc_red.png";
	}
	else if (discNumber==PURPLE){
		disc = "Multi/disc_purple.png";
	}
	else if (discNumber==YELLOW){
		disc = "Multi/disc_yellow.png";
	}
	else if (discNumber==WHITE){
		disc = "Multi/disc_white.png";
	}
	else if (discNumber==BLACK){
		disc = "Multi/disc_black.png";
	}
	return disc;
}

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

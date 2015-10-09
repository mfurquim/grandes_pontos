var canvas       = null,
		context      = null,
		offsetWidth  = 20,
		offsetHeight = 20;

// Color constants
var GREEN  = 0,
		BLUE   = 1,
		RED    = 2,
		PURPLE = 3,
		YELLOW = 4,
		WHITE  = 5,
		BLACK  = 6;

var board = {};

var setup = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	canvas.width = (window.innerWidth - offsetWidth);
	canvas.height = (window.innerHeight - offsetHeight);
	generateBoard();
};

setup();
ATLAS.loadingAssets();


// It needs to wait a little for the sprites to be loaded
// Generate Board

function generateBoard(){
	// window.setTimeout(ATLAS.drawSprite, 100, "Multi/classic_red.png", 50, 0);
	generateDiscs();
	generatePawns();

}

function generatePawns(){
	// Multi/pawn2_red.png
	var pawn = [
		{ color: GREEN},
		{ color: BLUE },
		{ color: RED },
		{ color: PURPLE },
		{ color: YELLOW }];

	var posx = 50 * 11;
	var posy = 50 * 5 - 15;

	for (var currentPawn in pawn){
		pawnToDraw = drawPawn(pawn[currentPawn].color);
		// console.log(pawn[currentPawn]);
		// console.log(pawn[currentPawn].color);
		window.setTimeout(ATLAS.drawSprite, 100, pawnToDraw, posx, posy);

		pawn[currentPawn].posx = posx;
		pawn[currentPawn].posy = posy;
		// console.log(pawn[currentPawn].posx,pawn[currentPawn].posy);
		posy -= 50;
	}
	board.pawns = pawn;
}

function drawPawn(pawn){
	var pawnDrawed;
	if (pawn === 0){
		pawnDrawed = "Multi/classic_green.png";
	}
	else if (pawn === 1){
		pawnDrawed = "Multi/classic_blue.png";
	}
	else if (pawn === 2){
		pawnDrawed = "Multi/classic_red.png";
	}
	else if (pawn === 3){
		pawnDrawed = "Multi/classic_purple.png";
	}
	else if (pawn === 4){
		pawnDrawed = "Multi/classic_yellow.png";
	}
	return pawnDrawed;
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
	posX = discX * 50;
	posY = discY * 50;

	discsInBoard[discX][discY].posX = posX;
	discsInBoard[discX][discY].posY = posY;

	// console.log(discsInBoard[discX][discY]);
	board.discs[discX][discY] = discsInBoard[discX][discY];


	window.setTimeout(ATLAS.drawSprite, 100, currentDisc, posX, posY);
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

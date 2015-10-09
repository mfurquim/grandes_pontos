var canvas = null,
		context = null,
		offsetWidth = 20,
		offsetHeight = 20;

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
	var pawn = [0,1,2,3,4];
	var posx = 50 * 11;
	var posy = 50 * 5 - 15;
	for (var currentPawn in pawn){
		pawnToDraw = drawPawn(pawn[currentPawn]);

		window.setTimeout(ATLAS.drawSprite, 100, pawnToDraw, posx, posy);
		posy -= 50;
	}
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

var board=[];
var currentDisc;
for (var discX = 0;discX<11;discX++){
	board[discX]=[];
	for (var discY = 1; discY<6;discY++) {
		// console.log(discX,discY);

 	discNumber = Math.floor(Math.random()*(7));

	discCount[discNumber]+=1;

	// console.log(discCount[discNumber]);


	if(validateDisc(discCount,discNumber)){
	board[discX][discY]=discNumber;

	currentDisc = drawDisc(board[discX][discY]);
	posX = discX * 50;
	posY = discY * 50;

	window.setTimeout(ATLAS.drawSprite, 100, currentDisc, posX, posY);
}
else {

discY-=1;


discCount[discNumber]-=1;
}
	}
}
// console.log("********");
// console.log(board);
}

function drawDisc(discNumber) {
	var disc;
	if(discNumber===0){
		disc = "Multi/disc_green.png";
	}
	else if (discNumber==1){
		disc = "Multi/disc_blue.png";
	}
	else if (discNumber==2){
		disc = "Multi/disc_red.png";
	}
	else if (discNumber==3){
		disc = "Multi/disc_purple.png";
	}
	else if (discNumber==4){
		disc = "Multi/disc_yellow.png";
	}
	else if (discNumber==5){
		disc = "Multi/disc_white.png";
	}
	else if (discNumber==6){
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

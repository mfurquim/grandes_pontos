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



function generateBoard() {
var board=[];
var currentDisc;
for (var discX = 0;discX<10;discX++){
	board[discX]=[];
	for (var discY = 0; discY<10;discY++) {
		console.log(discX,discY);

	board[discX].push(Math.floor(Math.random()*(7 - 1 + 1))+1);

	currentDisc = drawDisc(board[discX][discY]);
	posX = discX * 50;
	posY = discY * 50;

	window.setTimeout(ATLAS.drawSprite, 100, currentDisc, posX, posY);

	}
}
console.log("********");
console.log(board);
}

function drawDisc(discNumber) {
	var disc;
	if(discNumber==1){
		disc = "Multi/disc_green.png";
	}
	else if (discNumber==2){
		disc = "Multi/disc_blue.png";
	}
	else if (discNumber==3){
		disc = "Multi/disc_red.png";
	}
	else if (discNumber==4){
		disc = "Multi/disc_purple.png";
	}
	else if (discNumber==5){
		disc = "Multi/disc_yellow.png";
	}
	else if (discNumber==6){
		disc = "Multi/disc_white.png";
	}
	else if (discNumber==7){
		disc = "Multi/disc_black.png";
	}
	return disc;
}

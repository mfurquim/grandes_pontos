var canvas       = null,
		context      = null,
		offsetWidth  = 20,
		offsetHeight = 20;

const LAST_SPRITE = "gamepad4.png";

// If the debug flag is on, print debug information to console
var DEBUG_ON = false;

var tryDrawing = function() {
	if (getBoard().pawns === undefined) {
		window.setTimeout(tryDrawing, 100);
		return ;
	}
	drawBoard(context);
};

var tryGeneratingBoard = function() {
	if (ATLAS.fetchSprite(LAST_SPRITE) === null) {
		window.setTimeout(tryGeneratingBoard, 100);
		return ;
	}
	generateBoard();
	tryDrawing();
};

window.setTimeout(generateBoard, 1000);

var setup = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	canvas.width = (window.innerWidth - offsetWidth);
	canvas.height = (window.innerHeight - offsetHeight);

	ATLAS.loadingAssets();

	EVENTS.init();

	// It needs to wait a little for the sprites to be loaded
	tryGeneratingBoard();
};

setup();

console.log("Press D to set debug On.");

var canvas       = null,
		context      = null,
		offsetWidth  = 20,
		offsetHeight = 20;

// If the debug flag is on, print debug information to console
var DEBUG_ON = false;

var setup = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	canvas.width = (window.innerWidth - offsetWidth);
	canvas.height = (window.innerHeight - offsetHeight);

	ATLAS.loadingAssets();

	// It needs to wait a little for the sprites to be loaded
	window.setTimeout(generateBoard, 10000);
	window.setTimeout(drawBoard, 20000, context);
};

setup();

console.log("Press D to set debug On.");

var canvas       = null,
		context      = null,
		offsetWidth  = 20,
		offsetHeight = 20;

// Color constants
const GREEN  = 0,
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

	ATLAS.loadingAssets();

	// It needs to wait a little for the sprites to be loaded
	window.setTimeout(generateBoard, 100);
};

setup();

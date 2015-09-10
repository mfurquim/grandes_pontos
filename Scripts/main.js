var canvas = null,
		context = null,
		offsetWidth = 20,
		offsetHeight = 20;

var setup = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	canvas.width = (window.innerWidth - offsetWidth);
	canvas.height = (window.innerHeight - offsetHeight);
};

setup();
loadingAssets();

// It needs to wait a little for the sprites to be loaded
window.setTimeout(drawSprite, 100, "Multi/disc_green.png", 0, 0);

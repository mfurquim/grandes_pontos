var canvas = null,
		context = null,
		atlasAsset = null,
		url = "./Assets/Assets.png";

function load() {
	context.drawImage(atlasAsset, 2, 2, 42, 28, 150, 400, 42, 28);
}

var setup = function() {
	canvas = document.getElementById("myCanvas");
	context = canvas.getContext("2d");
	canvas.width = (window.innerWidth - 20);
	canvas.height = (window.innerHeight - 20);

	context.font = '40px Arial';
	context.fillStyle = 'green';

	atlasAsset = new Image();
	atlasAsset.onload = load;
	atlasAsset.src = url;
};

setup();

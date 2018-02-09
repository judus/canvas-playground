function Game(I) {
	I = I || {};
	I.properties = I.properties || {};
	I.properties.clearCanvas = I.properties.clearCanvas || true;

	I.children = I.children || [];
	
	I = $.extend(new Singularity(I), I);

	I.clearCanvas = function() {
		I.canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		I.canvas.beginPath();
		I.canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		I.canvas.closePath();
	}

	I.updateSelfAfterChildren = function() {
		for (child in I.children) {
			//console.log(I.children[child].name+': '+I.children[child].children.length);
		} 
	}

	I.render = function() {
		I.properties.clearCanvas && I.clearCanvas();
		I.renderChildren();
		I.renderSelf();
	}

	return I;
}

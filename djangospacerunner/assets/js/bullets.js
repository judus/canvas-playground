function Bullets(I) {
	I = I || {};
	I = new Singularity(I);

	I.updateChild = function(child, children, properties) {
		var child = children[child];
		if ((child.properties.timeOfDeath > 0 && 
			(CURRENT_FRAME-child.properties.timeOfDeath) > child.properties.danceOfDeath)) {
			console.log('Bullet destroyed');
			child.active = false;
		}
		child.update();
	}
	
	I.updateSelfAfterChildren = function() {
		I.children = I.filterActiveChildren();
	}
	
	return I;
}

function ShipController(I) {
	I = I || {};

	I.type = 'ShipController';
	I.parent = I.parent || null;
	I.active = I.active || true;

	I.properties = I.properties || {};
	I.properties.width = 0;
	I.properties.height = 0;
	I.properties.x = I.properties.x || randomRange(0, CANVAS_WIDTH);
	I.properties.y = I.properties.y || randomRange(0, CANVAS_HEIGHT);

	I.children = I.children || [];
	I.renderables = I.renderables || [
		new Renderable ({
			key: 'self', 
			active: true, 
			type: 'canvas', 
			radius: 2000/200, //
			fillStyle: 'rgba(255, 0, 0, 1.5)'
		}),
		new Renderable ({
			key: 'hitzone', 
			active: true, 
			type: 'canvas', 
			radius: 10000/200+5, // Health multiplicator
			fillStyle: 'rgba(255, 255, 255, 0.2)'
		}),
		new Renderable ({
			key: 'shild', 
			active: true, 
			type: 'canvas', 
			radius: 10000/200, // Health multiplicator
			fillStyle: 'rgba(0, 100, 200, 0.5)'
		}),
		new Renderable ({
			key: 'armor', 
			active: true, 
			type: 'canvas', 
			radius: 8000/200,
			fillStyle: 'rgba(255, 200, 0, 0.8)'
		}),
	]

	I = new Singularity(I);
	
	I.shoot = function(playerController) {
		I.children[0].shoot(playerController);
	}
	
	I.toggleWeaponSlot = function(n) {
		I.children[0].toggleWeaponSlot(n);
	}

	I.updateChild = function(child, children, properties) {
		var child = children[child];
		child.properties.x = I.midpoint().x - child.properties.width / 2;
		child.properties.y = I.midpoint().y - child.properties.height / 2;
		
		child.update();

		if ((child.properties.timeOfDeath > 0 && 
			(CURRENT_FRAME - child.properties.timeOfDeath) > child.properties.danceOfDeath)) {
			child.active = false;
		}
		I.active = child.active && child.inBounds();
	}

/*
	I.update = function() {
		// shipController can only have 1 child: the ship it controls
		I.children = [I.children[0]];
		
		I.updateChildren();

		//I.active = I.active && I.children[0].inBounds();
	}

	I.init = function() {
		if (I.parent) {
			I.properties.x = I.parent.midpoint().x - I.properties.width/2;
			I.properties.y = I.parent.midpoint().y - I.properties.height/2;
		} else {
			I.properties.x = randomRange(0, CANVAS_WIDTH);
			I.properties.y = randomRange(0, CANVAS_HEIGHT);
		}
		
		//console.log('shipController initialized');
	}
*/
	return I;
}

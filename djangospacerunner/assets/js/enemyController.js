function EnemyController(I) {
	I = I || {};

	I.name = 'EnemyController';
	I.active = I.active || true;
	I.parent = I.parent || null;
	I.children = I.children || [];
	I.bullets = I.bullets || {};

	I.properties = I.properties || {};
	I.properties.canvas = I.properties.canvas || CANVAS;
	I.properties.clearCanvas = I.properties.clearCanvas || true;

	
	I.properties.health = 1000;
	I.properties.maxHealth = 1000;
	I.properties.age = Math.floor(Math.random() * 64);

	I.properties.width = 0;
	I.properties.height = 0;
	I.properties.x = I.properties.x || randomRange(0, CANVAS_WIDTH);
	I.properties.y = I.properties.y || randomRange(0, CANVAS_HEIGHT);
	I.properties.xVelocity = I.properties.xVelocity || 2;
	I.properties.xVelocityFactor = I.properties.xVelocityFactor || randomRange(0, 6);
	I.properties.yVelocity = I.properties.yVelocity || randomRange(1, 6);

	I.properties.timeOfDeath = 0;
	I.properties.danceOfDeath = 20;
	I.properties.disableDoDamage = false;

	I.children = I.children || [];

	I = new Singularity(I);


/*
	I.midpoint = function() {
		return {
			x: I.properties.x + I.properties.width/2,
			y: I.properties.y + I.properties.height/2
		};
	}
*/

	I.hasShip = function() {
		if (I.children.length > 0 && I.children[0].mountedShip) {
			shipController = I.children[0].filterChildrenByType('ShipController');
			if (shipController.length > 0) {
				return shipController[0];
			}
		}
		return null;
	}

	I.getWidth = function() {
		var shipController = I.hasShip();
		if (shipController != null) {
			return shipController.children[0].properties.width;
		} else {
			return I.properties.width;
		}
	}

	I.getHeight = function() {
		var shipController = I.hasShip();
		if (shipController != null) {
			return shipController.children[0].properties.height;
		} else {
			return I.properties.height;
		}
	}

	I.mountShip = function() {
		if (I.children[0].mountedShip !== true) {
			I.children[0].mountShip('ship');
		}
	}

	I.updateChild = function(child, children, properties) {
		var child = children[child];
		child.properties.x += child.properties.xVelocity;
		child.properties.y += child.properties.yVelocity;
		
		child.properties.xVelocity = 
			child.properties.xVelocityFactor * Math.sin(child.properties.age * Math.PI / 64);

		child.properties.age++;

		if ((child.properties.timeOfDeath > 0 && 
			(CURRENT_FRAME-I.properties.timeOfDeath) > child.properties.danceOfDeath)) {
			console.log('Enemies has died');
			child.active = false;
		}
		
		child.update();
		
		I.active = child.active && child.inBounds();

	};
	
	I.init = function() {
		//console.log('New EnemyController at x: '+I.properties.x+' y: '+I.properties.y);
	}

	I.init();


	return I;
}

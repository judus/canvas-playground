function Enemy(I) {
	I = I || {};

	I.name = I.name || 'Enemy';
	
	I.type = I.type || null;
	I.parent = I.parent || null;
	I.active = true;
	I.mountedShip = I.mountedShip || false;

	I.properties = I.properties || {};

	I.properties.width = 32;
	I.properties.height = 32;

	I.properties.x = I.properties.x || randomRange(0, CANVAS_WIDTH);
	I.properties.y = I.properties.y || randomRange(0, CANVAS_HEIGHT);
	
	I.properties.xVelocity = I.properties.xVelocity || 0;
	I.properties.xVelocityFactor = I.properties.xVelocityFactor || randomRange(0, 5);
	I.properties.yVelocity = I.properties.yVelocity || randomRange(1, 5);

	I.properties.timeOfDeath = 0;
	I.properties.danceOfDeath = 20;
	I.properties.disableDoDamage = false;
	I.properties.health = 100;
	I.properties.maxHealth = 100;
	I.properties.age = Math.floor(Math.random() * 64);

	I.children = I.children || [];

	I.renderables = I.renderables || [
		new Renderable({
			name: 'selfZone', 
			active: true, 
			type: 'canvas', 
			radius: 2000/200, //
			fillStyle: 'rgba(255, 0, 0, 1.5)'
		}),
		new Renderable({
			name: 'hitZone', 
			active: true, 
			type: 'canvas', 
			radius: 10000/200+5, // Health multiplicator
			fillStyle: 'rgba(255, 255, 255, 0.2)'
		}),
		new Renderable({
			name: 'shildZone', 
			active: true, 
			type: 'canvas', 
			radius: 10000/200, // Health multiplicator
			fillStyle: 'rgba(0, 100, 200, 0.5)'
		}),
		new Renderable({
			name: 'armorZone', 
			active: true, 
			type: 'canvas', 
			radius: 8000/200,
			fillStyle: 'rgba(255, 200, 0, 0.8)'
		}),
		new Renderable({
			name: 'shipZone', 
			active: true, 
			type: 'canvas', 
			radius: 6000/200, // Health multiplicator
			fillStyle: 'rgba(60, 180, 10, 0.8)',
		}),
		new Renderable({
			name: 'selfSprite', 
			type: 'self',
			active: true,
			sprite: 'player.png',
			width: 32,
			height: 32,
		}),
	];
	
	I = new Singularity(I);

	I.takeDamage = function(damage) {
		if (typeof damage !== "undefined" && damage.damage != null && I.properties.disableDoDamage == false) {
			console.log("Enemy takes "+damage.damage()+" damage");
			I.properties.health -= damage.damage();
			if (I.properties.health <= 0) {
				I.properties.disableDoDamage = true;
				I.explode();
			}
		} else {
			//console.log('Catched a blind shot');
		}
	}

	I.explode = function() {
		Sound.play("HiccupHicough7");
		I.properties.timeOfDeath = CURRENT_FRAME;
		I.properties.xVelocity *= 0.5;
		I.properties.xVelocityFactor *= 0.5;
		I.properties.yVelocity *= 0.5;
	};


	function newShip(name, x, y) {
		var properties = {
				x: x || randomRange(0, CANVAS_WIDTH-200),
				y: y || randomRange(0, CANVAS_HEIGHT-200),
		}

		var shipController = new ShipController({
			canvas: CANVAS,
			properties: properties,
		});
	
		var ship = new Ship({
			canvas: CANVAS,
			model: new ShipModel({
				canvas: CANVAS,
				name: name,
				parent: shipController,
				properties: properties,
			})
		});
		shipController.children.push(ship);
		return shipController;
	}


	I.mountShip = function() {
		if (I.mountedShip == false) {

			var properties = {
					x: I.midpoint().x,
					y: I.midpoint().y,
			}

			var shipController = new ShipController({
				canvas: CANVAS,
				parent: I,
				properties: properties
			});
			
			var ship = new Ship({
				parent: shipController,
				model: new ShipModel({
					canvas: CANVAS,
					randomShip: true, 
					excludes: ['gunship'],
					parent: shipController,
					properties: properties
				})
			});

			shipController.children.push(ship);
			
			I.children.push(shipController);
			I.mountedShip = true;
			//console.log('Enemy mounted ship');
		}
	}

	I.render = function() {
		I.renderCanvases();	
		I.renderSelfBeforeChildren();
		I.renderSelf();	
		I.renderChildren();	
		I.renderSelfAfterChildren();
		I.renderSprites();	
	};

	I.init = function() {
		I.getModel(I.model);
	}
	
	I.init();

	return I;
};




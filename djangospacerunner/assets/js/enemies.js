function Enemies(I) {
	I = I || {};
	I.type = I.type || 'Enemies';
	I = $.extend(new Singularity(I), I);

	I.spawnEnemies = function(level, qty) {
		var qty = qty || 0.02;
		if (Math.random() < qty) {
			
			var properties = {
					x: randomRange(0, CANVAS_WIDTH),
					y: -32,
					age: Math.floor(Math.random() * 64),
					xVelocity: 0,
					xVelocityFactor: randomRange(0, 5),
					yVelocity: randomRange(1, 5),
			}

			var enemyController = new EnemyController({
				parent: I,
				properties: properties,
			});
			
			var enemy = new Enemy({
				model: new EnemyModel({
					name: 'Enemy Type 1',
					parent: enemyController,
					properties: properties,
				})
			});
			enemyController.children.push(enemy);
			I.children.push(enemyController);
		}

	}
	
	I.mountShips = function(children) {
		var children = children || I.children;
		for (child in children) {
			children[child].mountShip('ship');
		}
	}

	I.generateChildren = function() {
		I.spawnEnemies(I.properties.level, I.properties.qty);
		I.mountShips();
	}
	
	return I;
}

function PlayerController(I) {
	I.canvas = I.canvas || null;
	I.player = I.player || {}; 
	I.bullets = I.bullets || [];
	I.keys = I.keys || KEYS;

	I.properties = I.properties || {};
	I.properties.width = I.properties.width || 0;
	I.properties.height = I.properties.height || 0;

	I.properties.x = I.properties.x || 0;
	I.properties.y = I.properties.y || 0;

	I.properties.clampX = I.properties.clampX || CANVAS_WIDTH;
	I.properties.clampY = I.properties.clampY || CANVAS_HEIGHT; 
	I.properties.clampZ = I.properties.clampZ || CANVAS_DEPTH; 

	I = $.extend(new Singularity(I), I);

	I.renderables = I.renderables || [];
	
	I.interact = false;

	I.controls = {
		_shift: false,
		_ctrl: false,
		shift: function(bool) {
			this.shift = bool;
		},
		ctrl: function(bool) {
			this.ctrl = bool;
		},
		
		playerOrShip: function() {
			if (I.player.mountedShip == false) {
				return I.player;
			} else {
				return I.player.filterChildrenByType('ShipController')[0].children[0];
			}
		},

		// Move
		moveLeft: function(shift, ctrl, keydown) {
			shift && this.moveLeftFast();
			!shift && (I.player.properties.x -= this.playerOrShip().properties.movementSpeed);
		},
		moveRight: function(shift, ctrl, keydown) {
			shift && this.moveRightFast();
			!shift && (I.player.properties.x += this.playerOrShip().properties.movementSpeed);
		},
		moveUp: function(shift, ctrl, keydown) {
			shift && this.moveUpFast();
			!shift && (I.player.properties.y -= this.playerOrShip().properties.movementSpeed);
		},
		moveDown: function(shift, ctrl, keydown) {
			shift && this.moveDownFast();
			!shift && (I.player.properties.y += this.playerOrShip().properties.movementSpeed);
		},

		// Move fast
		moveLeftFast: function() {
			I.player.properties.x -= this.playerOrShip().properties.movementSpeed*this.playerOrShip().properties.fastMovementFactor;
		},
		moveRightFast: function() {
			I.player.properties.x += this.playerOrShip().properties.movementSpeed*this.playerOrShip().properties.fastMovementFactor;
		},
		moveUpFast: function() {
			I.player.properties.y -= this.playerOrShip().properties.movementSpeed*this.playerOrShip().properties.fastMovementFactor;
		},
		moveDownFast: function() {
			I.player.properties.y += this.playerOrShip().properties.movementSpeed*this.playerOrShip().properties.fastMovementFactor;
		},
		// Shoot
		shoot: function() {
			I.player.shoot(I);
		},
		shootAlt: function() {
			I.player.shootAlt(I);
		},

		// Abilities
		fireAbility: function(shift, ctrl, keydown) {
			if (keydown.e == true) {
				console.log('hui');
				I.player.eject();
			}
		},

		lastKeyPress: 0,

		keypressAcceptable: function() {
			diff = (CURRENT_FRAME - I.controls.lastKeyPress);
			I.controls.lastKeyPress = CURRENT_FRAME;
			if (diff > 1) { 
				return true 
			}			
			return false;
 		},

		// Interaction
		interact: function(shift, ctrl, keydown) {
			if (I.controls.keypressAcceptable()) {
				I.interact = true;
			} else {
				I.interact = false;
			}
		},

		// Switches
		toggleSwitch: function(n, shift, ctrl, keydown) {
			console.log('toggleSwitch');
			I.player.toggleSwitch(n);
		},
			
	};

	
	I.updateChild = function(child, children, properties) {
		var child = children[child];
		
		BindKeyMap({player: child, keys: I.properties.keys, controls: I.controls});

		child.properties.x = child.properties.x.clamp(0, I.properties.clampX - child.properties.width);
		child.properties.y = child.properties.y.clamp(0, I.properties.clampY - child.properties.height);

		I.bullets.forEach(function(bullet) {
			console.log('update bullets');
			bullet.update();
		});

		I.bullets = I.bullets.filter(function(bullet) {
			return bullet.active;
		});

		if (I.player.mountedShip) {
			I.player.children[0].properties.x = 
				I.player.properties.x.clamp(0, I.properties.clampX - I.player.children[0].properties.width);
			I.player.children[0].properties.y = 
				I.player.properties.y.clamp(0, I.properties.clampY - I.player.children[0].properties.height);

		}
		child.update();
	}

	I.updateSelfBeforeChildren = function() {
		I.children = [I.children[0]];
		I.player = I.children[0];
	}

	I.handleCollisions = function() {
		// Player bullets
		
		var myBullets = BULLETS.children.filter(function(bullet) {
			return bullet.player = I;
		});
		
		myBullets.forEach(function(bullet) {
			ENEMIES.children.forEach(function(enemyController) {

				var enemyOrShip = enemyController.children[0]; // = enemy
				var enemyChildrenSC = enemyOrShip.filterChildrenByType('ShipController'); // array

				if (enemyChildrenSC.length > 0) {
					enemyOrShip = enemyChildrenSC[0].children[0]; // shipController -> ship
				}
				// re-check if enemyOrShip still exists! Could be shot in the meantime
				if (collides(bullet, enemyOrShip)) {
					bullet.hitFrom(I.player, enemyOrShip);
					//enemyOrShip.drawCanvases = true;
					var damage = new Damage({amount: bullet.damage()});
					enemyOrShip.takeDamage(damage, bullet);
					I.player.scores(damage);
				}
				
			});
		});

		// Player collision with enemies
		ENEMIES && ENEMIES.children.forEach(function(enemy) {
			if	(collides(I.player, enemy) && enemy.disableDoDamage == false) {
				I.player.takeDamage(Damage({amount: enemy.properties.health/2}));
				enemy.takeDamage(Damage({amount: (I.player.properties.health*1)}), I.player);
			}
		});

		// Player collision with empty ship
		SHIPS && SHIPS.children.forEach(function(shipController) {
			var ship = shipController.children[0];
			var player = I.children[0];
			var button = null;
		
			if	(collides(player, ship)) {
			
				if (shipController.parent !== player && player.mountedShip !== true) {
					button = new Renderable({
						type: 'sprite', 
						sprite: 'labels/f.png', 
						width: 28, 
						height: 29
					});
					button.sprite = Sprite(button.sprite, function(sprite) {
						sprite.draw(
							CANVAS, 
							ship.midpoint().x + ship.properties.width/2 - sprite.height/2, 
							ship.midpoint().y - ship.properties.height/2 - sprite.height/2
						);
					});
				}
				
				if (I.interact) {
					if (player.mountedShip == false) {
						player.properties.x = I.properties.x = ship.midpoint().x - player.properties.width/2;
						player.properties.y = I.properties.y = ship.midpoint().y - player.properties.height/2;
						player.mountShip(shipController);
					} else {
						player.eject();
					}
					I.interact = false;
				}
			}

			//alert();
			//I.player.mountShip(shipController);
		});

	}

	return I;
}


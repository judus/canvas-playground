function Player(I) {
	I = I || {};
	I.properties = I.properties || {}

	I.properties.x = I.properties.x || CANVAS_WIDTH / 2;
	I.properties.y = I.properties.y || CANVAS_HEIGHT / 2;
	I.properties.width = 32;
	I.properties.height = 32;

	I.properties.score = 0;
	I.properties.level = 0;

	I.properties.lastShot = 0;
	I.properties.lastInput = CURRENT_FRAME;
	I.properties.cooldown = (0.1*60);
	I.properties.movementSpeed = 1;
	I.properties.fastMovementFactor = FASTMOVEMENTFACTOR;
	I.properties.bulletSpeed = 1;
	I.properties.health = 1000;
	I.properties.damage = 1;

	I.mountedShip = false;
	I.shipController = false;

	I.bullets = I.bullets || [];

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
		new Renderable ({
			key: 'ship', 
			active: true, 
			type: 'canvas', 
			radius: 6000/200, // Health multiplicator
			fillStyle: 'rgba(60, 180, 10, 0.8)',
		}),
		new Renderable ({
			active: true, 
			type: 'self', 
			fillStyle: 'rgba(60, 180, 10, 0.8)',
			sprite: "players/player-gray-blue.png",
			width: 32,
			height: 32
		}),
	];
	
	I = new Singularity(I);
	


/*

	I.drawables = function() {
		var drawables = [];
		var i = 0;
		for (key in array) {
			drawables[i++] = I.children[array[key]];
		}

/* !!! adapt
		var player1 = game.players.players.player1;
		var player1Score = scoreMeter({player: player1});
		player1Score.update();
* /

		return drawables;
	}
*/
/*
	I.renderSprite = function(renderable) {
		if (typeof renderable.sprite !== 'undefined') {
			if (typeof renderable.sprite !== 'undefined' && renderable.sprite != null) {
				if (typeof renderable.sprite == 'string' || renderable.sprite instanceof String) {
					renderable.sprite = Sprite(renderable.sprite);
				}
				renderable.sprite.draw(I.properties.canvas, I.midpoint().x-renderable.width/2, I.midpoint().y-renderable.height/2);
			} else {
			}
		}

	}
*/

	I.updateChild = function(child, children, properties) {
		if (child) {
			children[child].properties.x = I.midpoint().x - children[child].properties.width/2;
			children[child].properties.y = I.midpoint().y - children[child].properties.height/2;
		 	children[child].update();
		 }
	}	
/*
	I.updateChildren = function() {
		for (child in I.children) {
			I.updateChild(child, I.children, I.properties);
		}
	}
*/	
	I.renderChildren = function() {
		for (child in I.children) {
			//I.children[child].render && I.children[child].render();
		}
	}
/*	
	I.renderCanvases = function() {
		var canvases = 	I.filterRenderablesByType('canvas');	
		canvases.sort(function(a, b){
			return a.radius < b.radius
		})
		for (canvas in canvases) {
			I.renderCanvas(canvases[canvas]);
		}
	}

	I.renderSprites = function() {
		var sprites = I.filterRenderablesByType('sprite');
		for (sprite in sprites) {
			if (sprites[sprite].width > I.properties.width) {
				I.properties.width = sprites[sprite].width;
			}
			if (sprites[sprite].height > I.properties.height) {
				I.properties.height = sprites[sprite].height;
			}
			I.renderSprite(sprites[sprite]);
		}
	}

	I.renderSelf = function() {		
		var sprites = I.filterRenderablesByType('self');
		for (sprite in sprites) {
			if (sprites[sprite].width > I.properties.width) {
				I.properties.width = sprites[sprite].width;
			}
			if (sprites[sprite].height > I.properties.height) {
				I.properties.height = sprites[sprite].height;
			}
			I.renderSprite(sprites[sprite]);
		}
	}

	I.render = function() {
/*
		I.children = [
			new shipController({type: 'ship', ship: 
				new Ship({
					name: "ship",
					properties: {
						pilot: I,
					}
				})
			})
		]
* /
		I.renderCanvases();	
		I.renderChildren();	
		I.renderSelf();	
		I.renderSprites();	
/*
		I.bullets.forEach(function(bullet) {
			bullet.render();
		});
* / 
	}
*/
	I.mountShip = function(shipControllerWithShip) {
		if (I.mountedShip == false) {
			shipControllerWithShip.parent = I;
			I.children.push(shipControllerWithShip);
			I.shipController = shipControllerWithShip;
			I.mountedShip = true;
		}
	}
	
	I.scores = function(damage) {
		I.score += damage.damage();
		return I.score;
	}
	
	I.takeDamage = function(damage) {
		if (typeof damage !== "undefined" && damage != null) {
			this.health -= damage.damage();
			console.log('Player takes '+damage.damage()+' damage');
		} else {
			//console.log('Catched a blind shot');
		}
	}

	I.shoot = function(playerController) {
		if ( (CURRENT_FRAME - I.lastShot) <  I.cooldown ){
			return;
		}
		
		if (I.mountedShip) {
			I.shipController.shoot(playerController);
		} else {
			console.log('pew');
			for (name in this.weaponSlots) {
				var weaponSlot = I.ship.weaponSlots[name];
				if (weaponSlot.active == true) {

					//console.log(weaponSlot);

					for (i = 0; i < weaponSlot.qty; i++) {
						I.bullets.push(
							Bullet({
								player: I.player,
								ship: I.ship,
								speed: I.bulletSpeed+weaponSlot.bullertSpeed,
								x: weaponSlot.x,
								y: weaponSlot.y - (0-(i*(weaponSlot.height*2))),
								width: weaponSlot.width,
								height: weaponSlot.height,
								color: weaponSlot.color,
							})
						);
					};
					Sound.play("lasershot1");
				}
			}
		}
		I.lastShot = CURRENT_FRAME;
	}


	I.eject = function() {
		I.filterChildrenByType('ShipController')[0].parent = null;
		I.children = I.filterChildrenAllButType('ShipController');
		I.mountedShip = false;
	}

	I.shootAlt = function(bulletCollection) {
		console.log('shootAlt');
	};

	// Abilities
	I.fireAbility = function(key) {
		console.log('fireAbility: '+key);
	},

	// Interaction
	I.interact = function() {
		console.log('interact');
	},

	I.toggleSwitch = function(n) {
console.log(n);
		if ( (CURRENT_FRAME - I.properties.lastInput) >  INPUT_DELAY + 20) {
			console.log('toggleWeapon '+n);
			if (I.mountedShip) {
				I.shipController.toggleWeaponSlot(n);
			}
			I.properties.lastInput = CURRENT_FRAME;
		}
	}

	I.init();
	return I;
};



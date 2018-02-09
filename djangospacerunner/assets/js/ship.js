activeWeaponSlots = null;

function Ship(I) {
	I = I || {}

	I.name = "Ship";
	I.type = I.type || null;
	I.parent = I.parent || null;
	I.active = true;
	I.bullets = I.bullets || [];
	
	I.properties = I.properties || {};
	
	I.properties.x = I.properties.x || randomRange(100, CANVAS_WIDTH-100);
	I.properties.y = I.properties.y || randomRange(100, CANVAS_HEIGHT-100);

	I.properties.width = 0;
	I.properties.height = 0;

	I.properties.health = 1000;
	I.properties.maxHealth = 1000;
	I.properties.lastShot = 0;
	I.properties.cooldown = (0.1*60);
	I.properties.movementSpeed = 3;
	I.properties.fastMovementFactor = 1.75;
	I.properties.bulletSpeed = 1;

	I.properties.maxWeaponSlots = null;
	I.properties.weaponSlots = [];

	I.properties.timeOfDeath = 0;
	I.properties.danceOfDeath = 20;
	I.properties.disableDoDamage = false;

	I.activeWeaponSlots = I.activeWeaponSlots || [];
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
			sprite: 'ship.png',
			width: 96,
			height: 91,
		}),
	];
	
	I = new Singularity(I);
/*
	I.midpoint = function() {
		return {
			x: I.properties.x + I.properties.width/2,
			y: I.properties.y + I.properties.height/2
		};
	}
	
	I.inBounds = function() {
		return I.properties.x >= 0 && I.properties.x <= CANVAS_WIDTH &&
		I.properties.y >= 0 && I.properties.y <= CANVAS_HEIGHT;
	};
*/
/*
	I.getShipModel = function(type) {
		if (typeof type == 'undefined' || type == null) {
			return;
		}

		for (key in I.type.properties) {
			I.properties[key] =  I.type.properties[key];
		}
		
		I.children = I.type.children || I.children;
		I.renderables = I.type.renderables || I.renderables;
	}
* /

	I.updateSelfBeforeChildren = function() {
			console.log(I);alert();
		if (I.parent) {
			console.log('i parent');
			I.properties.x = I.parent.midpoint().x - I.properties.width/2;
			I.properties.y = I.parent.midpoint().y - I.properties.height/2;
		}
	}

/*


	I.mountWeapons = function() {
		var weaponSlots = WeaponSlots();
		for (key in weaponSlots) {
			var weaponSlot = weaponSlots[key];
			if (typeof weaponSlot !== 'undefined' && weaponSlot != null) {
				for (param in weaponSlot) {
					I.properties.weaponSlots[key] = [];
					if (param == 'x' || param == 'y') {
						I.properties.weaponSlots[key][param] = I.midpoint() + weaponSlot[param];
					} else {
						I.properties.weaponSlots[key][param] = weaponSlot[param];
					}
				
				}
			}

		}

		if (activeWeaponSlots == null) {
			activeWeaponSlots = [];
			for (key in weaponSlots) {
				var weaponSlot = weaponSlots[key];
				for (param in weaponSlot) {
					activeWeaponSlots[key] = [];
					activeWeaponSlots[key]['active'] = weaponSlot['active'];
				}
			}
		}

		weaponSlots = I.weaponSlots;
		for (key in weaponSlots) {
			var weapons = Weapons();
			for (param in weapons[key]) {
				if (param == 'x' || param == 'y') {
					// Do nothing
				} else {
					I.weaponSlots[key][param] = weapons[key][param];
				}
			
			}
		}
	}
/* */
	I.toggleWeaponSlot = function(n, nextIsDone) {
		var weaponSlot = I.filterChildrenByType('WeaponSlot');
		weaponSlot[n-1] && weaponSlot[n-1].toggle();
	}


	I.shoot = function(playerController) {
		var weaponSlots = I.filterChildrenByType('WeaponSlot');		
		for (key in weaponSlots) { 
			var weaponSlot = weaponSlots[key];
			var player = I.parent.parent;
			
			if (weaponSlot.enabled == true) {
				weaponSlot.shoot(playerController);
			} 
		}
	}

	I.takeDamage = function(damage, bullet) {
		if (typeof damage !== "undefined" && damage.damage != null && I.properties.disableDoDamage == false) {
			console.log(
				"Ship at "
				+ I.properties.x + "-" + (I.properties.x + parseInt(I.properties.width)) + ":" 
				+ I.properties.y + "-" + (I.properties.y + parseInt(I.properties.height))
				+ " takes " + damage.damage()
				+ " damage from " + bullet.serial + " at "
				+ bullet.properties.x + ':' + bullet.properties.y
			);
				
			I.properties.health -= damage.damage();
			console.log("Ship health: "+I.properties.health);

			if (I.properties.health <= 0) {
				I.explode();
				console.log("Ship explodes");
				I.properties.disableDoDamage = true;
			}
		} else {
			//console.log('Catched a blind shot');
		}
	}

	I.explode = function() {
		Sound.play("explosion-"+randomRange(1,4));
		I.properties.timeOfDeath = CURRENT_FRAME;
		I.filterRenderablesByType('self')[0].sprite = Sprite("explosion.png");
		I.properties.xVelocity *= 0.9;
		I.properties.xVelocityFactor *= 0.9;
		I.properties.yVelocity *= 0.9;
	};

	I.relocateAtParent = function() {
		if (I.parent) {
			I.properties.x = I.properties.offsetX + I.parent.midpoint().x - I.properties.width / 2;
			I.properties.y = I.properties.offsetY + I.parent.midpoint().y - I.properties.height / 2;
		}
	}

	I.render = function() {
		I.relocateAtParent();
		I.renderCanvases();	

		I.renderSelf();
		I.renderChildren();	
	
		I.renderSprites();	
	};

	
	I.init = function() {
		//I.relocateAtParent();
		I.getModel(I.model);
	}
	
	I.init();
	
	return I;	
}




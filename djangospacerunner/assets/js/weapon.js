function Weapon(I) {
	I = I || {}
	I.name = I.name || 'Weapon';
	I.type = I.type || 'Weapon';
	I.lastShot = I.lastShot || 0;
	I.bulletModelName = I.bulletModelName || 0;
	I = new Singularity(I);
/*
	I.relocateAtParent = function() {
		if (I.parent) {
			I.properties.x = I.properties.offsetX + I.parent.midpoint().x - I.properties.width / 2;
			I.properties.y = I.properties.offsetY + I.parent.midpoint().y - I.properties.height / 2;
		}
	}
*/

	I.shoot = function(playerController) {
		var bulletModel = new BulletModel({
			name: I.properties.bulletModelName, 
		});

		var fireRate = I.properties.fireRate * bulletModel.properties.fireRateFactor;
		
		if (fireRate > 0 && (CURRENT_FRAME - I.lastShot) <  fireRate) {
			return;
		}

		I.lastShot = CURRENT_FRAME;
		var qty = I.properties.bulletQty ;
		for (i = qty; i > 0; i--) {
			var player = playerController.player;
			var bulletProperties = {}
			var x = 0;
			var y = 0;
			
			var muzzleX = I.properties.muzzleX;
			var muzzleY = I.properties.muzzleY;
			
			if (I.properties.muzzles) {
				muzzleX = I.properties.muzzles[i-1].x;
				muzzleY = I.properties.muzzles[i-1].y;
			}

			bulletProperties = {
				speed: I.properties.bulletSpeed * bulletModel.properties.speedFactor,
				damage: bulletModel.properties.damage * I.properties.damageFactor,
				x: muzzleX + I.midpoint().x - (bulletModel.properties.width / 2),
				y: muzzleY + I.midpoint().y + bulletModel.properties.height
					+ i * (2 * bulletModel.properties.height)
			}

			$.extend(bulletModel.properties, bulletProperties);

			if (I.properties.sound) {
				Sound.play(I.properties.sound);
			} else {
				Sound.play("lasershot1");
			}

			BULLETS.children.push(
				Bullet({
					player: player,
					properties: bulletModel.properties,
					renderables: bulletModel.renderables,
				})
			);
			
		};
	}

	I.render = function() {
		I.relocateAtParent();
		I.renderCanvases();	
		I.renderChildren();	
		I.renderSelf();	
		I.renderSprites();	
	};

	I.init = function() {
		I.getModel(I.model);
	}
	
	I.init();
	return I;
};


function Bullet(I) {
	I = I || {}
	I.name = I.name || 'Bullet';
	I.type = I.type || 'Bullet';
	I.properties = I.properties || {}
	I.active = true;
	I.player = I.player || null;
	
	I.properties.color = I.properties.color || "rgba('255', '153' '0', '0.8')";
	I.properties.xVelocity = 0;
	I.properties.yVelocity = I.properties.speed;
	I.properties.width = I.properties.width || 2;
	I.properties.height = I.properties.height || 2;
	I.properties.damageValue = I.properties.damageValue || 10;
	I.properties.danceOfDeath = I.properties.danceOfDeath || 0;
	I.properties.timeOfDeath = 0;
	I.properties.disableDoDamage = false;
	
	I.children = I.children || [];

	I.renderables = I.renderables || [];
	
	I = new Singularity(I);

	I.inBounds = function() {
		return I.properties.x >= 0 && I.properties.x <= CANVAS_WIDTH &&
		I.properties.y >= 0 && I.properties.y <= CANVAS_HEIGHT;
	};
/*
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
		if (I.properties.timeOfDeath > 0 ) {
			drawedBullets++;
		} else {
			CANVAS.fillStyle = I.properties.color;
			CANVAS.fillRect(I.properties.x, I.properties.y, I.properties.width, I.properties.height);
		}
	};
*/

	I.update = function() {
		if (I.properties.timeOfDeath == 0) {
			I.properties.x += I.properties.xVelocity;
			I.properties.y -= I.properties.yVelocity;
		} else {
			if ((CURRENT_FRAME-I.properties.timeOfDeath) > I.properties.danceOfDeath) {
				I.active = false;
				drawedBullets = 0 || drawedBullets--;
				console.log(drawedBullets);
			}
		}
		I.active = I.active && I.inBounds();
	};

	I.damage = function() {
		return I.properties.damage;
	}

	I.hitFrom = function(shooter, target) {
		console.log('I hit!');
		I.properties.timeOfDeath = CURRENT_FRAME;

		if (I.properties.disableDoDamage == false) {
			Sound.play("hit1");
			I.properties.disableDoDamage = true;
			I.renderables = [];
			I.renderables.push(
				new Renderable({
					name: 'selfSprite',
					type: 'self',
					active: true,
					sprite: "bullets/bullet-explosion2.png",
				})
			);
		}
		
		I.properties.xVelocity *= 0.2;
		I.properties.xVelocityFactor *= 0.2;
		I.properties.yVelocity *= 0.2;
	};
	
	I.updateSelfBeforeChildren = function() {
		I.children = [I.children[0]];
		I.player = I.children[0];
	}

	I.init = function() {
		I.getModel(I.model);
	}
	
	I.init();
	return I;
}

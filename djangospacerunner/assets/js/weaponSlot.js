function WeaponSlot(I) {
	I = I || {}
	I.type = I.type || 'WeaponSlot';
	I.enabled = I.enabled || true;

	I.renderables = I.renderables || [
		new Renderable ({
			name: 'lockStatus', 
			active: true, 
			type: 'canvas', 
			radius: 300/200, //
			fillStyle: 'rgba(25, 254, 0, 0.3)',
			//fillStyle: 'rgba(255, 0, 0, 0.4)',
			fillStyle: 'rgba(255, 153, 0, 0.9)',
			offsetY: 10
		}),
/*
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
*/	]


	I = new Singularity(I);
	
	I.drawCanvases = true;

	I.enable = function() {
		I.enabled = true;
		I.filterRenderablesByName('lockStatus')[0].fillStyle = 'rgba(255, 153, 0, 0.9)';
		Sound.play("GunClip");

	}

	I.disable = function() {
		I.enabled = false;
		I.filterRenderablesByName('lockStatus')[0].fillStyle = 'rgba(25, 254, 0, 0.4)';
		Sound.play("GunClip");
	}

	I.toggle = function() {
		if (I.enabled) {
			I.disable();
		} else {
			I.enable();
		}
		console.log('enabled: '+I.enabled);
	}

	I.shoot = function(playerController) {
		var weapons = I.filterChildrenByType('Weapon');
		for (weapon in weapons) {
			weapons[weapon].shoot(playerController);
		}
	}

	
	I.render = function() {
		I.renderChildren();	
		I.renderSelf();	
		I.renderSprites();	
		I.renderCanvases();	
	};

/**/
	
	return I;
};


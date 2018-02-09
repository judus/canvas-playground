function WeaponModel(I) {
	I = I || {}
	I.name = I.name || null;
	I.type = I.type || null;
	I.models = I.models || [];
	I.children = I.children || [];
	I.randomItem = I.randomItem || false;
	I.excludes = I.excludes || [];

	I.loadModels = function() {
		I.models = [
			{
				name: 'Gunship Fighter 3 Weapon Type 1',
				properties: {
					width: 4,
					height: 6,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -3,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					fireRate: 10,
					damageFactor: 2.0,
					bulletModelName: 'blue-2x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-3-weapontype-1.png',
						width: 4,
						height: 6,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'Gunship Fighter 3 Weapon Type 2',
				properties: {
					width: 6,
					height: 20,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -3,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 30,
					fireRate: 10,
					damageFactor: 3.0,
					bulletModelName: 'green-16x' ,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-3-weapontype-2.png',
						width: 6,
						height: 20,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'Gunship Fighter 3 Weapon Type 3',
				properties: {
					width: 7,
					height: 22,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -3,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'red-8x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-3-weapontype-3.png',
						width: 7,
						height: 22,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'Gunship Fighter 2 Weapon Type 1',
				properties: {
					width: 10,
					height: 44,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -22,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'red-8x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-2-weapontype-1.png',
						width: 10,
						height: 44,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'Gunship Fighter 2 Weapon Type 2',
				properties: {
					width: 20,
					height: 66,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -3,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 80,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'green-16x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-2-weapontype-2.png',
						width: 20,
						height: 66,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'Gunship Fighter 2 Weapon Type 3 R',
				properties: {
					width: 45,
					height: 39,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -20,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'blue-arrow',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-2-weapontype-3r.png',
						width: 45,
						height: 39,
						offSetX: 0,
						offsetY: 0,
					})
				]
			},
			{
				name: 'Gunship Fighter 2 Weapon Type 3 L',
				properties: {
					width: 45,
					height: 39,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -20,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'blue-arrow',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-2-weapontype-3l.png',
						width: 45,
						height: 39,
						offSetX: 0,
						offsetY: 0,
					})
				]
			},
			{
				name: 'Gunship Fighter 2 Weapon Type 4',
				properties: {
					width: 21,
					height: 63,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -31,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'red-8x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-fighter-2-weapontype-4.png',
						width: 21,
						height: 63,
						offSetX: 0,
						offsetY: 0,
					})
				]
			},
			{
				name: 'Gunship Heavy Fighter 1 Weapon Type 1',
				properties: {
					width: 18,
					height: 62,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -31,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'red-16x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-heavyfighter-1-weapontype-1.png',
						width: 18,
						height: 62,
						offSetX: 0,
						offsetY: 0,
					})
				]
			},
			{
				name: 'Gunship Heavy Fighter 1 Weapon Type 2',
				properties: {
					width: 28,
					height: 77,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -38,
					muzzleZ: 0,
					bulletQty: 1,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'red-8x',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-heavyfighter-1-weapontype-2.png',
						width: 28,
						height: 77,
						offSetX: 0,
						offsetY: 0,
					})
				]
			},
			{
				name: 'Gunship Heavy Fighter 1 Weapon Type 3',
				properties: {
					width: 42,
					height: 96,
					offSetX: 0,
					offsetY: 0,
					offsetZ: 0,
					muzzleX: 0,
					muzzleY: -38,
					muzzleZ: 0,
					muzzles: [
						{x: -11, y: -38, z: 0, delay: 0},
						{x: +11, y: -38, z: 0, delay: 0}
					],
					bulletQty: 2,
					bulletSpeed: 10,
					damageFactor: 5,
					fireRate: 10,
					bulletModelName: 'blue-laser',
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'gunships/gunship-heavyfighter-1-weapontype-3.png',
						width: 42,
						height: 96,
						offSetX: 0,
						offsetY: 0,
					})
				]
			}
		];	
		
		I.children = I.models;
	}



	I.filterChildrenByName = function(name) {
		return I.models.filter(function(child) {
			return (child.name === 'undefined' || child.name == name);
		});
	}

	I.filterChildrenByType = function(type) {
		return I.models.filter(function(child) {
			return (child.type === 'undefined' || child.type == type);
		});
	}

	I.filterChildrenAllButType = function(array, type) {
		return I.models.filter(function(child) {
			return (child.type === 'undefined' || child.type != type);
		});
	}
		

	I.list = function(type) {
		(I.children.length == 0) && I.loadModels();
		var items = I.children;
		if (type) {
			items = I.filterChildrenByType(type);
		}
		return items;
	}

	I.init = function() {
		(I.children.length == 0) && I.loadModels();
		var items = I.children;
		var model = [];
		
		if (I.excludes.length > 0) {
			for (exclude in I.excludes) {
				items = I.filterChildrenAllButType(items, I.excludes[exclude]);
			}
		}
			
		if (I.randomItem || (I.model == null && I.name == null)) {
			model = [items[randomRange(0, items.length-1)]];
		} else {
			if (I.name) {
				model = I.filterChildrenByName(I.name);
			} else {
				model = I.filterChildrenByType(I.type);
			}
			
		}
		$.extend(true, I, model[0]);
		if (model[0].children) I.children = model[0].children;
		if (model[0].renderables) I.renderables = model[0].renderables;
	}

	I.init();
	
	return I;
}

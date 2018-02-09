function EnemyModel(I) {
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
				name: 'Enemy Type 1',
				type: 'Enemy Type 1',
				properties: {
					width: 32,
					height: 32,
				},
				renderables: [
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
						sprite: 'players/player-red-blue-down.png',
						width: 32,
						height: 32,
					}),
				]
			},
			{
				name: 'Enemy Type 2',
				type: 'Enemy Type 2',
				children: [],
				renderables: [
					new Renderable({
						type: 'self',
						active: true,
						sprite: 'players/player-red-blue-down.png',
					}),
				]
			}
		
		];	
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
			
		if (I.randomItem || (I.type== null && I.name == null)) {
			model = [items[randomRange(0, items.length-1)]];
		} else {
			if (I.name) {
				model = I.filterChildrenByName(I.name);
			} else {
				model = I.filterChildrenByType(I.type);
			}
			
		}
		//model[0]
		//console.log(model);alert();
		$.extend(true, I, model[0]);
		if (model[0].children) I.children = model[0].children;
		if (model[0].renderables) I.renderables = model[0].renderables;
	}

	I.init();
	
	return I;
}

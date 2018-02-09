function BulletModel(I) {
	I = I || {}
	I.name = I.name || null;
	I.type = I.type || null;
	I.models = I.models || [];
	I.children = I.children || [];
	I.renderables = I.renderables || [];
	I.randomItem = I.randomItem || false;
	I.excludes = I.excludes || [];

	I.loadModels = function() {
		I.models = [
			{
				name: 'standard',
				properties: {
					damage: 10,
					width: 5,
					height: 6,
					speedFactor: 1.0,
					fireRateFactor: 1.0,
					color: "rgba('255', '153', '0', '0.8')",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/red-2x.png',
						width: 5,
						height: 6,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'red-2x',
				properties: {
					damage: 10,
					width: 5,
					height: 6,
					speedFactor: 1.25,
					fireRateFactor: 0.25,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/red-2x.png',
						width: 5,
						height: 6,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'red-8x',
				properties: {
					damage: 10,
					width: 6,
					height: 8,
					speedFactor: 1.5,
					fireRateFactor: 0.75,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/red-8x.png',
						width: 6,
						height: 8,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'red-16x',
				properties: {
					damage: 10,
					width: 9,
					height: 9,
					speedFactor: 0.25,
					fireRateFactor: 2.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/red-16x.png',
						width: 9,
						height: 9,      
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'red-arrow',
				properties: {
					damage: 10,
					width: 9,
					height: 21,
					speedFactor: 2,
					fireRateFactor: 2.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/red-arrow.png',
						width: 9,
						height: 21,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'green-2x',
				properties: {
					damage: 10,
					width: 5,
					height: 6,
					speedFactor: 1.25,
					fireRateFactor: 1.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/green-2x.png',
						width: 5,
						height: 6,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'green-8x',
				properties: {
					damage: 10,
					width: 6,
					height: 8,
					speedFactor: 1.5,
					fireRateFactor: 0.75,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/green-8x.png',
						width: 6,
						height: 8,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'green-16x',
				properties: {
					damage: 10,
					width: 9,
					height: 9,
					speedFactor: 0.25,
					fireRateFactor: 2.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/green-16x.png',
						width: 9,
						height: 9,      
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'green-arrow',
				properties: {
					damage: 10,
					width: 9,
					height: 21,
					speedFactor: 2,
					fireRateFactor: 2.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/green-arrow.png',
						width: 9,
						height: 21,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'blue-2x',
				properties: {
					damage: 10,
					width: 5,
					height: 6,
					speedFactor: 1.25,
					fireRateFactor: 1.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/blue-2x.png',
						width: 5,
						height: 6,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'blue-8x',
				properties: {
					damage: 10,
					width: 6,
					height: 8,
					speedFactor: 1.5,
					fireRateFactor: 0.75,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/blue-8x.png',
						width: 6,
						height: 8,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'blue-16x',
				properties: {
					damage: 10,
					width: 9,
					height: 9,
					speedFactor: 0.25,
					fireRateFactor: 2.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/blue-16x.png',
						width: 9,
						height: 9,      
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'blue-arrow',
				properties: {
					damage: 10,
					width: 9,
					height: 21,
					speedFactor: 2,
					fireRateFactor: 2.0,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/blue-arrow.png',
						width: 9,
						height: 21,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
			{
				name: 'blue-laser',
				properties: {
					damage: 10,
					width: 6,
					height: 6,
					speedFactor: 1.6,
					fireRateFactor: 1,
					color: "rgba('255', '153', '0', 0.8)",
				},
				renderables: [
					new Renderable({
						name: 'selfSprite',
						type: 'self',
						active: true,
						sprite: 'bullets/blue-laser.png',
						width: 9,
						height: 21,
						offSetX: 0,
						offsetY: 0,
					}),
				]
			},
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

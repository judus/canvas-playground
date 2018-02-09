function ShipModel(I) {
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
				name: 'Grayblue Gunship 1',
				type: 'grayblue-gunship-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 148,
					height: 76,
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
						sprite: 'grayblues/grayblue-gunship-1.png',
					}),
				]
			},
			{
				name: 'Grayblue Gunship 2',
				type: 'grayblue-gunship-2',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 114,
					height: 107,
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
						sprite: 'grayblues/grayblue-gunship-2.png',
						width: 114,
						height: 107,
					}),
				]
			},
			{
				name: 'Grayblue Gunship 3',
				type: 'grayblue-gunship-3',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 145,
					height: 101
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
						sprite: 'grayblues/grayblue-gunship-3.png',
						width: 145,
						height: 101,
					}),
				]
			},
			{
				name: 'Grayblue Trooper 1',
				type: 'grayblue-trooper-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 101,
					height: 46
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
						sprite: 'grayblues/grayblue-trooper-1.png',
						width: 101,
						height: 46,
					}),
				]
			},
			{
				name: 'Grayblue Trooper 2',
				type: 'grayblue-trooper-2',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 115,
					height: 70
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
						sprite: 'grayblues/grayblue-trooper-2.png',
						width: 115,
						height: 70,
					}),
				]
			},
			{
				name: 'Grayblue Trooper 3',
				type: 'grayblue-trooper-3',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 105,
					height: 78,
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
						sprite: 'grayblues/grayblue-trooper-3.png',
						width: 105,
						height: 78,
					}),
				]
			},
			{
				name: 'Grayblue Recon 1',
				type: 'grayblue-recon-1',
				properties: {
					movementSpeed: 4.5,
					width: 51,
					height: 48,
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
						sprite: 'grayblues/grayblue-recon-1.png',
						width: 51,
						height: 48,
					}),
				]
			},
			{
				name: 'Grayblue Bomber 1',
				type: 'grayblue-bomber-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 134,
					height: 133,
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
						sprite: 'grayblues/grayblue-bomber-1.png',
						width: 134,
						height: 133,
					}),
				]
			},
			{
				name: 'Grayblue Superbomber 1',
				type: 'grayblue-superbomber-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 180,
					height: 154,
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
						sprite: 'grayblues/grayblue-superbomber-1.png',
						width: 180,
						height: 154,
					}),
				]
			},
			{
				name: 'Grayblue Superbomber 2',
				type: 'grayblue-superbomber-2',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 177,
					height: 128,
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
						sprite: 'grayblues/grayblue-superbomber-2.png',
						width: 177,
						height: 128,
					}),
				]
			},
			{
				name: 'Grayblue Captain 1',
				type: 'grayblue-captain-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 237,
					height: 74,
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
						sprite: 'grayblues/grayblue-captain-1.png',
						width: 237,
						height: 74,
					}),
				]
			},
			{
				name: 'Grayblue Commander 1',
				type: 'grayblue-commander-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 177,
					height: 189,
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
						sprite: 'grayblues/grayblue-commander-1.png',
						width: 177,
						height: 189,
					}),
				]
			},
			{
				name: 'Grayship Civilian 1',
				type: 'grayship-civilian-1',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 237,
					height: 74,
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
						sprite: 'grayblues/grayblue-commander-1.png',
						width: 237,
						height: 74,
					}),
				]
			},
			{
				name: 'Grayship Civilian 2',
				type: 'grayship-civilian-2',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 54,
					height: 49,
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
						sprite: 'grayships/grayship-civilian-2r.png',
						width: 54,
						height: 49,
					}),
				]
			},
			{
				name: 'Grayship Civilian 3',
				type: 'grayship-civilian-3',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 83,
					height: 58,
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
						sprite: 'grayships/grayship-civilian-3r.png',
						width: 83,
						height: 58,
					}),
				]
			},
			{
				name: 'Grayship Civilian 4',
				type: 'grayship-civilian-4',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 75,
					height: 142,
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
						sprite: 'grayships/grayship-civilian-4r.png',
						width: 75,
						height: 142,
					}),
				]
			},
			{
				name: 'Grayship Civilian 5',
				type: 'grayship-civilian-5',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 75,
					height: 142,
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
						sprite: 'grayships/grayship-civilian-5r.png',
						width: 75,
						height: 142,
					}),
				]
			},
			{
				name: 'Grayship Civilian 6',
				type: 'grayship-civilian-6',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 58,
					height: 103,
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
						sprite: 'grayships/grayship-civilian-6r.png',
						width: 58,
						height: 103,
					}),
				]
			},
			{
				name: 'Grayship Civilian 7',
				type: 'grayship-civilian-7',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 81,
					height: 105,
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
						sprite: 'grayships/grayship-civilian-7r.png',
						width: 81,
						height: 105,
					}),
				]
			},
			{
				name: 'Grayship Civilian 8',
				type: 'grayship-civilian-8',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 96,
					height: 131,
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
						sprite: 'grayships/grayship-civilian-8r.png',
						width: 96,
						height: 131,
					}),
				]
			},
			{
				name: 'Grayship Civilian 9',
				type: 'grayship-civilian-9',
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 56,
					height: 130,
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
						sprite: 'grayships/grayship-civilian-9r.png',
						width: 56,
						height: 130,
					}),
				]
			},
			{
				name: 'Gunship Fighter 1',
				type: 'gunship',
				properties: {
					offsetY: 0,
					offsetY: 0,
					width: 148,
					height: 98,
					movementSpeed: 4,
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
						sprite: 'gunships/gunship-fighter-1.png',
						width: 148,
						height: 98,
					}),
				]
			},
			{
				name: 'Gunship Fighter 2',
				type: 'gunship',
				properties: {
					offsetY: 0,
					offsetY: 0,
					width: 304,
					height: 175,
					movementSpeed: 3.5,
				},
				children: [
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -18,
							offsetY: -78,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 1'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +18,
							offsetY: -78,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 1'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -42,
							offsetY: -28,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +42,
							offsetY: -28,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -63,
							offsetY: -25,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +63,
							offsetY: -25,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -149,
							offsetY: -19,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 3 L'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +149,
							offsetY: -19,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 3 R'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +0,
							offsetY: -73,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 2 Weapon Type 4'})}),
						]
					}),
				],
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
						sprite: 'gunships/gunship-fighter-2.png',
						width: 304,
						height: 175,
					}),
				]
			},
			{
				name: 'Gunship Fighter 3',
				type: 'gunship',
				properties: {
					width: 280,
					height: 119,
					movementSpeed: 5,
				},
				children: [
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -11,
							offsetY: -42,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 1'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: 11,
							offsetY: -42,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 1'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -67,
							offsetY: -34,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: 67,
							offsetY: -34,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -26,
							offsetY: -18,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 3'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: 26,
							offsetY: -18,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 3'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -38,
							offsetY: -16,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 3'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: 38,
							offsetY: -16,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Fighter 3 Weapon Type 3'})}),
						]
					}),
				],
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
						sprite: 'gunships/gunship-fighter-3.png',
						width: 158,
						height: 73,
					}),
				]
			},
			{
				name: 'Gunship Fighter 3 No Weapons',
				type: 'gunship',
				parent: I,
				properties: {
					movementSpeed: 4.5,
					offsetY: 0,
					offsetY: 0,
					width: 158,
					height: 73,
				},
				children: [],
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
						sprite: 'gunships/gunship-fighter-3-noweapons.png',
						width: 158,
						height: 73,
					}),
				]
			},
			{
				name: 'Gunship Heavy Fighter 1',
				type: 'gunship',
				properties: {
					width: 203,
					height: 127,
					movementSpeed: 1.5,
				},
				children: [
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -32,
							offsetY: -23,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 1'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +32,
							offsetY: -23,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 1'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -71,
							offsetY: -2,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 3'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +76,
							offsetY: -2,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 3'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -106,
							offsetY: -23,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +111,
							offsetY: -23,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: -166,
							offsetY: 10,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 2'})}),
						]
					}),
					new WeaponSlot({
						parent: I.filterChildrenByName(this.name)[0],
						properties: {
							offsetX: +166,
							offsetY: 10,
						},
						children: [
							new Weapon({model: new WeaponModel({name: 'Gunship Heavy Fighter 1 Weapon Type 2'})}),
						]
					})
				],
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
						sprite: 'gunships/gunship-heavyfighter-1.png',
						width: 203,
						height: 127,
					}),
				]
			},
			{
				name: 'Gunship Heavy Fighter 2',
				type: 'gunship',
				properties: {
					width: 254,
					height: 105,
					movementSpeed: 3.5,
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
						sprite: 'gunships/gunship-heavyfighter-2.png',
						width: 254,
						height: 105,
					}),
				]
			},
			{
				name: 'Gunship Recon 1',
				type: 'gunship',
				properties: {
					width: 66,
					height: 69,
					movementSpeed: 6,
					fastMovementFactor: 2.5,
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
						sprite: 'gunships/gunship-recon-1.png',
						width: 66,
						height: 69,
					}),
				]
			},
			{
				name: 'Gunship Recon 2',
				type: 'gunship',
				properties: {
					width: 73,
					height: 71,
					movementSpeed: 3.5,
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
						sprite: 'gunships/gunship-recon-2.png',
						width: 73,
						height: 71,
					}),
				]
			},
			{
				name: 'Gunship Recon 3',
				type: 'gunship',
				properties: {
					width: 59,
					height: 83,
					movementSpeed: 4,
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
						sprite: 'gunships/gunship-recon-3.png',
						width: 59,
						height: 83,
					}),
				]
			},
			{
				name: 'Gunship Recon 4',
				type: 'gunship',
				properties: {
					width: 79,
					height: 59,
					movementSpeed: 5,
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
						sprite: 'gunships/gunship-recon-4.png',
						width: 79,
						height: 59,
					}),
				]
			},
			{
				name: 'Gunship Bomber 1',
				type: 'gunship',
				properties: {
					width: 107,
					height: 103,
					movementSpeed: 4,
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
						sprite: 'gunships/gunship-bomber-1.png',
						width: 107,
						height: 103,
					}),
				]
			},
			{
				name: 'Gunship Cargo 1',
				type: 'gunship',
				properties: {
					width: 109,
					height: 161,
					movementSpeed: 2,
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
						sprite: 'gunships/gunship-cargo-1.png',
						width: 109,
						height: 161,
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

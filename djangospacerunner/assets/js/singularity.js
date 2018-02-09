/* NODE REIHENFOLGE UMKEHREN: nicht parent->updateChildren() sondern children->updateParent */

function Singularity(I) {
	I = I || {};
	
	// My structural properties
	I.type = I.type || 'Singularity';
	I.name = I.name || I.type;
	I.parent = I.parent || null;
	I.model = I.model || null;
	I.canvas = I.canvas || null;
	I.serial = I.serial || null;
	
	I.drawCanvases = I.drawCanvases || false;

	// My properties
	I.properties = I.properties || {};
	I.properties.x = I.properties.x || 0;
	I.properties.y = I.properties.y || 0;
	I.properties.z = I.properties.z || 0;
	I.properties.i = I.properties.i || 0; //intelligence == time?
	I.properties.e = I.properties.e || 0; //var a = 0; // father / input // energy
	I.properties.s = I.properties.s || 1; //var b = 1; // mother / output // raumzeit
	I.properties.offsetX = I.properties.offsetX || 0;
	I.properties.offsetY = I.properties.offsetY || 0;
	I.properties.width = I.properties.width || 0;
	I.properties.height = I.properties.height || 0;
	I.properties.depth = I.properties.depth || 0;
	
	// My children
	I.children = I.children || [];
	
	// My renderable objects
	I.renderables = I.renderables || [];

	I.inBounds = function() {
		return I.properties.x >= 0 - I.properties.width * 2 && I.properties.x <= CANVAS_WIDTH + I.properties.width * 2 &&
		I.properties.y >= 0 - I.properties.width * 2 && I.properties.y <= CANVAS_HEIGHT + I.properties.height * 2;
	};

	I.midpoint = function() {
		return {
			x: I.properties.x + I.properties.width / 2,
			y: I.properties.y + I.properties.height / 2
		};
	}

	I.relocateAtParent = function() {
		if (I.parent != null && I.parent.midpoint) {
			I.properties.x = I.properties.offsetX + I.parent.midpoint().x - I.properties.width / 2;
			I.properties.y = I.properties.offsetY + I.parent.midpoint().y - I.properties.height / 2;
		}
	}

	I.filterActiveChildren = function() {
		return I.children.filter(function(child) {
			return (child.active === 'undefined' || child.active != false);
		});
	}
		
	I.filterChildrenByName = function(name) {
		return I.children.filter(function(child) {
			return (child.name === 'undefined' || child.name == name);
		});
	}
		
	I.filterChildrenByType = function(type) {
		return I.children.filter(function(child) {
			return (child.type === 'undefined' || child.type == type);
		});
	}
		
	I.filterChildrenAllButName = function(name) {
		return I.children.filter(function(child) {
			return (child.name === 'undefined' || child.name != name);
		});
	}
		
	I.filterChildrenAllButType = function(type) {
		return I.children.filter(function(child) {
			return (child.type === 'undefined' || child.type != type);
		});
	}
		
	I.filterChildrenProperty = function(property) { // including undefineds
		return I.children.filter(function(child) {
			return (child.properties[property] === 'undefined' ||  child.properties[property] == property);
		});
	}
		
	I.filterActiveRenderables = function() {
		return I.renderables.filter(function(child) {
			return (child.active === 'undefined' || child.active != false);
		});
	}
		
	I.filterRenderablesAllButName = function(name) {
		return I.renderables.filter(function(child) {
			return (child.name === 'undefined' || child.name != name);
		});
	}
		
	I.filterRenderablesAllButType = function(type) {
		return I.renderables.filter(function(child) {
			return (child.type === 'undefined' || child.type != type);
		});
	}
		
	I.filterRenderablesByName = function(name) {
		return I.renderables.filter(function(child) {
			return (child.name === 'undefined' || child.name == name);
		});
	}
		
	I.filterRenderablesByType = function(type) {
		return I.renderables.filter(function(child) {
			return (child.type === 'undefined' || child.type == type);
		});
	}
		
	I.filterRenderablesByProperty = function(property) {
		if (typeof child.properties[property] !== 'undefined') {
			return I.children.filter(function(child) {
				return child.properties[property];
			});
		}
	}

	I.filterModelRenderablesByType = function(type) {
		return I.model.renderables.filter(function(child) {
			return (child.type === 'undefined' || child.type == type);
		});
	}
		
	I.filterModelByType = function(type) {
		return I.model.filter(function(child) {
			return (child.type === 'undefined' || child.type == type);
		});
	}
	
	I.generateChildren = function() {};
	I.updateSelfAfterChildren = function() {};
	I.updateSelfAfterEachChild = function() {};
	I.updateSelfBeforeEachChild = function() {};
	I.updateSelfBeforeChildren = function() {};
	I.renderSelfAfterChildren = function() {};
	I.renderSelfAfterEachChild = function() {};
	I.renderSelfBeforeEachChild = function() {};
	I.renderSelfBeforeChildren = function() {};
	I.handleCollisions = function() {};

	// While uddating each single child
	I.updateChild = function(child, children, properties) {
		children[child].update && children[child].update();
	}	

	// Launch the update loop of my children
	I.updateChildren = function() {
		for (child in I.children) {
			I.updateSelfBeforeEachChild();
			I.updateChild(child, I.children, I.properties);
			I.updateSelfAfterEachChild();
		}
	}

	I.removeDeactivatedChildren = function() {
		I.children = I.filterActiveChildren(I.children);
	}

	I.update = function() {
		I.updateSelfBeforeChildren();
		I.relocateAtParent();		
		I.updateChildren();
		I.updateSelfAfterChildren();
		I.handleCollisions();
		I.removeDeactivatedChildren();
		I.generateChildren();
	}

	I.renderCanvas = function(renderable) {
		if (I.drawCanvases) {
			if (typeof renderable.radius !== 'undefined' && renderable.radius != null) {
				CANVAS.beginPath();
				CANVAS.arc(
					renderable.offsetX + I.midpoint().x,
					renderable.offsetY + I.midpoint().y,
					renderable.radius,
					0, 2 * Math.PI
				);
				CANVAS.fillStyle = renderable.fillStyle;
				CANVAS.fill();
				CANVAS.closePath();
			}
		}
	}

	I.renderCanvases = function() {
		var canvases = 	I.filterRenderablesByType('canvas');	
		canvases.sort(function(a, b){
			return a.radius < b.radius
		})
		for (canvas in canvases) {
			I.renderCanvas(canvases[canvas]);
		}
	}

	I.renderChildren = function() {
		for (child in I.children) {
			I.renderSelfBeforeEachChild();
			I.children[child].render && I.children[child].render();
			I.renderSelfAfterEachChild();
		}
	}
	
	I.renderSprite = function(renderable) {
		if (typeof renderable.sprite !== 'undefined') {
			if (typeof renderable.sprite !== 'undefined' && renderable.sprite != null) {
				if (typeof renderable.sprite == 'string' || renderable.sprite instanceof String) {
					renderable.sprite = Sprite(renderable.sprite);
				}
				renderable.sprite.draw(
					CANVAS, 
					I.midpoint().x - renderable.sprite.width/2, 
					I.midpoint().y - renderable.sprite.height/2
				);
				//renderable.active = false;
			}
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

	I.render = function() {
		I.renderCanvases();	
		I.renderSelfBeforeChildren();
		I.renderChildren();	
		I.renderSelfAfterChildren();
		I.renderSelf();	
		I.renderSprites();	
	};

	I.run = function() {
		I.update(I.children);
		I.render(I.children);
	};

	I.sumProperties = function(a, b) {
		var parentA = a; // or else..
		var parentB = b; // or else..
		var properties = parentA.properties;
		for (key in parentB.properties) {
			if (typeof properties[key] == 'undefined' || properties[key] == null) {
				properties[key] = parentB.properties[key];
			} else {
				properties[key] = ((properties[key] + parentB.properties[key]) / 2)+current;
			}
		}
		return properties;
	};
	
	I.generateSerialNo = function(stringLength) {
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var stringLength = stringLength || 10;
		var randomString = '';

		for (var i = 0; i < stringLength; i++) {
			var letterOrNumber = Math.floor(Math.random() * 2);
			if (letterOrNumber == 0) {
				var newNum = Math.floor(Math.random() * 9);
				randomString += newNum;
			} else {
				var randomNum = Math.floor(Math.random() * chars.length);
				randomString += chars.substring(randomNum, randomNum + 1);
			}
		}
		
		return randomString;
	}

	I.getModel = function(model) {
		if (typeof model == 'undefined' || model == null) {
			return;
		}

		for (key in I.model.properties) {
			I.properties[key] =  I.model.properties[key];
		}
		
		I.children = I.model.children || I.children;
		I.renderables = I.model.renderables || I.renderables;
	}

	I.init = function() {}

	I._init = function() {
		I.serial = I.generateSerialNo();
		if (I.canvas == null && I.parent) {
			I.canvas = I.parent.canvas;
		}
		I.init();
		//console.log(I.name+' initialized');
	}

	I._init();

	return I;
}




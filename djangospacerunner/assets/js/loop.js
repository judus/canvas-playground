var CURRENT_FRAME = 1;
var enemies = [];
var playerBullets = [];
var drawedBullets = 0;

function Loop(I) {
	I = I || {}
	I.canvas = I.canvas || null;
	I.loopables = I.loopables || {};
	I.reset = I.reset || true;
	I.frameTime = I.frameTime || 30;

	I.beforeUpdate = function(target, loopables) {};
	I.afterUpdate = function(target, loopables) {};
	I.beforeRender = function(target, loopables) {};
	I.afterRender = function(target, loopables) {};

	I.clearCanvas = function() {
		I.canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		I.canvas.beginPath();
		I.canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		I.canvas.closePath();
	}

	I.update = function(loopables) {
		var loopables = loopables || I.loopables;
		for (loopable in loopables) {
			loopables[loopable].update();
		};

		// Replace this
		enemies.forEach(function(enemy) {
			enemy.update();
		});

		// Replace this
		enemies = enemies.filter(function(enemy) {
			return enemy.active;
		});

		// Replace this
		if (Math.random() < ENEMY_QTY) {
			enemies.push(Enemy());
		}

	}

	I.render = function(loopables) {
		var loopables = loopables || I.loopables;
		for (loopable in loopables) {
			loopables[loopable].render();
		};
		
		enemies.forEach(function(enemy) {
			enemy.render();
		});
	}

	I.getCurrentFrame = function() {
		return CURRENT_FRAME;
	}

	I.continueLoop = function() {
		CURRENT_FRAME++;
	}

	I.mainloop = function(callback) {
		if (callback) {
			for(updatable in updatables) {
				callback(I.loopables);
			}
		} else {
			if (I.reset) {
				I.clearCanvas(I.target, I.loopables)
			}
			I.beforeUpdate && I.beforeUpdate(I.target, I.loopables);
			I.update(I.loopables);
			I.afterUpdate && I.afterUpdate(I.target, I.loopables);
			I.render(I.loopables);
		}
		
		I.continueLoop();
	}

	I.run = function() {
		var raf = window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				null ;

		if ( raf !== null && USE_DEFAULT_RAF == false ) {

			var recursiveAnim = function() {
				I.mainloop();
				raf(recursiveAnim, I.canvas);
			};

			if ( $.browser.mozilla ) {
				window.addEventListener("MozBeforePaint", recursiveAnim, false);
				raf(recursiveAnim, I.canvas);
			} else {
				raf(recursiveAnim, I.canvas);
			}
		} else {
			setInterval(I.mainloop, I.frameTime);
		}
	}
	
	
	return I;
}












/*

player.explode = function() {
	this.active = false;
};
player.sprite = Sprite("ship.png");

//player.draw = function() {
 player.sprite.draw(canvas, this.x, this.y);
//}
//player.sprite = Sprite("ship.png");
//player.ship.draw() = Sprite("ship.png");

//player.draw = function() {
  //player.sprite.draw(canvas, this.x, this.y);
//};
*/



import Bullet from "./Bullet.js";
import Particle from "../../engine/entities/Particle.js";
import Vector2d from "../../engine/physics/Vector2d.js";

export class OldShip extends Particle {
	constructor(x = 0, y = 0, speed = 0, direction = 0, gravity = 0, mouseVec = null) {
		super(x, y, speed, direction, gravity);
		this.mouseVec = mouseVec || new Vector2d();
		this.bullets = [];
	}

	shoot() {
		let bullet = new Bullet(this.position.x, this.position.y, 10, this.getCanvasAngle() + Math.PI);
		this.bullets.push(bullet);
	}

	getCanvasAngle() {
		return Math.atan2(
			this.position.y - this.mouseVec.y,
			this.position.x - this.mouseVec.x
		);
	}

	draw(context, thrusting) {
		context.save();
		context.translate(this.position.x, this.position.y);
		let angle = this.getCanvasAngle();
		context.rotate(angle + Math.PI);

		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(-10, -7);
		context.lineTo(-10, 7);
		context.lineTo(10, 0);

		if(thrusting) {
			context.moveTo(-10, 0);
			context.lineTo(-18, 0);
		}

		context.stroke();
		context.closePath();
		context.restore();
	}

	isOutOfBounds(bullet, canvas) {
		if(bullet.position.x > canvas.width
			|| bullet.position.x < 0
			|| bullet.position.y > canvas.height
			|| bullet.position.x < 0
		) {
			return true;
		}

		return false;
	}

	drawBullets(canvas, context) {
		for(let i = 0; i < this.bullets.length; i++) {
			if(this.isOutOfBounds(this.bullets[i], canvas)) {
				this.bullets.splice(i, 1);
			}
		}

		this.bullets.forEach(bullet => {
			bullet.update();
			bullet.draw(context);
		});
	}


	update(canvas) {
		super.update();

		if(this.position.x > canvas.width) {
			this.position.setX(0);
		}

		if(this.position.x < 0) {
			this.position.setX(canvas.width);
		}

		if(this.position.y > canvas.height) {
			this.position.setY(0);
		}

		if(this.position.y < 0) {
			this.position.setY(canvas.height);
		}
	}
}

import Particle from "./Particle.js";
import Bullet from "./bullet.js";
import Vector2d from "./Vector2d.js";

export default class Ship extends Particle {
	constructor(mouseVec = null, x = 0, y = 0, speed = 0, direction = 0, gravity = 0, friction = 0.93) {
		super(x, y, speed, direction, gravity, friction);
		this.mouseVec = mouseVec || new Vector2d();
		this.bullets = [];
		this.cruising = false;
	}

	cruise(val = -1) {
		val > 0 ? this.cruising = true : this.cruising = false;
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

	draw(context) {
		context.save();
		context.translate(this.position.x, this.position.y);
		let angle = this.getCanvasAngle();
		context.rotate(angle + Math.PI);

		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(-10, -7);
		context.lineTo(-10, 7);
		context.lineTo(10, 0);

		if(this.cruising) {
			context.moveTo(-10, 0);
			context.lineTo(-15, 0);
		}

		context.stroke();
		context.closePath();
		context.restore();
	}

	isOutOfBounds(bullet, canvas) {
		if (bullet.position.x > canvas.width
			|| bullet.position.x < 0
			|| bullet.position.y > canvas.height
			|| bullet.position.x < 0
		) {
			return true;
		}

		return false;
	}

	drawBullets(canvas, context) {
		for (let i = 0; i < this.bullets.length; i++) {
			if (this.isOutOfBounds(this.bullets[i], canvas)) {
				this.bullets.splice(i, 1);
			}
		}

		this.bullets.forEach(bullet => {
			bullet.update();
			bullet.draw(context);
		});
	}

	rebound(boundaries) {
		if(this.position.x > boundaries.width) {
			this.position.setX(0);
		}

		if(this.position.x < 0) {
			this.position.setX(boundaries.width);
		}

		if(this.position.y > boundaries.height) {
			this.position.setY(0);
		}

		if(this.position.y < 0) {
			this.position.setY(boundaries.height);
		}
	}

	update(boundaries) {
		if( ! this.cruising) {
			this.velocity.multiplyBy(this.friction);
		}

		this.position.addTo(this.velocity);
		this.rebound(boundaries);
	}
}
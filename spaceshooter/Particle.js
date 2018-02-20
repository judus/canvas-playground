import Vector2d from "./Vector2d.js";

export default class Particle {
	constructor(x = 0, y = 0, speed = 0, direction = 0, gravity = 0, friction = 1) {
		this.position = new Vector2d(x, y);
		this.gravity = new Vector2d(0, gravity);
		this.velocity = new Vector2d();
		this.velocity.setLength(speed);
		this.velocity.setAngle(direction);
		this.friction = friction;
	}

	accelerate(vector) {
		this.velocity.addTo(vector);
	}

	update(deltaTime) {

		if (this.friction < 1) {
			this.velocity.multiplyBy(this.friction);
		}

		this.position.addTo(this.velocity);
	}

	toLog() {
		console.log({
			position: this.position.toLog(),
			velocity: this.velocity.toLog(),
			gravity: this.velocity.toLog(),
			drag: this.velocity.toLog(),
		});
	}
}
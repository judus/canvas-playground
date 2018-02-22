import Vector2d from "../physics/Vector2d.js";

export default class Particle {
	constructor(x = 0, y = 0, speed = 0, direction = 0, gravity = 0) {
		this.position = new Vector2d(x, y);
		this.gravity = new Vector2d(0, gravity);
		this.velocity = new Vector2d();
		this.velocity.setLength(speed);
		this.velocity.setAngle(direction);
		this.drag = 1;
	}

	accelerate(accelerationVector) {
		this.velocity.addTo(accelerationVector);
	}

	update(deltaTime) {
		this.velocity.multiplyBy(this.drag);
		this.position.addTo(this.velocity);
	}

	toLog() {
		console.log({
			position: this.position.toLog(),
			velocity: this.velocity.toLog(),
			gravity: this.gravity.toLog()
		});
	}
}
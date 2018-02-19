import Particle from "./Particle.js";

export default class Bullet extends Particle {
	constructor(x = 0, y = 0, speed = 0, direction = 0, gravity = 0, mouseVec = null) {
		super(x, y, speed, direction, gravity);
	}

	draw(context) {
		context.beginPath();
		context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2, false);
		context.fillStyle = '#000';
		context.fill();
		context.closePath();
	}
}

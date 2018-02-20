import Projectile from "../../engine/entities/Projectile.js";

export default class Bullet extends Projectile {
	constructor(x = 0, y = 0, size = 2, speed = 0, direction = 0, gravity = 0) {
		super(x, y, speed, direction, gravity);
		this.size = size;
	}

	draw(context) {
		context.beginPath();
		context.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, false);
		context.fillStyle = '#000';
		context.fill();
		context.closePath();
	}
}

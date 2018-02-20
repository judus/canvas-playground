import Traits from "./Traits.js";
import Vector2d from "../physics/Vector2d.js";
import Bullet from "../entities/Bullet.js";

export default class Shoot extends Traits {
	constructor(mouse) {
		super('shoot');
		this.shooting = 0;
		this.bullets = [];

	}

	shoot(entity) {
		let bullet = new Bullet(entity.position.x, entity.position.y, 10, entity.getCanvasAngle() + Math.PI);
		this.bullets.push(bullet);
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

	update(entity, deltaTime) {

		if (this.shooting) {
			this.shoot(entity);
		}

	}
}
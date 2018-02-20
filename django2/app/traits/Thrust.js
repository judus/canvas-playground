import Traits from "../../engine/entities/Traits.js";
import Vector2d from "../../engine/physics/Vector2d.js";

export default class Thrust extends Traits {
	constructor(mouse) {
		super('thrust');
		this.dx = 0;
		this.dy = 0;
		this.fast = false;
		this.acceleration = new Vector2d();
		this.factorX = 0.1;
		this.factorY = 0.1;
		this.boost = 0;

		this.stabilisator = 1;
		this.stabDecelFactor = 0.90;
		this.stabAccelFactor = 5.5;

	}

	stabilisators() {
		this.stabilisator *= -1;
	}


	accelerate(entity, accelerationVector) {
		entity.vel.addTo(accelerationVector);
	}

	update(entity, deltaTime) {

		this.acceleration.setX(this.dx * this.factorX);
		this.acceleration.setY(this.dy * this.factorY);

		if (this.stabilisator > 0) {
			this.acceleration.multiplyBy(this.stabAccelFactor);
			entity.vel.multiplyBy(this.stabDecelFactor);
		}

		entity.vel.addTo(this.acceleration);

		entity.pos.addTo(entity.vel);
		entity.globalPos = entity.pos;
	}
}
import Vector2d from "../physics/Vector2d.js";

export default class Entity {

	constructor(x = 0, y = 0, speed = 0, direction = 0, gravity = 0) {
		this.pos = new Vector2d(x, y);
		this.size = new Vector2d(0, 0);
		this.vel = new Vector2d();
		this.vel.setLength(speed);
		this.vel.setAngle(direction);
		this.grav = new Vector2d(0, gravity);
		this.mass = 1;
		this.drag = 1;

		this.traits = [];
	}

	addTrait(trait) {
		this.traits.push(trait);
		this[trait.NAME] = trait;
	}

	obstruct(side) {
		this.traits.forEach(trait => {
			trait.obstruct(this, side);
		});
	}

	update(deltaTime) {
		this.traits.forEach(trait => {
			trait.update(this, deltaTime);
		});
	}

	toLog() {
		console.log({
			position: this.pos.toLog(),
			velocity: this.vel.toLog(),
			gravity: this.grav.toLog()
		});
	}
}
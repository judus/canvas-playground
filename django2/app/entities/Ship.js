import Entity from "../../engine/entities/Entity.js";

export default class Ship extends Entity {
	constructor(x = 0, y = 0, speed = 0, direction = 0, gravity = 0) {
		super(x, y, speed, direction, gravity);
	}
}
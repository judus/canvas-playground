import Traits from "../../engine/entities/Traits.js";

export default class FaceMouse extends Traits {
	constructor(mouse) {
		super('faceMouse');
		this.mouse = mouse;
	}

	getCanvasAngleToMouse(entity) {
		let angle = Math.atan2(
			entity.globalPos.y - this.mouse.pos.y,
			entity.globalPos.x - this.mouse.pos.x
		);
		return angle;
	}

	update(entity, deltaTime) {


	}
}
import Trait from "./Traits.js";

export default class Log extends Trait {
	constructor() {
		super('log');
	}

	update(entity, deltaTime) {
		console.log(entity);
	};
}
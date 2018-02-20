export default class Trait {
	constructor(name) {
		this.NAME = name;
	}

	obstruct() {

	}

	update(entity) {
		console.warn('Unhandled update call in Trait');
	}
}
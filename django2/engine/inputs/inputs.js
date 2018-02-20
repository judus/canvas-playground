import Keyboard from "./Keyboard.js";

export function mapInputsTo(entity) {
	const input = new Keyboard();

	input.addMapping('Space', keyState => {
		if(keyState) {
			entity.shoot.start();
		} else {
			entity.shoot.cancel();
		}
	});

	input.addMapping('ShiftLeft', keyState => {
		keyState && entity.thrust.stabilisators();
	});

	input.addMapping('KeyD', keyState => {
		entity.thrust.dx = keyState ? 1 : 0;
	});

	input.addMapping('KeyA', keyState => {
		entity.thrust.dx = keyState ? -1 : 0;
	});

	input.addMapping('KeyW', keyState => {
		entity.thrust.dy = keyState ? -1 : 0;
	});

	input.addMapping('KeyS', keyState => {
		entity.thrust.dy = keyState ? 1 : 0;
	});

	return input;
}
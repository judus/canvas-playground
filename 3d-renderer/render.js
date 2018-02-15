import {drawMesh} from "./draw.js";

export function createRenderer(canvas, camera) {
	const context = canvas.getContext('2d');

	return function render(scene) {
		context.clearRect(0, 0, canvas.width, canvas.height);

		scene.forEach(mesh => {
			drawMesh(mesh, camera, context);
		});
	}
}

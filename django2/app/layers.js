import Screen from "../engine/Screen.js";

export function createEntityLayer(entities, width = 256, height = 256) {

	const buffer = new Screen(document.createElement('canvas'), width, height);

	return function drawEntityLayer(screen, camera) {
		entities.forEach(entity => {
			buffer.context.clearRect(0, 0, width, height);
			buffer.position = {
				x: screen.centerX - width / 2,
				y: screen.centerY - height / 2,
				width: width,
				height: height,
				left: screen.centerX - width / 2,
				right: screen.centerX + width / 2,
				top: screen.centerY - height / 2,
				bottom: screen.centerY + height / 2
			};
			entity.draw(buffer);

			screen.context.drawImage(
				buffer.canvas,
				screen.centerX - width / 2,
				screen.centerY - height / 2
			);
		});
	}

	/*
	entities.forEach(entity => {
		spriteBufferContext.clearRect(0, 0, width, height);

		entity.draw(spriteBufferContext);

		context.drawImage(
			spriteBuffer,
			entity.pos.x - camera.pos.x,
			entity.pos.y - camera.pos.y
		);
	});
	*/
}

export function createProjectileLayer(projectiles, width = 400, height = 400) {

}
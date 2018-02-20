export default class Compositor {
	constructor() {
		this.layers = [];
	}

	draw(screen, camera) {
		this.layers.forEach(layer => {
			layer(screen, camera);
		})
	}
}
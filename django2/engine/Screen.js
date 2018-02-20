export default class Screen {
	constructor(canvas, width = 400, height = 400) {
		this.canvas = canvas;
		this.canvas.width = width;
		this.canvas.height = height;

		this.context = this.canvas.getContext('2d');

		this.position = this.canvas.getBoundingClientRect();

		this.width = width;
		this.height = height;
		this.centerX = width / 2;
		this.centerY = height / 2;
	}

	clear() {
		this.context.clearRect(0, 0, this.width, this.height);
	}

	toLog() {
		console.log(this);
	}
}
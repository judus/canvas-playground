export class GameLoop
{
	constructor(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext('2d');
		this.isPaused = true;
	};

	run() {
		let lastTime;
		let accumulator = 0;
		const step = 1 / 120;

		const callback = (ms) => {
			if ( ! this.isPaused) {
				if(lastTime) {
					accumulator += (ms - lastTime) / 1000;
					console.log('ACC', accumulator);

					while(accumulator > step) {
						this.update(step);
						accumulator -= step;
					}

					this.draw();
				}

				lastTime = ms;
				requestAnimationFrame(callback);
			}
		};

		callback();
	};

	play() {
		this.isPaused = false;
		this.run();
	}

	pause() {
		this.isPaused = true;
	}

	update(dt) {
		console.log('Delta', dt);
	}

	draw() {

	}
}
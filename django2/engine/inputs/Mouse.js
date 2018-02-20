import Vector2d from "../physics/Vector2d.js";

export default class Mouse {
	constructor(screen, window) {
		this.screen = screen;
		this.pos = new Vector2d();
		this.log = false;
		this.listenTo(window)
	}

	getRelativePosition(event) {
		let rect = this.screen.position,
			scaleX = this.screen.width / rect.width,    // relationship bitmap vs. element for X
			scaleY = this.screen.height / rect.height;  // relationship bitmap vs. element for Y

		return {
			x: (event.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
			y: (event.clientY - rect.top) * scaleY     // been adjusted to be relative to element
		}
	}

	handleEvent(event) {
		let p = this.getRelativePosition(event);
		this.pos.set(p.x, p.y);

		if (this.log) {
			this.toConsole();
		}
	}

	listenTo(window) {
		['mousemove'].forEach(eventName => {
			window.addEventListener(eventName, event => {
				this.handleEvent(event);
			});
		});
	}

	toLog(bool) {
		this.log = bool;
	}

	toConsole() {
		console.log(this.pos);
	}
}
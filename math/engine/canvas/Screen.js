export default class Screen {
	constructor(canvas = null, width = 400, height = 400, parent = null, background = "#eee") {

		if(arguments.length === 0) {
			// create new canvas
			// set default width and height
			this.createCanvas(width, height);
		}

		if(arguments.length === 1) {
			// if first argument is object set canvas width and height
			if(typeof arguments[0] === "object") {
				this.canvas = canvas;
				this.size(width, height);
			}

			// if first argument is string
			//	- create new canvas and
			//  - set default width and height
			//	- attach to elementId string
			if(typeof arguments[0] === "string") {
				this.createCanvas(width, height, arguments[0]);
			}
		}

		if(arguments.length === 2) {
			// if first argument is object and second is string
			// - set canvas
			// - set default width and height
			// - attach canvas to elementId string
			if(typeof arguments[0] === "object"
				&& typeof arguments[1] === "string"
			) {
				this.canvas = canvas;
				this.size(width, height);
				this.parent(parent);
			}
		}

		if(arguments.length === 3) {
			// if first argument is object
			// - set canvas with width and height
			if(typeof arguments[0] === "object") {
				this.size(width, height);
			}

			// if first 2 arguments are integer and 3rd is string
			// - create canvas
			// - set width and height
			// - attach to elementId string
			if(typeof arguments[0] === "number"
				&& typeof arguments[1] === "number"
				&& typeof arguments[2] === "string"
			) {
				this.createCanvas(arguments[0], arguments[1], arguments[2]);
			}
		}

		if(arguments.length > 3) {
			// set canvas
			// set width and height
			// attach to elementId
			this.canvas = canvas;
			this.size(width, height);
			this.parent(parent);
		}

		this.context = this.canvas.getContext('2d');

		this.resize();

		this.pointer = null;
		this.parentElement = null;

		this.backgroundColor = background;
		this.background(background);
	}

	createCanvas(width = 400, height = 400, parent = null) {
		this.canvas = document.createElement('canvas');
		this.canvas.style.display = 'block';
		this.size(width, height);
		parent && this.parent(parent);
		return this;
	}

	size(width, height) {
		this.canvas.width = width;
		this.canvas.height = height;
		return this;
	}

	parent(string) {

		if (!string) {
			return this.parentElement;
		}

		let element = document.getElementById(string);

		if (element) {
			this.parentElement = element;
			this.parentElement.appendChild(this.canvas);
		} else {
			element = document.createElement('div');
			element.setAttribute("id", string ? string : '');
			this.parentElement = document.body;
			this.parentElement.appendChild(this.canvas);
		}

		return this.parentElement;
	}

	toCenter(x = true, y = true) {
		this.canvas.style.position = 'absolute';
		this.canvas.style.top = '50%';
		this.canvas.style.left = '50%';
		this.canvas.style.transform = 'translate(-50%, -50%)';
		this.position = this.canvas.getBoundingClientRect()
		return this;
	}

	clear() {
		this.context.clearRect(0, 0, this.width, this.height);
		return this;
	}

	background(color) {
		this.context.fillStyle = color;
		this.context.fillRect(0, 0, this.width, this.height);
		return this;
	}

	resize() {
		this.position = this.canvas.getBoundingClientRect();
		this.width = this.position.width;
		this.height = this.position.height;
		this.centerX = this.width / 2;
		this.centerY = this.height / 2;
		this.size(this.width, this.height);
		return this;
	}

	reset() {
		this.clear();
		this.background(this.backgroundColor);
		return this;
	}

	setPointer(pointer) {
		this.pointer = pointer;
		this.pointer.setScreen(this);
		return this;
	}

	toLog() {
		console.log(this);
		return this;
	}
}
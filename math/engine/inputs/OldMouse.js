import Vector2d from "../physics/Vector2d.js";

export default class Mouse {
	constructor(screen, translateFromCenter = false, invertY = false, invertDegrees = false) {
		this.screen = screen;
		this.translateFromCenter = translateFromCenter;
		this.invertY = invertY;
		this.invertDegrees = invertDegrees;
		this.pos = new Vector2d();
		this.posr = new Vector2d();
		this.posc = new Vector2d();
		this.scaleX = 100;
		this.scaleY = 100;
		this.stepX = 10;
		this.stepY = 10;
		this.info = false;
		this.infoElement = null;
		this.log = false;
		this.listenTo(window);
	}

	getPosition() {
		return {
			x: event.clientX,
			y: event.clientY
		};
	}

	getTranslatedPosition(event) {
		let rect = this.screen.position,
			scaleX = this.screen.width / rect.width,
			scaleY = this.screen.height / rect.height;

		let pos = {
			x: (event.clientX - rect.left) * scaleX,
			y: (event.clientY - rect.top) * scaleY
		};

		if(this.translateFromCenter) {
			pos = {
				x: pos.x - this.screen.width / 2,
				y: pos.y - this.screen.height / 2,
			}
		}

		if(this.invertY) {
			pos.y *= -1;
		}

		return pos;
	}

	getScaledPosition(event) {
		let rect = this.screen.position,
			scaleX = this.screen.width / rect.width,
			scaleY = this.screen.height / rect.height;

		let pos = {
			x: (event.clientX - rect.left) * scaleX,
			y: (event.clientY - rect.top) * scaleY
		};

		if(this.translateFromCenter) {
			pos = {
				x: pos.x - this.screen.width / 2,
				y: pos.y - this.screen.height / 2,
			}
		}

		if(this.invertY) {
			pos.y *= -1;
		}

		return pos;
	}

	getAngle(inDegrees = false, invertDegrees) {
		return inDegrees ? this.getDegrees(invertDegrees) : this.getRadians()
	}

	getRadians() {
		return this.pos.getAngle();
	}

	getDegrees(invert = null) {

		if (invert === null) {
			invert = this.invertDegrees;
		}

		return invert ? this.pos.getDegrees() * -1 : this.pos.getDegrees();
	}

	trackPosition() {
		let p = this.getTranslatedPosition(event);
		this.pos.set(p.x, p.y);

		p = this.getPosition();
		this.posr.set(p.x, p.y);
	}

	createInfoElement() {
		this.infoElement = document.createElement('div');
		this.infoElement.style.display = 'inline-block';
		this.infoElement.style.position = 'absolute';
		this.infoElement.style.left = this.pos.x;
		this.infoElement.style.top = this.pos.y;
		this.infoElement.style.backgroundColor = 'rgba(0,0,0,.8)';
		this.infoElement.style.padding = '10px';
		this.infoElement.style.color = '#fff';
		this.infoElement.style.fontSize = '12px';
		this.infoElement.style.borderRadius = '4px';
		this.infoElement.style.fontFamily = 'verdana, arial, courier, monospace';
		document.body.appendChild(this.infoElement);
	}

	displayInfo() {
		if (! this.infoElement) {
			this.createInfoElement();
		}

		this.infoElement.style.left = (this.posr.x + 12) + 'px';
		this.infoElement.style.top = (this.posr.y + 12) + 'px';
		this.infoElement.innerHTML =
			'<div>Position: ' + this.posr.x + ', ' + this.posr.y +'</div>' +
			'<div>Translated: ' + Math.round(this.pos.x) + ', ' + Math.round(this.pos.y) + '</div>' +
			'<div>Scaled: ' + Math.round(this.posc.x) + ', ' + Math.round(this.posc.y) + '</div>' +
			'<div>Radians: ' + this.getAngle() + '</div>' +
			'<div>Degrees: ' + this.getDegrees() + '</div>';
	}

	handleEvent(event) {
		this.trackPosition();

		if (this.info) {
			this.displayInfo();
		}

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

	label(info = true) {
		this.info = info;
		return this;
	}

	toLog(bool = true) {
		this.log = bool;
		return this;
	}

	toConsole() {
		console.log(this.pos, this.posr, this.getAngle(true));
	}
}
import Vector2d from "../physics/Vector2d.js";

export default class Mouse {
	constructor(invertDegrees = false) {
		this.position = new Vector2d();
		this.inversion = invertDegrees ? -1 : 1;
		this.showLabel = false;
		this.infoBox = null;
		this.log = false;
		this.listenTo(window);
		this.subscribers = [];
	}

	getAngle(inDegrees = false) {
		return inDegrees ? this.getDegrees() : this.getRadians()
	}

	getRadians() {
		return this.position.getAngle();
	}

	getDegrees() {
		return this.position.getDegrees() * this.inversion;
	}

	trackPosition() {
		this.position.set(event.clientX, event.clientY);
	}

	createInfoBox() {
		this.infoBox = document.createElement('div');
		this.infoBox.style.display = 'inline-block';
		this.infoBox.style.position = 'absolute';
		this.infoBox.style.left = this.position.x;
		this.infoBox.style.top = this.position.y;
		this.infoBox.style.backgroundColor = 'rgba(0,0,0,.5)';
		this.infoBox.style.padding = '10px';
		this.infoBox.style.color = '#fff';
		this.infoBox.style.fontSize = '12px';
		this.infoBox.style.borderRadius = '4px';
		this.infoBox.style.fontFamily = 'verdana, arial, courier, monospace';
		document.body.appendChild(this.infoBox);
	}

	displayInfo() {
		! this.infoBox && this.createInfoBox();

		this.infoBox.style.left = (this.position.x + 12) + 'px';
		this.infoBox.style.top = (this.position.y + 12) + 'px';
		this.infoBox.innerHTML =
			'<div>x: ' + this.position.x + ', y: ' + this.position.y +'</div>' +
			'<div>Radians: ' + this.getRadians() +'</div>' +
			'<div>Degrees: ' + this.getAngle(true) +'</div>';

		return this;
	}

	addSubscriber(callback) {
		this.subscribers.push(callback);
	}

	handleSubscriptions() {
		this.subscribers.forEach(callback => {
			callback(this);
		});
	}

	handleEvent(event) {
		this.trackPosition();
		this.handleSubscriptions();
		this.showLabel && this.displayInfo();
		this.log && this.toConsole();
	}

	listenTo(window) {
		['mousemove'].forEach(eventName => {
			window.addEventListener(eventName, event => {
				this.handleEvent(event);
			});
		});
	}

	label(show = true) {
		this.showLabel = show;
		return this;
	}

	toLog(bool = true) {
		this.log = bool;
		return this;
	}

	toConsole() {
		console.log(this.position, this.getAngle(true));
	}
}
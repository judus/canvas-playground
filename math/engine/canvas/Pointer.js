import Vector2d from "../physics/Vector2d.js";

export default class Pointer {

	get x() {
		return this.getTranslatedPosition().x;
	}

	get y() {
		return this.getTranslatedPosition().y;
	}

	get pos() {
		return this.getTranslatedPosition();
	}

	get canvas() {
		return this.getPosition();
	}

	get relative() {
		return this.getRelativePosition();
	}

	constructor(pointer, offsetX = 0, offsetY = 0, scaleX = null,  scaleY = null, mathematical = true) {
		this.pointer = pointer;
		this.screen = null;
		this.position = new Vector2d();
		this.canvasPosition = new Vector2d();
		this.offset = new Vector2d(offsetX, offsetY);
		this.scale = new Vector2d(1, 1);
		this.showLabel = false;
		this.appendTo = null;
		this.setInvert(mathematical);
		this.listenTo(window);
	}

	setInvert(bool) {
		this.invert = bool ? -1 : 1;
	}

	setScreen(screen) {
		this.screen = screen;
		return this;
	}

	setOffset(offsetX = 0, offsetY = 0) {
		this.offset.set(offsetX, offsetY);
		return this;
	}

	setScale(scaleX = null, scaleY = null) {
		scaleX = scaleX ? scaleX / this.screen.width * 2 : 1;
		scaleY = scaleY ? scaleY / this.screen.height * 2 : 1;
		this.scale.set(scaleX, scaleY);
		return this;
	}

	translate(x, y) {
		this.offset.set(x, y);
		return this;
	}

	translateFromCenter() {
		this.offset.set(this.screen.centerX, this.screen.centerY);
		return this;
	}

	getPosition() {
		return this.canvasPosition.set(
			this.pointer.position.x - this.screen.position.left,
			this.pointer.position.y - this.screen.position.top
		);
	}

	getRelativePosition() {
		return this.getPosition().subtractFrom(this.offset);
	}

	getTranslatedPosition() {
		return this.getRelativePosition().scaleBy(this.scale);
	}

	getAngle(inDegrees = false, invertDegrees) {
		return inDegrees ? this.getDegrees(this.invert > 0 ? false : true) : this.getRadians()
	}

	getRadians() {
		return this.pos.getAngle();
	}

	getDegrees(invert = null) {
		return invert ? this.pos.getDegrees() * -1 : this.pos.getDegrees();
	}

	getHypotenuse() {
		return this.pos.getLength();
	}

	createInfoBox() {
		this.infoBox = document.createElement('div');
		this.infoBox.setAttribute('id', 'graph-info');
		this.infoBox.style.display = 'inline-block';
		this.infoBox.style.backgroundColor = 'rgba(0,0,0,.7)';
		this.infoBox.style.padding = '10px';
		this.infoBox.style.color = '#fff';
		this.infoBox.style.fontSize = '12px';
		this.infoBox.style.borderRadius = '4px';
		this.infoBox.style.fontFamily = 'verdana, arial, courier, monospace';
		if (this.appendTo) {
			let element = document.getElementById(this.appendTo);
			element.appendChild(this.infoBox);
		} else {
			this.infoBox.style.position = 'absolute';
			this.infoBox.style.left = this.pointer.position.x;
			this.infoBox.style.top = this.pointer.position.y;
			document.body.appendChild(this.infoBox);
		}

	}

	displayInfo() {
		if(!this.infoBox) {
			this.createInfoBox();
		}

		let styleTop = this.pointer.showLabel ? 80 : 12;

		this.infoBox.style.left = (this.pointer.position.x + 12) + 'px';
		this.infoBox.style.top = (this.pointer.position.y + styleTop) + 'px';
		this.infoBox.innerHTML =
			'<div>ScaledXY: ' + this.x.toFixed(2) + ', ' + this.y.toFixed(2) * this.invert + '</div>' +
			'<div>RelativeXY: ' + this.relative.x + ', ' + this.relative.y + '</div>' +
			'<div>CanvasXY: ' + this.canvas.x + ', ' + this.canvas.y + '</div>' +
			'<div>InputXY: ' + this.pointer.position.x + ', ' + this.pointer.position.y + '</div>' +
			'<div>OffsetXY: ' + this.offset.x + ', ' + this.offset.y + '</div>' +
			'<div>Hypotenuse: ' + this.getHypotenuse() + '</div>' +
			'<div>Radians: ' + this.getAngle() + '</div>' +
			'<div>Degrees: ' + this.getDegrees(this.invert > 0 ? false : true) + '</div>';

		return this;
	}

	handleEvent() {
		this.showLabel && this.displayInfo();
	}

	listenTo(window) {
		['mousemove'].forEach(eventName => {
			window.addEventListener(eventName, event => {
				this.handleEvent(event);
			});
		});
	}

	label(show = true, appendTo = null) {

		if (appendTo) {
			this.appendTo = appendTo;
		}

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
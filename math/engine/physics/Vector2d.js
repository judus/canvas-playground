export default class Vector2d {
	constructor(x = 0, y = 0) {
		this.set(x, y);
	}

	set(x, y) {
		this.x = x;
		this.y = y;
		return this;
	}

	setX(x) {
		this.x = x;
		return this;
	}

	setY(y) {
		this.y = y;
		return this;
	}

	setAngle(angle) {
		let length = this.getLength();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
		return this;
	}

	getAngle() {
		return Math.atan2(this.y, this.x);
	}

	setLength(length) {
		let angle = this.getAngle();
		this.x = Math.cos(angle) * length;
		this.y = Math.sin(angle) * length;
	}

	getLength() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	getDegreesFromAcos() {
		let radians = Math.acos(this.x / this.getLength());
		return this.getDegreesFromRadians(radians);
	}

	getDegreesFromAtan() {
		let radians = Math.atan2(this.y, this.x);
		return this.getDegreesFromRadians(radians);
	}

	getDegreesFromRadians(r) {
		return r / (Math.PI * 2) * 360;
	}

	setDegrees(deg) {
		this.setAngle((deg / 360) * Math.PI * 2);
		return this;
	}

	getDegrees() {
		return this.getDegreesFromAtan();
	}

	add(v2) {
		return new Vector2d(this.x + v2.x, this.y + v2.y);
	}

	subtract(v2) {
		return new Vector2d(this.x - v2.x, this.y - v2.y);
	}

	multiply(val) {
		return new Vector2d(this.x * val, this.y * val);
	}

	divide(val) {
		return new Vector2d(this.x / val, this.y / val);
	}

	addTo(v2) {
		this.x += v2.x;
		this.y += v2.y;
		return this;
	}

	subtractFrom(v2) {
		this.x -= v2.x;
		this.y -= v2.y;
		return this;
	}

	multiplyBy(val) {
		this.x *= val;
		this.y *= val;
		return this;
	}

	divideBy(val) {
		this.x /= val;
		this.y /= val;
		return this;
	}

	scaleBy(vector) {
		this.x *= vector.x;
		this.y *= vector.y;
		return this;
	}

	toLog() {
		console.log({
			x: this.x,
			y : this.y,
			length: this.getLength(),
			radians: this.getAngle(),
			degrees: this.getDegrees()
		});
		return this;
	}
}
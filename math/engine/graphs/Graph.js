import Vector2d from "../physics/Vector2d.js";

export default class Graph {
	constructor(screen, scaleX = 100, scaleY = 100, stepX = 10, stepY = 10, mathematical = true) {
		this.screen = screen;
		this.scaleX = scaleX;
		this.scaleY = scaleY;
		this.stepX = stepX;
		this.stepY = stepY;
		this.offsetX = 0;
		this.offsetY = 0;
		this.setInvert(mathematical);

		this.screen.pointer.setScale(scaleX, scaleY);
	}

	setInvert(bool) {
		this.invert = bool ? -1 : 1;
	}

	translate(x, y) {
		this.offsetX = x;
		this.offsetY = y;
		this.screen.pointer.translate(x, y);
		return this;
	}

	translateFromCenter() {
		this.translate(this.screen.centerX, this.screen.centerY);
		return this;
	}

	drawRulers(indicators = false) {
		const ctx = this.screen.context;
		let px = this.offsetX, py = this.offsetY;
		let length = this.screen.width / 2;
		let stepLengthX = length / this.stepX;
		let stepLengthY = length / this.stepY;

		ctx.beginPath();
		ctx.moveTo(px, py);
		ctx.lineTo(px, py - this.screen.height);
		ctx.moveTo(px, py);
		ctx.lineTo(px, py + this.screen.height);
		ctx.moveTo(px, py);
		ctx.lineTo(px - this.screen.width, py);
		ctx.moveTo(px, py);
		ctx.lineTo(px + this.screen.width, py);

		ctx.moveTo(px, py - 6);
		ctx.lineTo(px, py + 6);

		for(let i = 1; i < this.stepX * 2; i++) {
			let nx = i * stepLengthX + px;
			ctx.moveTo(nx, py - 4);
			ctx.lineTo(nx, py + 4);
		}

		ctx.moveTo(px, py);
		for(let i = -1; i > this.stepX * 2 * -1; i--) {
			let nx = i * stepLengthX + px;
			ctx.moveTo(nx, py - 4);
			ctx.lineTo(nx, py + 4);
		}

		ctx.moveTo(px - 6, py);
		ctx.lineTo(px + 6, py);

		for(let i = 1; i < this.stepY * 2; i++) {
			let ny = i * stepLengthY + py;
			ctx.moveTo(px - 4, ny);
			ctx.lineTo(px + 4, ny);
		}

		ctx.moveTo(px, py);
		for(let i = -1; i > this.stepY * 2 * -1; i--) {
			let ny = i * stepLengthY + py;
			ctx.moveTo(px - 4, ny);
			ctx.lineTo(px + 4, ny);
		}

		ctx.strokeStyle = '#000';
		ctx.stroke();
		ctx.closePath();

		ctx.textAlign = "right";
		ctx.font = '12px Arial';
		ctx.fillStyle = "#000";

		let nx = px + this.stepX * stepLengthX;
		ctx.fillText(this.scaleX.toString(), nx - 2, py + 16);

		for(let i = 1; i < this.stepX; i++) {
			ctx.fillText((this.scaleX / this.stepX * i).toString(), px + stepLengthX * i - 2, py + 16);
		}

		for(let i = -1; i > this.stepY * 2 * -1; i--) {
			ctx.fillText((this.scaleY / this.stepY * i).toString(), py - 7, py + 10 + stepLengthY * i);
		}


		indicators && this.drawRulerIndicators();

		return this;
	}

	drawRulerIndicators() {
		const ctx = this.screen.context;
		this.indX = new Vector2d(this.screen.pointer.canvas.x, this.offsetX);
		this.indY = new Vector2d(this.offsetY, this.screen.pointer.canvas.y);

		ctx.beginPath();
		ctx.arc(this.indX.x, this.indX.y, 3, 0, Math.PI * 2);
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(this.indY.x, this.indY.y, 3, 0, Math.PI * 2);
		ctx.stroke();
		ctx.closePath();
	}

	drawUnitCircle() {
		const ctx = this.screen.context;
		let px = this.offsetX, py = this.offsetY;
		let length = this.screen.width / 2;
		let stepLengthX = length / this.stepX;
		let stepLengthY = length / this.stepY;

		ctx.beginPath();
		ctx.arc(px, py, this.screen.width / 2 - stepLengthX, 0, Math.PI * 2);

		this.np1 = new Vector2d();
		this.np2 = new Vector2d();
		this.np1.setLength(this.screen.width / 2 - stepLengthX - 4);
		this.np2.setLength(this.screen.width / 2 - stepLengthX + 4);

		for (let i = 0; i < 16; i++) {
			let deg = 360 / 16 * i;
			this.np1.setDegrees(deg);
			this.np2.setDegrees(deg);
			ctx.moveTo(px + this.np1.x, py + this.np1.y);
			ctx.lineTo(px + this.np2.x, py + this.np2.y);
		}

		ctx.stroke();
		ctx.closePath();
	}


	drawUnitCircleIndicators() {
		const ctx = this.screen.context;
		let length = this.screen.width / 2;
		let stepLengthX = length / this.stepX;

		this.indC = new Vector2d();
		this.indC.setLength(this.screen.width / 2 - stepLengthX);
		this.indC.setAngle(this.screen.pointer.relative.getAngle());

		ctx.beginPath();
		ctx.arc(this.indC.x + this.offsetX, this.indC.y + this.offsetX, 3, 0, Math.PI * 2);
		ctx.stroke();
		ctx.closePath();
	}

	drawTrigonometry() {
		const ctx = this.screen.context;

		this.indX;
		this.indY;
		this.indC;

		ctx.beginPath();
		ctx.moveTo(this.indX.x, this.offsetY);
		ctx.lineTo(this.indX.x, this.indY.y);
		ctx.setLineDash([5, 2]);
		ctx.stroke();
		ctx.setLineDash([0]);
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.indX.x, this.indY.y);
		ctx.setLineDash([1, 4]);
		ctx.lineTo(this.offsetX, this.indY.y);
		ctx.stroke();
		ctx.setLineDash([0]);
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.indX.x, this.indY.y);
		ctx.lineTo(this.offsetX, this.offsetY);
		ctx.stroke();
		ctx.closePath();
	}

	drawQuadraticCurve(x, a, b, c) {
		const ctx = this.screen.context;
		let px = this.offsetX, py = this.offsetY;

		function quad(x, a, b, c) {
			return a * (x ^ 2) + b * x + c;
		}

		ctx.moveTo(0, 0);

		ctx.beginPath();
		for (let i = (this.screen.width / 2) * -1; i < this.screen.width; i++) {

			ctx.lineTo(x + 1, quad(x + 1, 0 * 2000, 0 * 2000, 0 * 2000) + this.screen.width / 2 + 10);
		}

		ctx.stroke();
		ctx.closePath();
	}

	update() {
		this.drawRulers();
		this.drawRulerIndicators();
		this.drawUnitCircle();
		this.drawUnitCircleIndicators();
		this.drawTrigonometry();
	}
}
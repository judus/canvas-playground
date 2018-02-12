import { Color } from './Color.js';
import { Vector2d } from './Vector2d.js';

export class Shape {
	constructor() {
		this.color = new Color();
		this.position = new Vector2d()
		this.size = new Vector2d(10, 10);
	}

	draw(context) {
		context.fillStyle = this.color.toHex();

		context.fillRect(
			this.position.x, this.position.y,
			this.size.x, this.size.y
		);
	}
}
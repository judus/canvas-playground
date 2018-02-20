import Ship from "./entities/Ship.js";
import FaceMouse from "./traits/FaceMouse.js";
import Thrust from "./traits/Thrust.js";

export function createShip(mouse, x = 0, y = 0) {
	const ship = new Ship(128, 128);
	ship.addTrait(new FaceMouse(mouse));
	ship.addTrait(new Thrust());

	function isFunction(functionToCheck) {
		return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
	}

	ship.draw = function drawShip(buffer, thrusting) {

		ship.globalPos = {
			x: buffer.position.x + buffer.position.width / 2,
			y: buffer.position.y + buffer.position.height / 2,
		};

		const context = buffer.context;
		context.fillStyle = '#588bff';
		context.fillRect(0,0,256,256);

		context.save();
		context.translate(ship.pos.x, ship.pos.y);

		if(isFunction(ship.faceMouse.getCanvasAngleToMouse)) {
			let angle = ship.faceMouse.getCanvasAngleToMouse(ship);
			context.rotate(angle + Math.PI);
		}

		context.beginPath();
		context.moveTo(10, 0);
		context.lineTo(-10, -7);
		context.lineTo(-10, 7);
		context.lineTo(10, 0);

		if(thrusting) {
			context.moveTo(-10, 0);
			context.lineTo(-18, 0);
		}

		context.strokeStyle = '#000';
		context.stroke();
		context.closePath();
		context.restore();
	};

	return ship;
}
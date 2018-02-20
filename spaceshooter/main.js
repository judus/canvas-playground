import Timer from "./Timer.js";
import Vector2d from "./Vector2d.js";
import Ship from "./ship.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const timer = new Timer();

const width = canvas.width = canvas.clientWidth;
const height = canvas.height = canvas.clientHeight - 20;
const centerX = width * 0.5;
const centerY = height * 0.5;
const windowCenterX = window.innerWidth * 0.5;
const windowCenterY = (window.innerHeight - 20) * 0.5;
const pointer = new Vector2d();


function drawBackground(context) {
	context.fillStyle = '#FF9900';
	context.fillRect(0, 0, width, height);
}


function getMousePos(canvas, event) {
	// abs. size of element
	let rect = canvas.getBoundingClientRect(),
		// relation bitmap/element X
		scaleX = canvas.width / rect.width,
		// relation bitmap/element Y
		scaleY = canvas.height / rect.height;

	return {
		// scale mouse coordinates after they have
		// been adjusted to be relative to element
		x: (event.clientX - rect.left) * scaleX,
		y: (event.clientY - rect.top) * scaleY
	}
}

window.addEventListener("mousemove", function(event) {
	let mp = getMousePos(canvas, event);
	pointer.set(mp.x, mp.y);
});

window.addEventListener("keydown", function(event) {
	console.log(event.keyCode);
	switch(event.keyCode) {
		case 38: // up
		case 87: // w
			thrust.setY(-0.5);
			break;
		case 40: // down
		case 83: // s
			thrust.setY(0.5);
			break;
		case 37: // left
		case 65: // d
			thrust.setX(-0.5);
			break;
		case 39: // right
		case 68: // a
			thrust.setX(0.5);
			break;
		case 16: // shift
			thrusting = true;
			cruising *= -1;
			break;
		case 81: // q
			turningLeft = true;
			break;
		case 69: // e
			turningRight = true;
			break;
		case 32: // space
			shooting = true;
			break;
		default:
			break;
	}
});

window.addEventListener("keyup", function(event) {
	switch(event.keyCode) {
		case 38: // up
		case 87: // w
			thrust.setY(0);
			break;
		case 40: // down
		case 83: // s
			thrust.setY(0);
			break;
		case 37: // left
		case 65: // d
			thrust.setX(0);
			break;
		case 39: // right
		case 68: // a
			thrust.setX(0);
			break;
		case 16: // shift
			thrusting = false;
			break;
		case 81: // q
			turningLeft = false;
			break;
		case 69: // e
			turningRight = false;
			break;
		case 32: // space
			shooting = false;
			break;
		default:
			break;
	}
});

const ship = new Ship(pointer, centerX, centerY);
const thrust = new Vector2d(0, 0);
let turningLeft = false;
let turningRight = false;
let thrusting = false;
let cruising = -1;
let shooting = false;

timer.update = function(deltaTime) {
	drawBackground(context);
	ship.accelerate(thrust);
	ship.cruise(cruising);
	ship.update({width: width, height: height});
	ship.draw(context, thrusting, cruising);
	ship.drawBullets({width: width, height: height}, context);

	if (shooting) {
		ship.shoot();
	}
};

timer.start();


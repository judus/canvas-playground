import Timer from "./Timer.js";
import Vector2d from "./Vector2d.js";
import Particle from "./Particle.js";
import Ship from "./ship.js";
import Bullet from "./bullet.js";

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const timer = new Timer();

const width = canvas.width = canvas.clientWidth - 2;
const height = canvas.height = canvas.clientHeight - 20 - 4;
const canvasPos = canvas.getBoundingClientRect();


const cCenterX = canvasPos.x + canvas.width / 2;
const cCenterY = canvasPos.y + canvas.height / 2;
const mCenterX = window.innerWidth * 0.5;
const mCenterY = (window.innerHeight - 20) * 0.5;


//const width = canvas.width = 800;
//const height = canvas.height = 800;
const centerX = width * 0.5;
const centerY = height * 0.5;
let offset = height * 0.4;
let speed = 0.1;
let arrowX = width / 2;
let arrowY = height / 2;
let dx, dy = 0;


function drawBackground(context) {
	context.fillStyle = '#FF9900';
	context.fillRect(0, 0, width, height);
}

function drawBall(context) {
	let x = centerX + Math.sin(angle) * offset;
	let y = centerY + Math.sin(angle) * offset;

	drawBackground(context);

	context.beginPath();
	context.arc(x, y, 50, 0, Math.PI * 2, false);
	context.fillStyle = '#000';
	context.fill();

	angle += speed;
}

function drawArrow() {
	drawBackground(context);

	context.save();
	context.translate(arrowX, arrowY);
	context.rotate(angle);

	context.beginPath();
	context.moveTo(20, 0);
	context.lineTo(-20, 0);
	context.moveTo(20, 0);
	context.lineTo(10, -10);
	context.moveTo(20, 0);
	context.lineTo(10, 10);

	context.stroke();

	context.restore();
}

function drawLines(context) {
	context.beginPath();
	context.moveTo(0, centerY);
	context.lineTo(width, centerY);
	context.moveTo(centerX, 0);
	context.lineTo(centerX, height);
	context.stroke();
	context.closePath();

}

let position = new Vector2d(centerX, centerY);
let velocity = new Vector2d(0, 0);
velocity.setLength(3);
velocity.setDegrees(-270);
function drawMovingBall() {
	position.addTo(velocity);
	position.toLog();
	context.beginPath();
	context.arc(position.x, position.y, 10, 0, Math.PI * 2, false);
	context.fillStyle = '#000';
	context.fill();
	context.closePath();
}

function drawParticle(p, deltaTime) {
	p.update(deltaTime);
	context.beginPath();
	context.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false);
	context.fillStyle = '#000';
	context.fill();
	context.closePath();
}

const mouseRelVec = new Vector2d();

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect(), // abs. size of element
		scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for X
		scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for Y

	return {
		x: (evt.clientX - rect.left) * scaleX,   // scale mouse coordinates after they have
		y: (evt.clientY - rect.top) * scaleY     // been adjusted to be relative to element
	}
}

document.body.addEventListener("mousemove", function(event) {
	dx = event.clientX - mCenterX;
	dy = event.clientY - mCenterY;
	//mouseVec.set(event.clientX, event.clientY);

	let mp = getMousePos(canvas, event);
	mouseRelVec.set(mp.x, mp.y);
	//mouseRelVec.toLog();
});

/*
const particles = [];
const numParticles = 100;

for (let i = 0; i <= numParticles; i++) {
	let speed = Math.random() * 4 + 1;
	let direction = Math.random() * Math.PI * 2;
	particles.push(new Particle(centerX, centerY, speed, direction));
}

particles.forEach(particle => {
	particle.update(deltaTime);
	context.beginPath();
	context.arc(particle.position.x, particle.position.y, 3, 0, Math.PI * 2, false);
	context.fillStyle = '#000';
	context.fill();
	context.closePath();
});
*/

/*
	particle.accelerate(acc);
	particle.update(deltaTime);
	context.beginPath();
	context.arc(particle.position.x, particle.position.y, 3, 0, Math.PI * 2, false);
	context.fillStyle = '#000';
	context.fill();
	context.closePath();
 */

/*
const particle = new Particle(100, height, 3, -Math.PI / 2);
let acc = new Vector2d(0.1, 0.1);

const particles = [];
const numParticles = 500;

for(let i = 0; i <= numParticles; i++) {
	let speed = Math.random() * 3 + 3;
	let direction = Math.random() * Math.PI * 2;
	let gravity = 0.4;
	particles.push(new Particle(centerX, centerY / 3, speed, direction, gravity));
}

particles.forEach(particle => {
	particle.update(deltaTime);
	context.beginPath();
	context.arc(particle.position.x, particle.position.y, 3, 0, Math.PI * 2, false);
	context.fillStyle = '#000';
	context.fill();
	context.closePath();
});
*/

const ship = new Ship(centerX, centerY, 0, 0, 0, mouseRelVec);
ship.drag = 0.92;
const thrust = new Vector2d(0, 0);
let angle = 0;
let turningLeft = false;
let turningRight = false;
let thrusting = false;
let shooting = false;



document.body.addEventListener("keydown", function(event) {
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
			break;
		case 81: // q
			turningLeft =  true;
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
document.body.addEventListener("keyup", function(event) {
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
		case 16:
			thrusting = false;
			break;
		case 81:
			turningLeft = false;
			break;
		case 69:
			turningRight = false;
			break;
		case 32: // space
			shooting = false;
			break;
		default:
			break;
	}
});


timer.update = function(deltaTime) {
	drawBackground(context);
	drawLines(context);

	ship.accelerate(thrust);
	ship.update({width: width, height: height});
	ship.draw(context, thrusting, mouseRelVec);
	ship.drawBullets({width: width, height: height}, context);

	if (shooting) {
		ship.shoot();
	}



};



timer.start();


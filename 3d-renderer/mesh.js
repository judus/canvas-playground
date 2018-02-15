import {Vector} from "./maths.js";

function toPoint(values) {
	return {
		x: values[0],
		y: values[1],
		z: values[2],
	}
}

function toPolygon(shape) {
	return shape.map(toPoint);
}

export function toMesh(shape) {
	return new Mesh(shape.map(toPolygon));
}

function offset(point, position) {
	point.x += position.x;
	point.y += position.y;
	point.z += position.z;
}

function rotate(point, rotation) {
	const sin = new Vector(
		Math.sin(rotation.x),
		Math.sin(rotation.y),
		Math.sin(rotation.z));

	const cos = new Vector(
		Math.cos(rotation.x),
		Math.cos(rotation.y),
		Math.cos(rotation.z));

	let temp1, temp2;

	temp1 = cos.x * point.y + sin.x * point.z;
	temp2 = -sin.x * point.y + cos.x * point.z;
	point.y = temp1;
	point.z = temp2;

	temp1 = cos.y * point.x + sin.y * point.z;
	temp2 = -sin.y * point.x + cos.y * point.z;
	point.x = temp1;
	point.z = temp2;

	temp1 = cos.z * point.x + sin.z * point.y;
	temp2 = -sin.z * point.x + cos.z * point.y;
	point.x = temp1;
	point.y = temp2;
}

class Mesh {
	constructor(polygons) {
		this.color = '#FFF';
		this.polygons = polygons;
		this.position = new Vector(0, 0, 0);
		this.rotation = new Vector(0, 0, 0);
	}

	transform(point) {
		rotate(point, this.rotation);
		offset(point, this.position);
	}
}
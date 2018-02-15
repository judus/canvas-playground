function perspective(point, distance) {
	const fov = point.z + distance;
	point.x /= fov;
	point.y /= fov;
}

function zoom(point, factor) {
	const scale = Math.pow(factor, 2);
	point.x *= scale;
	point.y *= scale;
}

export class Camera {
	constructor(posZ = 100, zoom = 12) {
		this.pos = {z: posZ};
		this.zoom = zoom;
	}

	transform(point) {
		perspective(point, this.pos.z);
		zoom(point, this.zoom);
	}
}

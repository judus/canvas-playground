import {cube, pyramid} from './models.js';
import {Camera} from "./camera.js";
import {toMesh} from "./mesh.js";
import {createRenderer} from "./render.js";

const canvas = document.querySelector('canvas');
const camera = new Camera();
const render = createRenderer(canvas, camera);

const scene = [
	toMesh(cube),
	toMesh(pyramid),
];

function animate(time) {
	{
		const mesh = scene[0];
		mesh.color = '#FF0000';
		mesh.rotation.z += 0.01;
		mesh.rotation.y += 0.01;
		mesh.position.x = Math.sin(time / 300) * 80;
		mesh.position.y = Math.sin(time / 600) * 80;
		mesh.position.z = -400 + Math.sin(time / 600) * 80;
	}

	{
		const mesh = scene[1];
		mesh.color = '#FF9900';
		mesh.rotation.z += 0.01;
		mesh.rotation.y += 0.02;
		mesh.position.x = Math.sin(time / 600) * 80;
		mesh.position.y = Math.sin(time / 1000) * 80;
		mesh.position.z = -500 + Math.sin(time / 600) * 200;
	}

	render(scene);
	requestAnimationFrame(animate);
}

animate(0);
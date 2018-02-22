import Level from "./Level.js";
import {createEntityLayer} from "../app/layers.js";

export function loadLevel(name) {

	const level = new Level();

	const entityLayer = createEntityLayer(level.entities, 390, 390);
	level.comp.layers.push(entityLayer);

	return level;
}
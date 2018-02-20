import Level from "./Level.js";
import {createEntityLayer} from "../app/layers.js";

export function loadLevel(name) {

	const level = new Level();

	const entityLayer = createEntityLayer(level.entities);
	level.comp.layers.push(entityLayer);

	return level;
}
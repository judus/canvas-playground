import Screen from "./engine/Screen.js";
import Timer from "./engine/Timer.js";
import Mouse from "./engine/inputs/Mouse.js";
import {loadLevel} from "./engine/loaders.js";
import {createShip} from "./app/entities.js";
import {mapInputsTo} from "./app/inputs.js";

const screen = new Screen(document.getElementById('screen'));
const timer = new Timer();
const mouse = new Mouse(screen, window);
const ship = createShip(mouse);

const inputs = mapInputsTo(ship);
inputs.listenTo(window);


const level = loadLevel();

level.entities.add(ship);
console.log(level);

timer.update = function(deltaTime) {
	screen.clear();
	level.update(deltaTime);
	level.comp.draw(screen, null);
};

timer.start();


import Screen from "./engine/canvas/Screen.js";
import Mouse from "./engine/inputs/Mouse.js";
import HtDoc from "./engine/dom/HtDoc.js";
import Graph from "./engine/graphs/Graph.js";
import Pointer from "./engine/canvas/Pointer.js";
import Timer from "./engine/Timer.js";

new HtDoc('Math');
const timer = new Timer();
let screen = createScene();
let graph = createGraph(screen);

function createScene() {
	return new Screen(400, 400, 'screen')
		.setPointer(new Pointer(new Mouse()).label())
		.toCenter().resize();
}

function createGraph(screen) {
	const graph = new Graph(screen, 100, 100, 10, 10).translateFromCenter();

	graph.update = function() {
		graph.screen.reset();
		graph.drawRulers();
		graph.drawRulerIndicators();
		graph.drawUnitCircle();
		graph.drawUnitCircleIndicators();
		graph.drawTrigonometry();
	};

	window.addEventListener('resize', () => {
		graph.screen.resize();
		graph.translateFromCenter();
	});

	return graph;
}



timer.update = function(deltaTime) {
	graph.update();
};

timer.start();


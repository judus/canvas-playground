import Screen from "./engine/canvas/Screen.js";
import Mouse from "./engine/inputs/Mouse.js";
import HtDoc from "./engine/dom/HtDoc.js";
import Graph from "./engine/graphs/Graph.js";
import Pointer from "./engine/canvas/Pointer.js";
import Timer from "./engine/Timer.js";
import Input from "./engine/dom/forms/Input.js";
import Textarea from "./engine/dom/forms/Textarea.js";
import Element from "./engine/dom/Element.js";
import Slider from "./engine/dom/forms/Slider.js";

const $$ = new HtDoc('Math');




const timer = new Timer();
let screen = createScene();
let graph = createGraph(screen);


function createScene() {
	const pointer = new Pointer(new Mouse(true)).label(true, 'pointer');
	const screen = new Screen(600, 600, 'screen').setPointer(pointer).resize();
	screen.parent('canvas');
	return screen;
}

function createGraph(screen) {
	const graph = new Graph(screen, 10, 10, 10, 10).translateFromCenter();

	graph.update = function() {
		graph.screen.resize();
		graph.screen.reset();
		graph.drawRulers();
		graph.drawRulerIndicators();

		if (graph.scaleX == graph.scaleY) {
			graph.drawUnitCircle();
			graph.drawUnitCircleIndicators();
			graph.drawTrigonometry();
		}
		graph.drawQuadraticCurve(parseInt(sliderA.val()) / 10, parseInt(sliderB.val()), parseInt(sliderC.val()));

		graph.getQuadInfo();


	};

	window.addEventListener('resize', () => {
		graph.screen.resize();
		graph.translateFromCenter();
	});

	return graph;
}

const sliderX = new Slider('_sliderX', '1', '10', 1, '10', 'sliderX');
const sliderY = new Slider('_sliderY', '1', '10', 1, '10', 'sliderY');

const sliderPX = new Slider('_sliderPX', '1', '10', 1, '1', 'sliderPX');
const sliderPY = new Slider('_sliderPY', '1', '10', 1, '1', 'sliderPY');

const sliderStepX = new Slider('_sliderStepX', '1', '100', 1, '10', 'sliderStepX');
const sliderStepY = new Slider('_sliderStepY', '1', '100', 1, '10', 'sliderStepY');

const sliderA = new Slider('_sliderA', '-10', '10', 1, '10', 'sliderA');
const sliderB = new Slider('_sliderB', '-10', '10', 1, '-4', 'sliderB');
const sliderC = new Slider('_sliderC', '-10', '10', 1, '-5', 'sliderC');

const sliderPA = new Slider('_sliderPA', '1', '10', 1, '0', 'sliderPA');
const sliderPB = new Slider('_sliderPB', '1', '10', 1, '0', 'sliderPB');
const sliderPC = new Slider('_sliderPC', '1', '10', 1, '0', 'sliderPC');

sliderX.onChange((slider, event) => {
	console.log('SX', slider.val());
	$$.findId('sliderXValue').setContent(slider.val());
	graph.setScaleX(slider.val());
	graph.update();
});

sliderY.onChange((slider, event) => {
	console.log('SY', slider.val());
	$$.findId('sliderYValue').setContent(slider.val());
	graph.setScaleY(slider.val());
	graph.update();
});

sliderPX.onChange((slider, event) => {
	sliderX.setMax(Math.pow(10, slider.val()));
	$$.findId('sliderPXValue').setContent(slider.val());
});

sliderPY.onChange((slider, event) => {
	sliderY.setMax(Math.pow(10, slider.val()));
	$$.findId('sliderPYValue').setContent(slider.val());
});

sliderStepX.onChange((slider, event) => {
	graph.setStepX(slider.val());
	$$.findId('sliderStepXValue').setContent(slider.val());
});

sliderStepY.onChange((slider, event) => {
	graph.setStepY(slider.val());
	$$.findId('sliderStepYValue').setContent(slider.val());
});

sliderA.onChange((slider, event) => {
	console.log('SA', slider.val() / 10);
	$$.findId('sliderAValue').setContent(slider.val() / 10);
	graph.update();
});

sliderB.onChange((slider, event) => {
	console.log('SB', slider.val());
	$$.findId('sliderBValue').setContent(slider.val());
	graph.update();
});

sliderC.onChange((slider, event) => {
	console.log('SC', slider.val());
	$$.findId('sliderCValue').setContent(slider.val());
	graph.update();
});

sliderPA.onChange((slider, event) => {
	sliderA.setMin(Math.pow(10, slider.val()) * -1);
	sliderA.setMax(Math.pow(10, slider.val()));

	let val = "n/a";
	if (slider.val() - 1 !== 0) {
		val = slider.val();
	}
	$$.findId('sliderPAValue').setContent(val);
});

sliderPB.onChange((slider, event) => {
	sliderB.setMin(Math.pow(10, slider.val()) * -1);
	sliderB.setMax(Math.pow(10, slider.val()));
	let val = "n/a";
	if(slider.val() - 1 !== 0) {
		val = slider.val();
	}
	$$.findId('sliderPBValue').setContent(val);});

sliderPC.onChange((slider, event) => {
	sliderC.setMin(Math.pow(10, slider.val()) * -1);
	sliderC.setMax(Math.pow(10, slider.val()));
	let val = "n/a";
	if(slider.val() - 1 !== 0) {
		val = slider.val();
	}
	$$.findId('sliderPCValue').setContent(val);
});




timer.update = function(deltaTime) {
	graph.update();
};

timer.start();


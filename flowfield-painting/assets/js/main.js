var canvas;

var xinc = 0.01;
var yinc = 0.01;
var zinc = 0.00005;
var particleQty = 2000;
var particleSpeed = 8;
var fieldMagnitude = 0.8;

var settings = {};

var sliderXinc;
var sliderYinc;
var sliderZinc;
var sliderParticleQty;
var sliderParticleSpeed;
var sliderFieldMagnitude;
var sliderGridScale;
var sliderFollow;

var btnSaveCanvas;
var btnNoLoop;
var btnLoop;
var btnClear;

// Canvas

var cols, rows;
var gridScale = 20;
var scl = 20;

var canvasHeight;
var canvasWidth;

var zoff = 0;

var fr;

var particles = [];
var flowfield = [];



function setup() {
	pixelDensity(1);
	colorMode(HSB, 255);

	var gridX = floor($(window).width() / gridScale);
	var gridY = floor($(window).height() / gridScale);

	canvasWidth = floor(gridX * gridScale);
	canvasHeight = floor(gridY * gridScale);

	canvas = createCanvas(canvasWidth, canvasHeight);
	background(0);

	createSliders();
	createButtons();
	updateSliderValues();

	cols = floor(width / scl);
	rows = floor(height / scl);

	flowfield = new Array(cols * rows);

	loadParticles();
}

function loadParticles() {
	particles = [];
	for(var i = 0; i < sliderParticleQty.value(); i++) {
		particles[i] = new Particle(particleSpeed);
	}
}

function drawParticles() {
	for(var i = 0; i < particles.length; i++) {
		particles[i].maxSpeed = sliderParticleSpeed.value() / 10;
		particles[i].follow(flowfield);
		particles[i].update();
		particles[i].edges();
		particles[i].show();
	}
}

function drawFlowfield(x, y, v) {
	stroke(0, 100);
	push();
	translate(x * scl, y * scl);
	rotate(v.heading());
	line(0, 0, scl, 0);
	pop();
}

function createSliders() {
	sliderXinc = createSlider(1, 1000000, 10000);
	sliderXinc.style('width', '100%');

	sliderYinc = createSlider(1, 1000000, 10000);
	sliderYinc.style('width', '100%');

	sliderZinc = createSlider(1000, 100000000, 50);
	sliderZinc.style('width', '100%');

	sliderParticleQty = createSlider(1, 100000, 2000, 50);
	sliderParticleQty.style('width', '100%');

	sliderParticleSpeed = createSlider(1, 1000, 80, 1);
	sliderParticleSpeed.style('width', '100%');

	sliderFieldMagnitude = createSlider(1, 2000000, 80000);
	sliderFieldMagnitude.style('width', '100%');

	sliderGridScale = createSlider(1, canvasWidth, 20, 20);
	sliderGridScale.style('width', '100%');

	sliderXinc.parent('sliderXinc');
	sliderYinc.parent('sliderYinc');
	sliderZinc.parent('sliderZinc');
	sliderParticleQty.parent('sliderParticleQty');
	sliderParticleSpeed.parent('sliderParticleSpeed');
	sliderFieldMagnitude.parent('sliderFieldMagnitude');
	sliderGridScale.parent('sliderGridScale');

	sliderXinc.changed(sliderChangedEvent);
	sliderYinc.changed(sliderChangedEvent);
	sliderZinc.changed(sliderChangedEvent);
	sliderParticleQty.changed(sliderChangedEvent);
	sliderParticleSpeed.changed(sliderChangedEvent);
	sliderFieldMagnitude.changed(sliderChangedEvent);
	sliderGridScale.changed(sliderChangedEvent);
}


function onSaveCanvasPressed() {
	var filename = Math.floor(Date.now() / 1000);
	saveCanvas('canvas-'+filename, 'jpg');
}

function createButtons(canvas) {
	btnSaveCanvas = createButton('Save canvas');
	btnSaveCanvas.parent('btn-save-canvas');
	btnSaveCanvas.mousePressed(onSaveCanvasPressed);
	btnNoLoop = createButton('Stop');
	btnNoLoop.parent('btn-no-loop');
	btnNoLoop.mousePressed(onNoLoopPressed);
	btnLoop = createButton('Run');
	btnLoop.parent('btn-loop');
	btnLoop.mousePressed(onLoopPressed);
	btnLoop = createButton('Clear');
	btnLoop.parent('btn-clear');
	btnLoop.mousePressed(onClearPressed);
}

function onNoLoopPressed() {
	noLoop();
}

function onLoopPressed() {
	loop();
}

function onClearPressed() {
	background(0);
	loadParticles();
}

function sliderChangedEvent() {
	updateSliderValues();
}

function displayFramerate() {
	var framerate = floor(frameRate());
	(function($) {
		$('#framerate').html(framerate);
	})(jQuery);
}

function clearAction() {
	var clear = false;
	(function($) {

	})(jQuery);
}

function draw() {
	//background(255);
	xinc = sliderXinc.value() / 1000000;
	yinc = sliderYinc.value() / 1000000;
	zinc = sliderZinc.value() / 1000000000;
	fieldMagnitude = sliderFieldMagnitude.value() / 100000;


	var yoff = 0;
	for(var y = 0; y < rows; y++) {
		var xoff = 0;
		for(var x = 0; x < cols; x++) {
			var index = x + y * cols;
			var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
			var v = p5.Vector.fromAngle(angle);
			v.setMag(fieldMagnitude);
			flowfield[index] = v;
			xoff += xinc;
			//drawFlowfield(x,  y,  v);
		}
		yoff += yinc;
		zoff += zinc;
	}

	drawParticles();
	clearAction();
	displayFramerate()

}

function updateSliderValues() {
	(function($) {
		var	xinc = sliderXinc.value() / 1000000;
		var	yinc = sliderYinc.value() / 1000000;
		var	zinc = sliderZinc.value() / 1000000000;
		var	particleQty = sliderParticleQty.value();
		var	particleSpeed = sliderParticleSpeed.value() / 10;
		var	fieldMagnitude = sliderFieldMagnitude.value() / 100000;
		var	gridScale = sliderGridScale.value();

		$('#sliderXincValue').html(xinc);
		$('#sliderYincValue').html(yinc);
		$('#sliderZincValue').html(zinc);
		$('#sliderParticleQtyValue').html(particleQty);
		$('#sliderParticleSpeedValue').html(particleSpeed);
		$('#sliderFieldMagnitudeValue').html(fieldMagnitude);
		$('#sliderGridScaleValue').html(gridScale);

		console.log('xinc: ' + xinc);
		console.log('yinc: ' + yinc);
		console.log('zinc: ' + zinc);
		console.log('particleQty: ' + particleQty);
		console.log('particleSpeed: ' + particleSpeed);
		console.log('fieldMagnitude: ' + fieldMagnitude);
		console.log('gridScale: ' + gridScale);
	})(jQuery);
}
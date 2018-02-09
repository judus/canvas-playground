var CANVAS_WIDTH = $(window).width()-(2*$('.game-panel-wrapper').outerWidth())-8;
var CANVAS_HEIGHT = $(window).height()-30-8;
var CANVAS_WIDTH = $(window).width();
var CANVAS_HEIGHT = $(window).height();
var CANVAS_DEPTH = 0;

var ONE_FRAME_TIME = 30;
var USE_DEFAULT_RAF = true;
var INPUT_DELAY = 1*6;

var ENEMY_QTY = 0.025;
var ENEMY_QTY = 0.01;
var KEYS = ['a','d','w','s','space','y','x','c','v'];
var ALT_KEYS = ['j','l','i','k','space','y','x','c','v'];
var FASTMOVEMENTFACTOR = 3;
var DRAWCANVASES = false;

var CANVAS = null;

if (MODE3D == false) {
	var ASSETS_DIR = 'assets/';

	var $canvasElement = $('<canvas id="map-canvas" width="'+CANVAS_WIDTH+'" height="'+CANVAS_HEIGHT+'"></canvas>');
		$canvasElement.prependTo('#canvas-wrapper');

	CANVAS = $canvasElement.get(0).getContext("2d");

	$('body').backstretch(ASSETS_DIR +'img/backgrounds/Galaxy-Hd-Computer-Background.jpg');
}

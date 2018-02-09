var canvas;

var canvasWidth = $(window).width();
var canvasHeight = $(window).height();

var axiom = "F";
var sentence = axiom;
var angle;
var len = 220;

var rules = [];
rules[0] = {
	a: "F",
	b: "FF+[+F-F]-[-F+F]",
};


function generate() {
	var nextSentence = "";
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;
		for (var j = 0; j < rules.length; j++) {
			if(current == rules[j].a) {
				found = true;
				nextSentence += rules[j].b
				break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	turtle();
}

function turtle() {
	background(20);
	resetMatrix();
	len *= 0.60;
	translate(width/2, height);
	stroke(255, 20);

	for(var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		if (current == "F") {
			line(0,0,0, -len);
			translate(0, -len);
		} else if (current == "+") {
			rotate(radians(random(20, 35)));
		} else if (current == "-") {
			rotate(-radians(random(20, 35)));
		} else if (current == "[") {
			push();
		} else if (current == "]") {
			pop();
		}
	}

}

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	angle = radians(random(15,45));
	background(51);

	turtle();

	var button = createButton("next step");
	button.mousePressed(generate);


}


function draw() {

}
/* DjangoSpacerunner - Adventure Space Shooter */


// The bullets collections
var BULLETS = new Bullets();

// The main player, controller by the user
var PLAYER1 = new Player({
	name: 'Django Spacerunner 1',
	canvas: CANVAS,
	properties: {
		x: randomRange(1, CANVAS_WIDTH),
		y: CANVAS_HEIGHT-150,
	}
});

// The players collection
var PLAYERS = new Players({
	name: 'Players',
	canvas: CANVAS,
	children: [
		new PlayerController({
			canvas: CANVAS,
			children: [
				PLAYER1
			]
		})
	]
});

// Helper Function for instanciating ships
function newShip(name, x, y) {
	var properties = {
			x: x || randomRange(0, CANVAS_WIDTH-200),
			y: y || randomRange(0, CANVAS_HEIGHT-200),
	}

	var shipController = new ShipController({
		canvas: CANVAS,
		properties: properties,
	});
	
	var ship = new Ship({
		canvas: CANVAS,
		model: new ShipModel({
			canvas: CANVAS,
			name: name,
			parent: shipController,
			properties: properties,
		})
	});
	shipController.children.push(ship);
	return shipController;
}

// List the available player ships and give them controllers
var shipList = new ShipModel().list('gunship');

// Controllable ships
var shipControllers = [];

for (ship in shipList) {
	if (shipList[ship].name == 'Gunship Fighter 3'
		|| shipList[ship].name == 'Gunship Fighter 2'
		|| shipList[ship].name == 'Gunship Heavy Fighter 1'
	) {
		shipControllers.push(newShip(shipList[ship].name));
	}
}

setParent({parent: null, children:shipControllers});

// The Ships collection
var SHIPS = new Ships({
	name: 'Ships',
	canvas: CANVAS,
	children: shipControllers,
});

// Render the ships already, start image load
SHIPS.render();

// The enemies collection
var ENEMIES = new Enemies({
	name: 'ENEMIES',
	canvas: CANVAS,
	properties: {
		qty: ENEMY_QTY
	}
});

// The main game object that holds everything (or root node)
var GAME = new Game({
	name: 'GAME (Django Spacerunner 1.0)',
	canvas: CANVAS,
	children: [
		PLAYERS,
		BULLETS,
		SHIPS,
		ENEMIES,
		//followers: new FollowerSpaw(),
		//statists: {}
	],
});

// Launch the game loop
AnimationFrame(Singularity({
	canvas: CANVAS,
	children: [GAME],
})).animate();


// Click object watcher
clickWatch = function(array, e) {
    var clickedX = e.pageX - 20;
    var clickedY = e.pageY - 20;
      
    for (var i = 0; i < array.children.length; i++) {
    	var target = array.children[i];   

    	if (target.getWidth) {
	    	var width = target.getWidth();
 	    	var height = target.getHeight();
    	} else {
    		var width = target.width;
 	    	var height = target.height;
    	}
    		
    	var targetLeft = target.children[0].properties.x;
    	var targetRight = targetLeft + width;
    	var targetTop = target.children[0].properties.y;
    	var targetBottom = targetTop + height;
     	
        if (
		    clickedX > targetLeft 
		    && clickedX < targetRight

		    && clickedY > targetTop 
		    && clickedY < targetBottom
        ) {
        	return target;
		}
    }
    
    return null;

}

// Catch all clicks on CANVAS (jquery canvas element)
$canvasElement.click(function(e) {
	targetEnemy = clickWatch(ENEMIES, e);
 	if (targetEnemy != null) {
	 	canvasClickAction(targetEnemy);
 	}

	targetShip = clickWatch(SHIPS, e);
 	if (targetShip != null) {
	 	canvasClickAction(targetShip);
 	}

	targetPlayer = clickWatch(PLAYERS, e);
 	if (targetPlayer != null) {
	 	canvasClickAction(targetPlayer);
 	}
});

// User Interface, work in progress
var modal = $(".modal");
$('.draggable').draggable();

// A game object has been clicked, devide what to do...
// For now it show a info box
var canvasClickAction = function(target) {
	var target = target.children[0];
	modal.find('h4').text(target.name);
	var ul = $('<ul>');
	for (property in target.properties) {
		var li = $('<li>'+property+': '+target.properties[property]+'</li>');
		li.appendTo(ul);		
	}
	ul.appendTo(modal.find('.modal-body').html(''));
	modal.modal('show');
}

// Work in progress
function startMission() {
	alert('Zoom to location, spawn enemies & collectables, easybreazy...');
}

// Work in progress
function viewBriefing() {
	alert('Show mission details');
}

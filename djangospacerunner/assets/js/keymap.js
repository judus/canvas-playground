function BindKeyMap(I) {
	I = I || {};
	I.player = I.player || null;
	I.controls = I.controls || null;
	I.lastInput = I.lastInput || null;
	I.keys = I.keys || ['a','d','w','s','q','e','f','r','c','space','alt', 'tab', 'y','x','c','v'];

	I.bindKeys = function(controls, player) {

		if (_keydown.left || _keydown[I.keys[0]]) {
			controls.moveLeft(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown.right || _keydown[I.keys[1]]) {
			controls.moveRight(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown.up || _keydown[I.keys[2]]) {
			controls.moveUp(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown.down || _keydown[I.keys[3]]) {
			controls.moveDown(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[4]]) {
			//console.log('fireAbility: '+I.keys[4]);
			controls.fireAbility(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[5]]) {
			//console.log('fireAbility: '+I.keys[5]);
			controls.fireAbility(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[6]]) {
			//console.log('interact: '+I.keys[6]);
			controls.interact(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[7]]) {
			//console.log('interact: '+I.keys[7]);
			controls.interact(_keydown.shift, _keydown.ctrl, _keydown);
		}
		if (_keydown[I.keys[8]]) {
			//console.log('comlink: '+I.keys[8]);
			controls.comlink(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[9]]) {
			//console.log('shoot: '+I.keys[9]);
			controls.shoot(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[10]]) {
			//console.log('shootAlt: '+I.keys[10]);
			controls.shootAlt(_keydown.shift, _keydown.ctrl, _keydown);
		}

		if (_keydown[I.keys[11]]) {
			//console.log('shootAlt: '+I.keys[11]);
			controls.shootAlt(_keydown.shift, _keydown.ctrl, _keydown);
		}


		if ( (CURRENT_FRAME - I.lastInput) >  2 ){
			if (_keydown[1]) {
				//console.log('toggleSwitch: 1');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(1,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[2]) {
				//console.log('toggleSwitch: 2');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(2,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[3]) {
				//console.log('toggleSwitch: 3');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(3,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[4]) {
				//console.log('toggleSwitch: 4');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(4,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[5]) {
				//console.log('toggleSwitch: 5');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(5,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[6]) {
				//console.log('toggleSwitch: 6');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(6,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[7]) {
				//console.log('toggleSwitch: 7');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(7,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[8]) {
				//console.log('toggleSwitch: 8');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(8,_keydown.shift, _keydown.ctrl);
			}

			if (_keydown[9]) {
				//console.log('toggleSwitch: 9');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(9);
			}

			if (_keydown[0]) {
				//console.log('toggleSwitch: 10');
				I.lastInput = CURRENT_FRAME;
				controls.toggleSwitch(10);
			}

			I.lastInput = CURRENT_FRAME;
		}
	}
	I.bindKeys(I.controls, I.player);
	return I;
}

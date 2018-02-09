/* DjangoSpacerunner - Animation Frame */

function AnimationFrame(I) {
	I = I || {};
	
	I.mainloop = function() {
		I.run();
		CURRENT_FRAME++;
	}
	
	I.frameTime = ONE_FRAME_TIME;
	
	I.animate = function() {
		var raf = window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame    ||
				window.oRequestAnimationFrame      ||
				window.msRequestAnimationFrame     ||
				null ;

		if ( raf !== null && USE_DEFAULT_RAF == false ) {

			var recursiveAnim = function() {
				I.mainloop();
				raf(recursiveAnim);
			};

			if ( $.browser.mozilla ) {
				window.addEventListener("MozBeforePaint", recursiveAnim, false);
				raf(recursiveAnim);
			} else {
				raf(recursiveAnim);
			}
			
		} else {
			setInterval(I.mainloop, I.frameTime);
		}
	}
	
	return I;
}


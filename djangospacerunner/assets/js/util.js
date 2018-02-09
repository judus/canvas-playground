function randomRange(min, max) {
	return ~~(Math.random() * (max - min + 1)) + min
}

function radiusSorter(a,b)
{
   return ((a.radius) < (b.radius)) ? 1 : -1;
}

var setParent = function(root){
	if (typeof root.children !== 'undefined' && root.children.length > 0) {
		for (child in root.children) {
			root.children[child].parent = root;
			root.children[child].canvas = root.canvas;
			if (root.children[child].properties) {
				//root.children[child].properties.x = root.children[child].properties.x + root.properties.x;
				//root.children[child].properties.y = root.children[child].properties.y + root.properties.y;
			}
			setParent(root.children[child]);
		}
	}
}

var orderKeys = function(o, f) {
  var os=[], ks=[], i;
  for (i in o) {
    os.push([i, o[i]]);
  }
  os.sort(function(a,b){return f(a[1],b[1]);});
  for (i=0; i<os.length; i++) {
    ks.push(os[i][0]);
  }
  return ks;
};

function collides(a, b) {
	var name = a.name;

	var a = a.properties;
	var b = b.properties;

	var test = (
		a.x < b.x + b.width 

		&& a.x + a.width > b.x 

		&& a.y < b.y + b.height 

		&& a.y + a.height > b.y
	)
	
	if (name == '_Bullet' && test) {	
		console.log("Testing: ");
		console.log(
			"A at: " + a.x + "-" + (a.x + parseInt(a.width)) + "/"
			+ a.y + "-" + (a.y + parseInt(a.height))	
		);
		console.log(
			"B at: " + b.x + "-" + (b.x + parseInt(b.width)) + "/"
			+ b.y + "-" + (b.y + parseInt(b.height))	
		);	
		console.log(
			"Hit at: " + a.x + ":" + a.y	
		);	

	}
	
	return test;
	
}

function calculateTorque(ship) {

}    


var matched, browser;

jQuery.uaMatch = function( ua ) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie)[\s?]([\w.]+)/.exec( ua ) ||       
        /(trident)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};

matched = jQuery.uaMatch( navigator.userAgent );
//IE 11+ fix (Trident) 
matched.browser = matched.browser == 'trident' ? 'msie' : matched.browser;
browser = {};

if ( matched.browser ) {
    browser[ matched.browser ] = true;
    browser.version = matched.version;
}

// Chrome is Webkit, but Webkit is also Safari.
if ( browser.chrome ) {
    browser.webkit = true;
} else if ( browser.webkit ) {
    browser.safari = true;
}

jQuery.browser = browser;
/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * <pre>
 * (x * 255).clamp(0, 255)
 * </pre>
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};



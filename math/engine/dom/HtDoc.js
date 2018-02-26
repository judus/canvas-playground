import Element from "./Element.js";

export default class HtDoc {
	constructor(title = 'HtDoc-Page', color = 'fff',
				styles = {padding: 0, margin: 0, overflowX: 'hidden'}
	) {
		document.title = title;
		document.body.style.backgroundColor = '#' + color;

		for(let [style, value] of Object.entries(styles)) {
			document.body.style[style] = value;
		}
	}

	createSlider(name, min, max, step) {
		const e = document.createElement('input');
		e.setAttribute('name')
	}


	findId(e) {
		return new Element().setElement(document.getElementById(e));
	}
}
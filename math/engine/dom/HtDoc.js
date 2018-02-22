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
}
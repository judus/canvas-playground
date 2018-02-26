import Input from "./Input.js";

export default class Slider extends Input {
	constructor(name, min, max, step, value, parent, styles) {
		super();
		name && this.createSlider(name);
		min && this.setMin(min);
		max && this.setMax(max);
		step && this.setStep(step);
		value && super.setValue(value);
		parent && super.parent(parent);
		styles && super.style(styles);
	}

	createSlider(name, min, max, step, value, parent, styles) {
		super.createInput(name, value, parent, styles);
		super.setType('range');
		this.setMin(min);
		this.setMax(max);
		return this;
	}

	setMin(min) {
		super.setAttribute('min', min);
		this.min = min;
		return this;
	}

	getMin() {
		return this.min;
	}

	setMax(max) {
		super.setAttribute('max', max);
		this.max = max;
		return this;
	}

	getMax() {
		return this.max;
	}

	setStep(step) {
		super.setAttribute('step', step);
		this.step = step;
		return this;
	}

	onChange(callback) {
		this.listenTo(this.element);
		this.changeEvent = callback;
	}

	handleEvent(event) {
		if (typeof this.changeEvent === 'function') {
			this.changeEvent(this, event);
		}
	}

	listenTo(element) {
		['input'].forEach(eventName => {
			element.addEventListener(eventName, event => {
				this.handleEvent(event);
			});
		});
	}
}
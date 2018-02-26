import Element from "../Element.js";

export default class Input extends Element {
	constructor(name, type, value, parent, styles) {
		super();
		name && this.createInput(name);
		type && this.setType(type);
		value && this.setValue(value);
		parent && super.parent(parent);
		styles && super.style(styles);
	}

	createInput(name) {
		super.createElement('input');
		super.setTag('input');
		this.setName(name);
		return this;
	}

	setName(name) {
		super.setAttribute('name', name);
		this.name = name;
		return this;
	}

	setType(type) {
		super.setAttribute('type', type);
		this.type = type;
		return this;
	}

	setValue(value) {
		super.setAttribute('value', value);
		return this;
	}

	getValue() {
		return this.element.value;
	}

	val(value) {
		if (typeof value === 'undefined') {
			return this.getValue();
		}

		this.setValue(value);
		return this;
	}
}
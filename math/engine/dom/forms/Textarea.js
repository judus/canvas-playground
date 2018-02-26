import Input from "./Input.js";

export default class Textarea extends Input {
	constructor(name, content, parent, styles) {
		super();
		name && this.createTextarea(name);
		content && super.setContent(content);
		parent && super.parent(parent);
		styles && super.style(styles);
	}

	createTextarea(name) {
		super.createElement('textarea');
		super.setName(name);
		return this;
	}

	setValue(value) {
		super.setContent(value);
		return this;
	}

	val(value) {
		if (typeof value === 'undefined') {
			return super.getContent();
		}

		super.setContent(value);
		return this;
	}
}
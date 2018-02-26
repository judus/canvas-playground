export default class Element {
	constructor(tag, content, parent, styles) {
		tag && this.createElement(tag);
		content && this.setContent(content);
		parent && this.appendToId(parent);
		styles && this.style(styles);
	}

	setElement(element) {
		this.element = element;
		return this;
	}

	createElement(tag) {
		this.element = document.createElement(tag);
		this.setTag(tag);
		return this;
	}

	setContent(content, position = 'beforeend') {
		this.element.innerHTML = '';
		this.element.insertAdjacentHTML(position, content);
		this.content = content;
		return this;
	}

	getContent() {
		return this.content;
	}

	parent(id) {
		this.appendToId(id);
		return this;
	}

	style(styles) {
		for(let [style, value] of Object.entries(styles)) {
			this.element.style[style] = value;
		}
		this.styles = this.element.style;
		return this;
	}

	appendToId(id) {
		this.parent = document.getElementById(id);
		this.parent.appendChild(this.element);
		return this;
	}

	setAttribute(name, value) {
		this.element.setAttribute(name, value);
		return this;
	}

	setTag(tag) {
		this.tag = tag;
		return this;
	}

	setId(id) {
		this.element.setAttribute('id', id);
		this.id = id;
		return this;
	}

	setData(name, value) {
		this.element.setAttribute('data-' + name, value);
		return this;
	}

	con(content) {
		if (typeof content === 'undefined') {
			return this.getContent();
		}

		this.setContent(content);
		return this;
	}
}
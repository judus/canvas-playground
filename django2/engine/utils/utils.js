export function get(id) {
	return document.getElementById(id);
}

export function getContext(name, context = '2d') {
	return document.getElementById(name).getContext(context);
}

export function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

export function createButton(label, func, context) {
	let button = document.createElement("input");
	button.type = "button";
	button.value = label;
	if(isFunction(func)) button.onclick = func;
	if(context) context.appendChild(button);
	return button;
}

function Renderable(I) {
	I = I || {};
	I.type = I.type || 'self';
	I.active = I.active || true;
	I.sprite = I.sprite || 'player.png';
	I.width = I.width || 32;
	I.height = I.height || 32;
	I.offsetX = I.offsetX || 0;
	I.offsetY = I.offsetY || 0;
	return I;
}

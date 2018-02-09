function Damage(I) {
	I.amount = I.amount || 0;
	I.damage = function() {
		return I.amount;
	};
	return I;
}

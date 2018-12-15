class Shopper {
	constructor(name = "unnamed person") {
		this._name = name;
		this._shoppingList = [];
	}

	set name(value) {
		this._name = value;
	}

	get name() {
		return this._name;
	}

	get shoppingList() {
		return this._shoppingList.join(", ");
	}

	addItemToList(item) {
		this._shoppingList.push(item);
	}

	clone() {
		// you have to be carefule of using assign here as
		// if you pass it a reference to an object if will
		// copy that reference and not the object
		const proto = Object.getPrototypeOf(this); // the methods
		const present = JSON.parse(JSON.stringify(this)); // the instance properties
		console.log(present);
		return Object.assign(Object.create(proto), present);
	}
}

module.exports = Shopper;

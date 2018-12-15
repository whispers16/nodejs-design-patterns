var logger = require("./Logger");

// importing the logger instance
// var logger = new Logger().instance;

class Shopper {
	constructor(name, money = 0) {
		this.name = name;
		this.money = money;
		logger.log(`New Shopper: ${name} has ${money} in their account.`);
	}
}

module.exports = Shopper;

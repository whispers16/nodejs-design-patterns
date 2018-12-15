class Logger {
	constructor() {
		this.logs = [];
	}

	get count() {
		return this.logs.length;
	}

	log(message) {
		const timestamp = new Date().toISOString();
		this.logs.push({ message, timestamp });
		console.log(`${timestamp} - ${message}`);
	}
}

// modify to return a single instance
// class Singleton {
// 	constructor() {
// 		if (!Singleton.instance) {
// 			Singleton.instance = new Logger();
// 		}
// 	}
// 	get instance() {
// 		return Singleton.instance;
// 	}
// }

// module.exports = Singleton;

// an easier way is simply to explort an instance
// the same instance is export to all the consumers
module.exports = new Logger();

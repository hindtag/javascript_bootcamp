let fiat = {
	make: 'Fiat',
	model: '500',
	year: 1957,
	color: 'medium blue',
	passenger: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,

	start: function () {
		if (this.fuel > 0) {
			this.started = true;
		} else {
			alert('This car is on empty, fill up before starting');
		}
	},

	stop: function () {
		this.started = false;
	},

	drive: function () {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.model + ' goes zoom zooom!');
				this.fuel = this.fuel - 1;
			} else {
				alert('uh oh, out of fuel');
				this.stop();
			}
		} else {
			alert('You need to start the engine first.');
		}
	},

	addFuel: function (amount) {
		this.fuel = this.fuel + amount;
	},
};

fiat.start();
fiat.drive();
fiat.stop();
fiat.drive();

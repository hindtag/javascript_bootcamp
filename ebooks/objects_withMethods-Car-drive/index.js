let fiat = {
	make: 'Fiat',
	model: '500',
	year: 1957,
	color: 'medium blue',
	passenger: 2,
	convertible: false,
	mileage: 88000,
	started: false,

	start: function () {
		this.started = true;
	},

	stop: function () {
		this.started = false;
	},

	drive: function () {
		if (this.started) {
			alert('Zoom zooom!');
		} else {
			alert('You need to start the engine first.');
		}
	},
};

fiat.start();
fiat.drive();
fiat.stop();
fiat.drive();

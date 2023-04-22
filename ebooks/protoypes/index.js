function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

Dog.prototype.species = 'Canine';

Dog.prototype.bark = function () {
	if (this.weight > 25) {
		console.log(this.name + ' says: woof!');
	} else {
		console.log(this.name + ' says: yip!');
	}
};

Dog.prototype.run = function () {
	console.log('Run!');
};

Dog.prototype.wag = function () {
	console.log('Wag!');
};

Dog.prototype.sitting = false;

Dog.prototype.sit = function () {
	if (this.sitting) {
		console.log(this.name + ' is already sitting');
	} else {
		this.sitting = true;
		console.log(this.name + ' is now sitting');
	}
};

let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
spot.bark = function () {
	console.log(this.name + ' Says: BW000f!');
};

// fido.bark();
// fido.run();
// fido.wag();
// fido.sit();
// fido.sit();

// fluffy.bark();
// fluffy.run();
// fluffy.wag();

// spot.bark();
// spot.run();
// spot.wag();
console.log(spot.hasOwnProperty('sitting')); // False
spot.sitting = true;
console.log(spot.hasOwnProperty('sitting')); // true

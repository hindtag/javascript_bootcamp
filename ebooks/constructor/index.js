/* Dogs */

/* // Creating a constructor function

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;

	this.bark = function () {
		if (this.weight > 25) {
			alert(this.name + ' says woof, woof!');
		} else {
			alert(this.name + ' says yip!');
		}
	};
}

// Using a constructor

let bantay = new Dog('Bantay', 'Askal', 40);
let fluffy = new Dog('Fluffy', 'Poodle', 20);
let spot = new Dog('Spot', 'Chihuahua', 10);

let dogs = [bantay, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
	let size = 'small';
	if (dogs[i].weight > 10) {
		size = 'large';
	}
	console.log(
		'Dog: ' +
			dogs[i].name +
			' is a ' +
			size +
			' ' +
			dogs[i].breed +
			dogs[i].bark()
	);
}
 */

/* Car factory */
// | OLD | For rewired
// let chevy = new Car('Chevy', 'Bel-air', 1957, 'red', 2, false, 1021);
// let cadi = new Car('GM', 'Cadilac', 1955, 'tan', 5, false, 12892);
// let taxi = new Car('W motors', 'Taxi', 1955, 'yellow', 4, false, 281341);
// let fiat = new Car('Fiat', '500', 1957, 'Blue', 2, false, 88000);

// let testCar = new Car('W motors', 'Test Car', 2014, 'marine', 2, true, 21);

// | NEW | Rewired
/* let chevyParams = {
	make: 'Chevy',
	model: 'Bel-air',
	year: 1957,
	color: 'red',
	passengers: 2,
	convertible: false,
	mileage: 1021,
};

let cadiParams = {
	make: 'GM',
	model: 'Cadilac',
	year: 1955,
	color: 'tan',
	passengers: 5,
	convertible: false,
	mileage: 12892,
};

let taxiParams = {
	make: 'W motors',
	model: 'Taxi',
	year: 1955,
	color: 'yelow',
	passengers: 4,
	convertible: false,
	mileage: 281341,
};

let fiatParams = {
	make: 'Fiat',
	model: '500',
	year: 1957,
	color: 'Blue',
	passengers: 2,
	convertible: false,
	mileage: 88000,
};

let testCarParams = {
	make: 'W motors',
	model: 'Test car',
	year: 2014,
	color: 'Maroon',
	passengers: 2,
	convertible: true,
	mileage: 21,
};

let cadi = new Car(cadiParams);
let chevy = new Car(chevyParams);
let taxi = new Car(taxiParams);
let fiat = new Car(fiatParams);
let testCar = new Car(testCarParams);

let cars = [chevy, cadi, taxi, fiat, testCar];

for (let i = 0; i < cars.length; i++) {
	cars[i].start();
	cars[i].drive();
	cars[i].drive();
	cars[i].stop();
}

function Car(params) {
	this.make = params.make;
	this.model = params.model;
	this.year = params.year;
	this.color = params.color;
	this.passengers = params.passengers;
	this.convertible = params.convertible;
	this.mileage = params.mileage;
	this.started = false;

	this.start = function () {
		this.started = true;
	};

	this.stop = function () {
		this.started = false;
	};

	this.drive = function () {
		if (this.started) {
			console.log('Zoom zoom');
		} else {
			console.log('You need to start the engine first.');
		}
	};
}

// Checking the object with typeOf
console.log(chevy.make + ' ' + chevy.model + ' is a ' + typeof chevy);

// Inspecting the constructor that made an object using instanceOf
if (cadi instanceof Car) {
	console.log("Congrats, it's car!");
}
 */

let now = new Date();
let dateString = now.toString();
let theYear = now.getFullYear();
let theDayOfWeek = now.getDay();

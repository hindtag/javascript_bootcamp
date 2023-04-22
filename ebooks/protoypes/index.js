// // Dog constructor
// function Dog(name, breed, weight) {
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// }

// // Dog Prototype for specis, bark, run, wag and sit
// Dog.prototype.species = 'Canine';

// Dog.prototype.bark = function () {
// 	if (this.weight > 25) {
// 		console.log(this.name + ' says: woof!');
// 	} else {
// 		console.log(this.name + ' says: yip!');
// 	}
// };

// Dog.prototype.run = function () {
// 	console.log('Run!');
// };

// Dog.prototype.wag = function () {
// 	console.log('Wag!');
// };

// Dog.prototype.sitting = false;

// Dog.prototype.sit = function () {
// 	if (this.sitting) {
// 		console.log(this.name + ' is already sitting');
// 	} else {
// 		this.sitting = true;
// 		console.log(this.name + ' is now sitting');
// 	}
// };

// Dog instance creation
// let fido = new Dog('Fido', 'Mixed', 38);
// let fluffy = new Dog('Fluffy', 'Poodle', 30);
// let spot = new Dog('Spot', 'Chihuahua', 10);

//////////////////////
// Showdog constructor
// function ShowDog(name, breed, weight, handler) {
// 	Dog.call(this, name, breed, weight);
// 	this.handler = handler;
// }

// ShowDog prototype
// ShowDog.prototype = new Dog();
// ShowDog.prototype.constructor = ShowDog;

// ShowDog.prototype.league = 'Webville';
// ShowDog.prototype.stack = function () {
// 	console.log('Stack!');
// };
// ShowDog.prototype.bait = function () {
// 	console.log('Bait');
// };
// ShowDog.prototype.gait = function (kind) {
// 	console.log(kind + 'ing');
// };
// ShowDog.prototype.groom = function () {
// 	console.log('Groom');
// };

// Showdog creation instance
// let scotty = new ShowDog('Scotty', 'Scottish terrier', 15, 'Cookie');

// Invoking the object function
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

// Individual Instances
// spot.bark = function () {
// 	console.log(this.name + ' Says: BW000f!');
// };

// Test logic
// if (fido instanceof Dog) {
// 	console.log('Fido is a Dog');
// }
// if (fido instanceof ShowDog) {
// 	console.log('Fido is a ShowDog');
// }
// ////
// if (scotty instanceof Dog) {
// 	console.log('Fido is a Dog');
// }
// if (scotty instanceof ShowDog) {
// 	console.log('Fido is a ShowDog');
// }

// console.log(spot.hasOwnProperty('sitting')); // False
// spot.sitting = true;
// console.log(spot.hasOwnProperty('sitting')); // true
// scotty.stack();
// scotty.bark();
// console.log(scotty.league);
// console.log(scotty.species);

// console.log('Fido constructor is ' + fido.constructor);
// console.log('Scotty constructor is ' + scotty.constructor);
// scotty.gait('run');

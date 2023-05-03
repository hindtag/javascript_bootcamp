// Page 256|
// let access = document.getElementById('code9');
// let code = access.innerHTML;
// code = code + ' midnight';
// alert(code);

// page 293|
// function addSongs() {
// 	let song1 = document.getElementById('song1');
// 	let song2 = document.getElementById('song2');
// 	let song3 = document.getElementById('song3');

// 	song1.innerHTML = 'Blue Suede Strings, by Elvis Presley';
// 	song2.innerHTML = 'Great Objects on Fire, by Jerry JSON Lewis';
// 	song3.innerHTML = 'I code the line, by Johny Javascript';
// }
// window.onload = addSongs;

// page 296 |
// let scoop = document.getElementById('raspberry');

// page 314 |
// if ('99' == 99) {
// 	console.log('A number is equals string');
// } else {
// 	console.log('Not a string');
// }

/* Page 330 */

// function findCarInLot(car) {
// 	for (var i = 0; i < lot.length; i++) {
// 		if (car === lot[i]) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// var chevy = {
// 	make: 'Chevy',
// 	model: 'Bel Air',
// };

// var taxi = {
// 	make: 'Webville Motors',
// 	model: 'taxi',
// };

// var fiat1 = {
// 	make: 'Fiat',
// 	model: '500',
// };

// var fiat2 = {
// 	make: 'Fiat',
// 	model: '500',
// };

// var lot = [chevy, chevy, fiat1, fiat2];

// var loc1 = findCarInLot(fiat2);
// // var loc2 = findCarInLot(taxi);
// // var loc3 = findCarInLot(chevy);
// // var loc4 = findCarInLot(fiat1);

/* Page 333 */

// function lieDetectorTest() {
// 	let lies = 0;
// 	let stolenDiamond = {};

// 	if (stolenDiamond) {
// 		console.log('You stole the diamond');
// 		lies++;
// 	}

// 	let car = {
// 		keysInPocket: null,
// 	};

// 	if (car.keysInPocket) {
// 		console.log('Uh oh, guess you stole the car!');
// 		lies++;
// 	}

// 	let foundYouAtTheCrimeScene = [];

// 	if (foundYouAtTheCrimeScene) {
// 		console.log('A sure sign of guilt');
// 		lies++;
// 	}

// 	if (foundYouAtTheCrimeScene[0]) {
// 		console.log('Caught with stolen item');
// 		lies++;
// 	}

// 	let yourName = ' ';
// 	if (yourName) {
// 		console.log('Guess, you lied about your name');
// 		lies++;
// 	}

// 	return lies;
// }

// let numberOfLies = lieDetectorTest();
// console.log('You told ' + numberOfLies + ' lies!');
// if (numberOfLies >= 3) {
// 	console.log('Guilty as charged!');
// }

// let text = 'YOU SHOULD NEVER SHOUT WHEN TYPING';
// let presentableText = text.toLocaleLowerCase();
// if (presentableText.length > 0) {
// 	alert(presentableText);
// }

/* Page 345 */

// function Duck(sound) {
// 	this.sound = sound;
// 	this.quack = function () {
// 		console.log('this.sound');
// 	};
// }

// let toy = new Duck('Quack Quack');

// toy.quack();

// console.log(typeof toy);
// console.log(toy instanceof Duck);
// let names = ['Frod', 'Sam', 'Merry', 'Pipe'];
// for (i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }

/* Page 426 */

// window.onload = pageLoadedHandler;

// function pageLoadedHandler() {
// 	alert('I am alive');
// }

/* Page 428 */

// window.onload = init();

// function init() {
// 	let image = document.getElementById('zero');
// 	image.onclick = showAnswer;
// }

// function showAnswer() {
// 	let image = document.getElementById('zero');
// 	image.src = './img/zero.jpg';
// }

/* Page 480 */

// let winner = function () {
// 	alert('Winner!');
// };
// let loser = function () {
// 	alert('Loser!');
// };

// winner();

// let a = winner;
// let b = loser;
// let c = loser;

// a();
// b();

// c = a;
// a = b;
// b = c;
// c = a;
// a = c;
// a = b;
// b = c;

// a();

/* Page 483 - First class function*/

// let passengers = [
// 	{ name: 'Jane Doloop', paid: true, ticket: 'coach' },
// 	{ name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
// 	{ name: 'Sue Property', paid: false, ticket: 'firstclass' },
// 	{ name: 'John Funcall', paid: true, ticket: 'coach' },
// ];

// function processPassengers(passengers, testFunction) {
// 	for (let i = 0; i < passengers.length; i++) {
// 		if (testFunction(passengers[i])) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// function checkNoFlyList(passenger) {
// 	return passenger.name === 'Dr. Evel';
// }

// function checkNotPaid(passenger) {
// 	return !passenger.paid;
// }

// let allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
// 	console.log(
// 		"The plane can't take off: we have a passenger on the no-fly-list"
// 	);
// }

// let allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
// 	console.log("The plane can't take off: not everyone has paid");
// }

// function createDrinkOrder(passenger) {
// 	let orderFunction;
// 	if (passenger.ticket === 'firstclass') {
// 		alert('Would you like a cocktail or wine?');
// 	} else {
// 		alert('You choice is cola or water.');
// 	}
// 	return orderFunction;
// }

// function serveCustomer(passenger) {
// 	let getDrinkOrderFunction = createDrinkOrder(passenger);
// 	getDrinkOrderFunction();
// 	//get dinner order
// 	getDrinkOrderFunction();
// 	getDrinkOrderFunction();
// 	//show movie
// 	getDrinkOrderFunction();
// 	//get pick up trash
// }

// function servePassengers(passengers) {
// 	for (let i = 0; i < passengers.length; i++) {
// 		serveCustomer(passengers[i]);
// 	}
// }

// servePassengers(passengers);

// Testing anonymous function
// function hello() {
// 	alert('hello');
// }

// setTimeout(function () {
// 	alert('hello');
// }, 60000);

/* Page 522 | Anonymous function */
// function vaccine(dosage) {
// 	if (dosage > 0) {
// 		inject(dosage);
// 	}
// }

// administer(
// 	patient,
// 	function (dosage) {
// 		if (dosage > 0) {
// 			inject(dosage);
// 		}
// 	},
// 	time
// );

// /* Page 539 | Colsure */
// function makeCounter() {
// 	let count = 0;

// 	function counter() {
// 		count++;
// 		return count;
// 	}
// 	return counter;
// }

// let doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());

/* Page 566 | Object constructors */

// function Duck(type, canFly) {
// 	this.type = type;
// 	this.canFly = canFly;
// }

/* Page 571 | Object constructor method */

// function Coffee(roast, ounces) {
// 	this.roast = roast;
// 	this.ounces = ounces;
// 	this.getSize = function () {
// 		if (this.ounces === 8) {
// 			return 'Small';
// 		} else if (this.ounces === 12) {
// 			return 'Medium';
// 		} else {
// 			return 'Large';
// 		}
// 	};
// 	this.toString = function () {};
// }

/* Page 576 | Constructor function excercise */

// function Car(
// 	make,
// 	model,
// 	year,
// 	color,
// 	passengers,
// 	convertible,
// 	mileage,
// 	started
// ) {
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// 	this.color = color;
// 	this.passengers = passengers;
// 	this.convertible = convertible;
// 	this.mileage = mileage;
// 	this.started = started;

// 	this.start = function () {
// 		this.started = true;
// 	};

// 	this.stop = function () {
// 		this.started = false;
// 	};

// 	this.drive = function () {
// 		if (this.started) {
// 			console.log(this.make + ' ' + this.model + ' goes zoom zoom');
// 		} else {
// 			console.log('Start the engine first');
// 		}
// 	};
// }

/* Page 584 */
// function dogCatcher(obj) {
// 	if (obj instanceof Dog) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function Cat(name, breed, weight) {
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// }

// let meow = new Cat('Meow', 'Siamese', 10);
// let whisker = new Cat('Whisker', 'Mixed', 12);

// let fido = {
// 	name: 'Fido',
// 	breed: 'Mixed',
// 	weight: 38,
// };

// function Dog(name, breed, weight) {
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// 	this.bark = function () {
// 		if (this.weight > 25) {
// 			alert(this.name + ' Says woof!');
// 		} else {
// 			alert(this.name + ' Says Yip!');
// 		}
// 	};
// }

// let fluffy = new Dog('Fluffy', 'Poodle', 30);
// let spot = new Dog('Spot', 'Chihuahua', 10);

// let dogs = [meow, whisker, fido, fluffy, spot];

// for (let i = 0; i < dogs.length; i++) {
// 	if (dogCatcher(dogs[i])) {
// 		console.log(dogs[i].name + ' is a dog!');
// 	}
// }

/* Page 627 */
// function Robot(name, year, owner) {
// 	this.name = name;
// 	this.year = year;
// 	this.owner = owner;
// }

// Robot.prototype.maker = 'ObjectRUs';
// Robot.prototype.errorMessage = 'All systems go';
// Robot.prototype.reportError = function () {
// 	console.log(this.name + ' says ' + this.errorMessage);
// };

// Robot.prototype.spillWater = function () {
// 	this.errorMessage = 'I appear to have a short circuit';
// };

// let roby = new Robot('Roby', 1956, 'Dr. Morbius');
// let rosie = new Robot('Rosie', 1962, 'George Jetson');

// rosie.reportError();
// roby.reportError();
// roby.spillWater();
// rosie.reportError();
// roby.reportError();

// console.log(roby.hasOwnProperty('errorMessage'));
// console.log(rosie.hasOwnProperty('errorMessage'));

// Robot.prototype.toString = function () {
// 	return this.name + ' Robot belonging to ' + this.owner;
// };
// let toy = new Robot('Toy', 2013, 'Avary');

// console.log(toy.toString());

/* Page 661 */
// String.prototype.palindrome = function () {
// 	let len = this.length - 1;
// 	for (let i = 0; i <= len; i++) {
// 		if (this.charAt(i) !== this.charAt(len - i)) {
// 			return false;
// 		}
// 		if (i === len - i) {
// 			return true;
// 		}
// 	}
// 	return true;
// };

// let phrases = ['eve', 'kayak', 'mom', 'wow', 'not a palindrome'];

// for (let i = 0; i < phrases.length; i++) {
// 	let phrase = phrases[i];
// 	if (phrase.palindrome()) {
// 		console.log("'" + phrase + "' is a palindrome");
// 	} else {
// 		console.log("'" + phrase + "' is NOT a palindrome");
// 	}
// }

/* Just javascript | Page 59 */
/* 
for (let i = 0; i < 7; i++) {
	console.log(2);
}

for (let i = 0; i < 7; i++) {
	console.log({});
}

for (let i = 0; i < 7; i++) {
	console.log(function () {});
} */

// let countDwarves = function () {
// 	return 7;
// };
// let dwarves = countDwarves();
// console.log(dwarves);

/* Just javascript | Page 86 */
// let sherlock = {
// 	surname: 'Holmes',
// 	age: 64,
// };

// let propertyName = prompt('What do you want to know?');

// alert(sherlock[propertyName]);

/* Just javascript | Page 110 */
// let human = {
// 	teeth: 32,
// 	hands: 2,
// };

// let gwen = {
// 	__proto__: human,
// 	age: 19,
// };

// console.log(gwen.teeth);
// console.log(gwen.hands);

//
window.onload = countBodyChildren;

function showPic(whichPic) {
	let source = whichPic.getAttribute('href');
	let placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src', source);
	let text = whichPic.getAttribute('title');
	let description = document.getElementById('description');
	description.firstChild.nodeValue = text;
}

function countBodyChildren() {
	let body_element = document.getElementsByTagName('body')[0];
	alert(body_element.nodeType);
}

window.onload = preparelinks;

function preparelinks() {
	if (document.getElementsByTagName) return false;
	let links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++) {
		if (links[i].getAttribute('class') == 'popup') {
			links[i].onclick = function () {
				popUp(this.getAttribute('href'));
				return false;
			};
		}
	}
}

function popUp(winURL) {
	window.open(winURL, 'popup', 'width=320, height: =480');
}

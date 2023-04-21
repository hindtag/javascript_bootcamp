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

function Coffee(roast, ounces) {
	this.roast = roast;
	this.ounces = ounces;
	this.getSize = function () {
		if (this.ounces === 8) {
			return 'Small';
		} else if (this.ounces === 12) {
			return 'Medium';
		} else {
			return 'Large';
		}
	};
	this.toString = function () {};
}

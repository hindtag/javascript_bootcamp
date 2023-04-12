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

let winner = function () {
	alert('Winner!');
};
let loser = function () {
	alert('Loser!');
};

winner();

let a = winner;
let b = loser;
let c = loser;

a();
b();

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

a();

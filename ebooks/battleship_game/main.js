let randomloc = Math.floor(Math.random() * 5);
let location1 = randomloc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
	guess = prompt('ready, aim, fire (enter number from 0-6):');
	if (guess < 0 || guess > 6) {
		alert('PLease enter a valid number');
	} else {
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			alert('Hit!');
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("You've sunk my battleship!");
			}
		} else {
			alert('Miss!');
		}
	}
}

let stats =
	'You took ' +
	guesses +
	' guesses to sink the battleship,' +
	' which means your shooting accuracy is ' +
	3 / guesses;

alert(stats);

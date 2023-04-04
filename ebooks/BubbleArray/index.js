let scores = [
	60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
	54, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];

let costs = [
	0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
	0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25, 0.3, 0.25, 0.24, 0.25, 0.25, 0.25,
	0.27, 0.25, 0.26, 0.29,
];

function printAndGetHighScore(score) {
	let highScore = 0;
	let output;

	for (let i = 0; i < scores.length; i++) {
		output = 'Bubble solution # ' + i + ' scores : ' + scores[i];
		console.log(output);
		if (scores[i] > highScore) {
			highScore = scores[i];
		}
	}
	return highScore;
}

let highScore = printAndGetHighScore(scores);
console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highScore);

function getBestResults(scores, highScore) {
	let bestSolution = [];
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] == highScore) {
			bestSolution.push(i);
		}
	}
	return bestSolution;
}

let bestSolution = getBestResults(scores, highScore);
console.log('solution with the highest score: ' + bestSolution);

// Cost effective solution

function getMostEffectiveSolution(scores, costs, highScore) {
	let cost = 100;
	let index;

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] == highScore) {
			if (cost > costs[i]) {
				index = i;
				cost = costs[i];
			}
		}
	}
	return index;
}

let MostCostEffective = getMostEffectiveSolution(scores, costs, highScore);
console.log(
	'Bubble Solution #' + MostCostEffective + ' is the most cost effective'
);

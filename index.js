// Create your function below this line.

function bmiCalculator(weight, height) {
	var bmicalc = weight / (height * height);
	return Math.round(bmicalc);
}
var bmicalc = bmiCalculator(65, 1.5);

// same with
function bmiCalculator(weight, height) {
	var bmi = weight / Math.pow(height, 2);
	return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.5);

console.log(bmi);
console.log(bmicalc);

/* If my weight is 65kg and my height is 1.8m, I should be able to call your function like this:
// var bmi = bmiCalculator(65, 1.5);
bmi should equal around 20 in this case.
*/

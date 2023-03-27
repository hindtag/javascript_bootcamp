let numStart = 11;
let numEnd = 23;
let myArr = [];

for (i = numStart; i <= numEnd; i++) {
	myArr.push(i);
}
document.write(myArr);

let result = cm2in;
function cm2in(x) {
	var convert = x / 2.54;
	return Math.round(convert) + '"';
}
document.write(cm2in(16));

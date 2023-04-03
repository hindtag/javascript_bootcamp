// The thing a ma jig

function clunk(times) {
	let num = times;
	while (num > 0) {
		display('clunk');
		num = num - 1;
	}
}

function thingmajig(size) {
	let facky = 1;
	clunkCounter = 0;
	if (size == 0) {
		display('clunk');
	} else if (size == 1) {
		display('thunk');
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}

function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}

let clunkCounter = 0;
thingmajig(3);
console.log(clunkCounter);

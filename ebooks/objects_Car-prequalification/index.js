// Webville Motors
let taxi = {
	make: 'Webville Motors',
	model: 'taxi',
	year: 1955,
	color: 'yellow',
	passengers: 4,
	convertible: false,
	mileage: 281341,
};

// General Motors
let cadi = {
	make: 'General Motors',
	model: 'Cadilac',
	year: 1955,
	color: 'tan',
	passengers: 4,
	convertible: false,
	mileage: 12892,
};

// Prequalification function
function prequal(car) {
	if (car.mileage > 10000) {
		return false;
	} else if (car.year > 1960) {
		return false;
	}
	return true;
}

/* Print to console*/

//Webville
let worthALook = prequal(taxi);

if (worthALook) {
	console.log('you gotta check out this ' + taxi.make + ' ' + taxi.model);
} else {
	console.log('you should really pass on the ' + taxi.make + ' ' + taxi.model);
}

// General Motors
prequal(cadi);
if (worthALook) {
	console.log('you gotta check out this ' + cadi.make + ' ' + cadi.model);
} else {
	console.log('you should really pass on the ' + cadi.make + ' ' + cadi.model);
}

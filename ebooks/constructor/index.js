// Creating a constructor function

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function () {
		if (this.weight > 25) {
			alert(this.name + ' says woof, woof!');
		} else {
			alert(this.name + ' says yip!');
		}
	};
}

// Using a constructor

let bantay = new Dog('Bantay', 'Askal', 40);
let fluffy = new Dog('Fluffy', 'Poodle', 20);
let spot = new Dog('Spot', 'Chihuahua', 10);

let dogs = [bantay, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
	let size = 'small';
	if (dogs[i].weight > 10) {
		size = 'large';
	}
	console.log(
		'Dog: ' +
			dogs[i].name +
			' is a ' +
			size +
			' ' +
			dogs[i].breed +
			dogs[i].bark()
	);
}

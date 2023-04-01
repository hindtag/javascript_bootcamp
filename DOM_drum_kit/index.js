let numberOfButton = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButton; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', function () {
		this.style.color = 'white';
	});
}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play()
let housekeeper = {
	name: 'Jeannie',
	age: 12,
	workOfExperience: 12,
};

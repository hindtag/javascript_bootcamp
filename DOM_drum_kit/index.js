let numberOfButton = document.querySelectorAll('.drum').length;
let i = 0;
while (i < numberOfButton) {
	i++;
	document.querySelectorAll('.drum')[i].addEventListener('click', function () {
		alert('I was clicked');
	});
}

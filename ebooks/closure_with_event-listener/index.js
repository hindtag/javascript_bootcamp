window.onload = function () {
	let count = 0;
	let message = 'You clicked me ';
	let div = document.getElementById('message');

	let button = document.querySelector('#clickme');
	button.onclick = function () {
		count++;
		div.innerHTML = message + count + ' times';
	};
};

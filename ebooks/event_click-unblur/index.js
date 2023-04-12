window.onload = init();

function init() {
	let images = document.getElementsByTagName('img');
	for (let i = 0; i < images.length; i++) {
		images[i].onmouseover = showAnswer;
		images[i].onmouseout = reblur;
	}
}

function showAnswer(eventObj) {
	let image = eventObj.target;
	let name = image.id;
	name = './img/' + name + '.jpg';
	image.src = name;
}

function reblur(eventObj) {
	let image = eventObj.target;
	let name = image.id;
	name = './img/' + name + 'blur.jpg';
	image.src = name;
}

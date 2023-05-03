function addLoadEvent(func) {
	let olonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			onload();
			func();
		};
	}
}

// Image Gallery

addLoadEvent(prepareGallery);

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById('imagegallery')) return false;
	let gallery = document.getElementById('imagegallery');
	let links = gallery.getElementsByTagName('a');

	for (let i = 0; i < links.length; i++) {
		links[i].onclick = function () {
			return showPic(this) ? false : true;
		};
	}
}

function showPic(whichPic) {
	if (!document.getElementById('placeholder')) return false;
	let source = whichPic.getAttribute('href');
	let placeholder = document.getElementById('placeholder');
	if (placeholder.nodeName != 'IMG') return false;
	placeholder.setAttribute('src', source);
	if (document.getElementById('description')) {
		let text = whichPic.getAttribute('title')
			? whichPic.getAttribute('title')
			: '';
		let description = document.getElementById('description');
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function countBodyChildren() {
	let body_element = document.getElementsByTagName('body')[0];
	alert(body_element.nodeType);
}

// popup
function preparelinks() {
	if (document.getElementsByTagName) return false;
	let links = document.getElementsByTagName('a');
	for (let i = 0; i < links.length; i++) {
		if (links[i].getAttribute('class') == 'popup') {
			links[i].onclick = function () {
				popUp(this.getAttribute('href'));
				return false;
			};
		}
	}
}

function popUp(winURL) {
	window.open(winURL, 'popup', 'width=320, height: =480');
}

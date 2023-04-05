function init() {
	let planet = document.getElementById('greenplanet');
	planet.innerHTML = 'Warning, hit by laser beam!';
	planet.setAttribute('class', 'redtext');
}

window.onload = init;

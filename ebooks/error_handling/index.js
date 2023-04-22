window.onload = function () {
	try {
		let message = document.querySelector('#messge');
		message.innerHTML = "Here's the message";
	} catch (error) {
		console.log('Error! ' + error.message);
	}
};



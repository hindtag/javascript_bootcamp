let guestsList = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];
let guestName = prompt('Enter your name');
if (guestsList.includes(guestName)) {
	alert('Welcome');
} else {
	alert('Maybe next time');
}

console.log('Welcome ' + guestsList[0]);
console.log('Welcome ' + guestsList[1]);
console.log('Welcome ' + guestsList[2]);
console.log('Welcome ' + guestsList[3]);
console.log('Welcome ' + guestsList[4]);
console.log('Welcome ' + guestsList[5]);

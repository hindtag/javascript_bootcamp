/* 
// Variables //

var a = 3;
var b = 8;
var c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Naming Conventions //
 Using camelCase
Example: myName, myNameIs and myNameIsReally

// Concatanation //

var message = 'Hello';
var yourName = prompt('Enter your name:');

alert(message + ' there, ' + yourName);

*/

// Lengths - Retrieving character lengttafghs
// var name = 'Tag';
// console.log(name.length);

var message = prompt('Enter your message');
var messageCount = message.length;

alert(
	'You have written ' +
		message.length +
		' characters, you have ' +
		(182 - messageCount) +
		' characters left.'
);

var message = 'Hello';

// Step 1 create a variable that stores the name that user enters via prompt
var yourName = prompt('What is you name?');

// Step 2 capitalize the first letter of the name

// 2.1 Isolate the first character.
var firstChar = yourName.slice(0, 1);
// 2.2 Turn the first character to upper case.
var firstCharToUpper = firstChar.toLocaleUpperCase();
// 2.3 Isolate the rest of the name
var restOfName = yourName.slice(1, yourName.length);
// 2.4 con catenate the first character with the rest of the character.
var name = firstCharToUpper + restOfName;
// Step 3 greet them with alert

// Or shorthand
// console.log(yourName.charAt(0).toUpperCase() + yourName.slice(1).toLowerCase());

console.log(firstCharToUpper);
console.log(restOfName);
console.log(name);

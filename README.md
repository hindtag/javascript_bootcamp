# Javascript Bootcamps

- [ ] Angela Yu
- [ ] FreeCodeCamp

This is my repository for learning Javascript in Bootcamps.

## Variables

Writing variables

var a = 3;
var b = 8;
var c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

## Naming Conventions

Using camelCase
Example: myName, myNameIs and myNameIsReally

## Concatanation

var message = 'Hello';
var yourName = prompt('Enter your name:');

alert(message + ' there, ' + yourName);

## Character Count

Lengths - Retrieving character length using .length

var name = 'Tag';
console.log(name.length);

Example: Getting character count on prompt.

var message = prompt('Enter your message');
var messageCount = message.length;

alert(
'You have written ' +
message.length +
' characters, you have ' +
(182 - messageCount) +
' characters left.'
);

## Slicing character

Slice - extracting parts of a string using .slice()

slice(a,b)
a is the starting and b is the ending.

var city = "Legazpi"
city.slice(0,3);
console.log(city.slice(0, 3));

you'll get "Leg"

Example: Prompt the first 140 character in the screen.

var message = prompt('Enter your message');
var messageUnder140 = message.slice(0, 140);
alert(messageUnder140);

or shorthand method
alert(prompt('Enter your message').slice(0, 140));

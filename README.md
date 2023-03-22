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

Using camelCase Example:

    myName
    myNameIs
    myNameIsReally

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

## Changing String Casing (uppercase or lowercase)

Casing - changing string to uppercase and lowercase using .toUpperCase or .toLowerCase

    var name = "Tag";
    name = name.toUpperCase();

    or

    var name = "Tag";
    name = name.toLowerCase();

// Challenge: Create an alert that capitalize the first character of the name of the user using prompt.

Solution:

    var message = 'Hello';

Step 1 create a variable that stores the name that user enters via prompt.

    var yourName = prompt('What is you name?');

Step 2 capitalize the first letter of the name.

    2.1 Isolate the first character.
        var firstChar = yourName.slice(0, 1);

    2.2 Turn the first character to upper case.
        var firstCharToUpper = firstChar.toLocaleUpperCase();

    2.3 Isolate the rest of the name
        var restOfName = yourName.slice(1, yourName.length);

    2.4 convert the rest of the character to lowercase
    restOfName = restOfName.toLocaleLowerCase();

    2.5 concatenate the first character with the rest of the character.
        var name = firstCharToUpper + restOfName;

Step 3 greet them with alert

    alert(message + ' ' + name);

## Basic Arithmetic

You can use +,-,\*,/ and %

How old would your dog be if it was a human?

// Challenge: Create dog age to human age converter:

Formula:

    humanAge = (dogAge -2) x 4 + 21

// Solution:

    var dogAge = prompt('Enter your dog age:');
    var convertedAge = (dogAge - 2) * 4 + 21;

    alert(
        'Your dog age is ' +
            convertedAge +
            ' years old ' +
            'if it is converted to human age.'
    );

## Incremental

    x + x is x++
    x - x is x--
    x + x + x is x += 2

## Functions

A block of reusable code that performs a specific task. It is a set of instructions that are executed when the function is called or invoked.

Can be defined using the function keyword:

1.  creating the function

        function functionName() {}

2.  calling the function

            functionName();

        ### Using Parameters

        Passing a value using (parameters)

            function getMilk(bottles) {
                var cost = bottles * 1.5;
            }

        another example: Create a function that compute how many bottles can be buy with a givin budget.

            function getMilk(money) {
                var numberOfBottles = Math.floor(money / 1.5);

            console.log("Buy" + numberOfBottles + " Bottles of Milk");
            }

            getMilk(4);

        another example: Create a function that tell us how many days, weeks and months we have left if we live 90 years old.

            function lifeInWeek(age){
                var yearsRemaining = 90 - age;
                var days = yearsRemaining * 365
                var weeks = yearsRemaining * 52
                var months = yearsRemaining * 12

            console.log("You have" + days + "days, " + weeks + " weeks and" + months + " months left");

            }

            lifeInWeek(13);

    ### Using return

        Getting an output using return

        function getMilk(money) {
            var numberOfBottles = Math.floor(money / 1.5);

            console.log('Buy ' + calcBottles(money, 1.5) + ' Bottles of Milk');

            return money % 1.5; // Remainder

        }

        function calcBottles(startingMoney, costPerBottle) {
            var numberOfBottles = Math.floor(startingMoney / costPerBottle);
            return numberOfBottles;
        }

        var change = getMilk(4);
        console.log('You have a change of $' + change);

// Challenge: Create BMI calculator:

// Solution:

    function bmiCalculator(weight, height) {
        var bmicalc = weight / (height * height);
        return Math.round(bmicalc);
    }
    var bmicalc = bmiCalculator(65, 1.5);

// same with

    function bmiCalculator(weight, height) {
        var bmi = weight / Math.pow(height, 2);
        return Math.round(bmi);
    }

    var bmi = bmiCalculator(65, 1.5);

    console.log(bmi);
    console.log(bmicalc);

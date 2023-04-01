# Javascript Bootcamps

- [ ] Angela Yu
- [ ] FreeCodeCamp
- [ ] Patterns

This is my repository for learning Javascript in Bootcamps.

## Things to remember

Objects are always noun = person, place, thing, or idea
Properties are adjectives = describe the object/noun
Methods are verbs = word that expresses an action or state of being.

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

#### Random number generator

    let random = Math.random();
    random = random * 6;
    random = Math.floor(random) + 1; // Using Pseudo to avoid 0
    console.log(random);

## Conditionals and Logic

    ### If Else

    / Example:

    prompt('Your Name');
    prompt('Their Name');

    let loveRandom = Math.random();
    loveRandom = loveRandom \* 100;
    loveRandom = Math.floor(loveRandom) + 1;

    if (loveRandom > 70) {
    console.log(
    'Your love score is ' + loveRandom + '%' + ' Like God loves the world.'
    );
    }
    if (loveRandom > 30 && loveRandom <= 70) {
    console.log('Your love score is ' + loveRandom + '%' + ' Like Adam and Eve');
    }
    if (loveRandom <= 30) {
    console.log('Your love score is ' + loveRandom + '%' + ' like oil and water');
    }

    / Another Example:

    function whosPaying(names) {
    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];

    return randomPerson + ' is going to buy lunch today!';
    }

    / Another Example:

    let year = prompt('Enter the year');

    function isLeap(year) {
    if (year % 4 === 0) {
    if (year % 100 === 0) {
    if (year % 400 === 0) {
    return 'leap year';
    } else {
    return 'Not leap year';
    }
    } else {
    return 'leap year';
    }
    } else {
    return 'Not leap year';
    }
    }

## Arrays

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

    ### Challenge : FizzBuzz

    let output = [];
    let count = 1;

    function fizzBuzz() {
        while (count <= 100){

        if (count % 3 === 0 && count % 5 === 0) {
            output.push('FizzBuzz');
        } else if (count % 3 === 0) {
            output.push('Fizz');
        } else if (count % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(count);
        }
        count++;
        console.log(output);
    }
    }

    ### Challeng: Bottle print.

    var numberOfBottles = 99

    while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
    bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }

## Parts of javascript conditionals:

    	1. Condition: An expression that evaluates to a boolean value (true or false).
    	2. If statement: The if statement executes a block of code if the condition is true.
    	3. Else statement (optional): The else statement executes a block of code if the condition is false.
    		Example:
    		if (condition) {
    		// code to be executed if condition is true
    		} else {
    		// code to be executed if condition is false
    		}

    ## 3 Types of javascript conditionals
    	1. If statement - used to perform an action based on a specific condition.
    		Example:
    			let x = 5;
    			if (x > 0) {
    			console.log("x is positive");
    			}
    		Explanation:
    			In this example, the condition x > 0 is evaluated. If it's true, the code inside the if statement block will be executed and the message "x is positive" will be logged to the console. If the condition is false, the code inside the block will not be executed.

    	2. if-else statement - used to perform different actions based on different conditions.
    		Example:
    			let x = 5;
    			if (x > 0) {
    			console.log("x is positive");
    			} else {
    			console.log("x is not positive");
    			}
    		Explanation:
    			In this example, the condition x > 0 is evaluated. If it's true, the code inside the first block if statement will be executed and the message "x is positive" will be logged to the console. If the condition is false, the code inside the else block will be executed and the message "x is not positive" will be logged to the console.

    	3. switch statement - used as an alternative to the if-else statement when multiple conditions are involved.
    		Example:
    			let day = 3;
    			switch (day) {
    			case 1:
    				console.log("Monday");
    				break;
    			case 2:
    				console.log("Tuesday");
    				break;
    			case 3:
    				console.log("Wednesday");
    				break;
    			case 4:
    				console.log("Thursday");
    				break;
    			case 5:
    				console.log("Friday");
    				break;
    			default:
    				console.log("Weekend");
    			}

    		Explanation:
    			In this example, the variable day is given the value 3. The switch statement then evaluates the value of day and executes the code block associated with the matching case. In this case, the code block for case 3 will be executed and the message "Wednesday" will be logged to the console. The break statement at the end of each case block is used to exit the switch statement once a matching case is found, to prevent the execution of subsequent cases. The default case is used to handle values that don't match any of the specified cases.


    	4. Ternary operator (? :) - a shorthand way to write a simple if-else statement in a single line. It's particularly useful when the expression to be evaluated is short and the actions to be taken based on the evaluation are simple.
    		Example:
    			let x = 5;
    			let result = (x > 0) ? "x is positive" : "x is not positive";
    			console.log(result);
    		Explanation:
    			In this example, the ternary operator ? : is used to evaluate the expression x > 0. If the expression is true, the value of result will be "x is positive". If the expression is false, the value of result will be "x is not positive". The value of result is then logged to the console.


    ## Parts javascript loop:

1.  Initialization: A starting value for the loop counter.
2.  Condition: An expression that evaluates to a boolean value (true or false), which determines whether the loop should continue to execute.
3.  Iteration statement: An expression that updates the loop counter after each iteration.
4.  Loop body: The code that gets executed on each iteration of the loop.
    Example:
    for (initialization; condition; iteration statement) {
    // loop body
    }


    ## Types of loops in JavaScript
    	1.  for loop - used for repetitive operations a specific number of times.
    				 - This is the most commonly used loop in JavaScript. It is used when you know the number of iterations beforehand. The loop initializes a counter, tests a condition, and increments the counter after each iteration.
    		Example:
    			for (let i = 0; i < 5; i++) {
    				console.log("The value of i is: " + i);
    			}

    		Explanation:
    			In this example, the for loop consists of three parts separated by semicolons:

    			The initialization: let i = 0 - sets the starting value of the loop counter i.
    			The condition: i < 5 - determines when the loop should terminate. In this case, the loop will continue to run as long as i is less than 5.
    			The increment/decrement: i++ - specifies how the value of i should change after each iteration of the loop. In this case, i is incremented by 1 after each iteration.

    			The loop will run 5 times, starting from i = 0 and ending at i = 4. On each iteration of the loop, the value of i will be logged to the console.

    	2.  while loop - used to repeatedly execute a block of code while a condition is true.
    				   - This loop is used when you want to repeat a block of code an unknown number of times. The loop continues executing as long as the condition is true.

Example:
let i = 0;
while (i < 5) {
console.log("The value of i is: " + i);
i++;
}

    		Explanation:
    			In this example, the while loop evaluates the condition i < 5. If the condition is true, the code inside the loop is executed. The loop will continue to run as long as i is less than 5. On each iteration of the loop, the value of i is logged to the console and then incremented by 1.

    			The while loop is useful when you want to repeatedly execute a block of code while a certain condition is met. Just like with the for loop, it's important to be careful with the loop condition, as an infinite loop can occur if the condition is never false.

    	3. do-while loop - similar to the while loop, but always executes the code block once and then checks the condition.
    					 - This loop is similar to the while loop, but with a crucial difference: the code block is executed at least once, even if the condition is false.
    		Example:
    			let i = 1;
    			do {
    			console.log(i);
    			i++;
    			} while (i <= 10);

    		Explanation:
    			In this example, the code block inside the do statement will be executed at least once, and then the condition in the while statement will be evaluated. If the condition is true, the code block will be executed again. This process will continue until the condition becomes false.

    	4. for-in loop - used to iterate over the properties of an object.
    				   - This loop is used to iterate over the properties of an object. It is a concise and easy-to-read way to loop over object properties.
    		Example:
    			let person = {name: "John", age: 30, city: "New York"};

    			for (let key in person) {
    			console.log(key + ": " + person[key]);
    			}

    		Explanation:
    			In this example, the for-in loop is used to iterate over the properties of an object. The variable key is assigned the name of each property in the object person in turn, and the value of that property can be accessed using the square bracket notation (e.g. person[key]). The loop will continue until all properties have been processed.

    	5.  for-of loop - used to iterate over iterable objects such as arrays, maps, and sets.
    					- This loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It is a concise and easy-to-read way to loop over arrays or other iterable objects.
    		Example:
    			let array = [1, 2, 3, 4, 5];
    			for (let value of array) {
    			console.log(value);
    			}

    		Explanation:
    			In this example, the for-of loop is used to iterate over the elements of an array. The variable value is assigned the value of each element in the array array in turn. The loop will continue until all elements have been processed.

    			Note that the for-of loop is only available in JavaScript starting from ECMAScript 6 (ES6) and is not supported in older versions of JavaScript.

    	Note:

    		The main difference between the for-in and for-of loops in JavaScript is the type of object they can iterate over.

    		The for-in loop is used to iterate over the enumerable properties of an object. It returns the keys of the object properties, not the values.

    		The for-of loop is used to iterate over the values of an iterable object such as an Array, Map, Set, String, TypedArray, or any object that implements the Symbol.iterator method. It returns the values of the elements in the object.

    		So, if you need to access the values of an object's properties, use the for-of loop. If you need to access both the keys and values of an object's properties, use the for-in loop.

    		In JavaScript, iterable is a term used to describe objects that can be iterated, meaning that their elements can be accessed one at a time. enumerable refers to properties of an object that can be enumerated, meaning that they can be looped over.

    		In JavaScript, arrays are both iterable and enumerable, while objects are only enumerable. This means that arrays can be looped over using a for...of loop and their properties can be accessed using for...in loop, while objects can only be looped over using a for...in loop.

    		"iterated" refers to the process of accessing each element of a collection or data structure, one at a time, typically using a loop.

    		 "enumeration" refers to the process of looping over the properties of an object or elements of a data structure and accessing their values.

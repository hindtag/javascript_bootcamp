/* || Patter no 1

*****
*****
*****
*****
*****

// Step 1 - Initiate
let numberOfRows = 5;
let numberOfColumn = 5;

// Step 2 - Run the external loop
for (let row = 1; row <= numberOfRows; row++) {
	// Step 3 - Print the symbol
	let symbol = '';
	// Step 4 - Run the internal loop
	for (let col = 1; col <= numberOfColumn; col++) {
		symbol += '*';
	}
	console.log(symbol);
}

// - End no. 1 */

/* || Pattern no 2

*
**
***
****
*****

// Step 1 - Initiate
let numberOfRows = 5;
// Step 2 - Run the external loop
for (let row = 1; row <= numberOfRows; row++) {
	// Step 3 - Print the space
	let symbol = '';
	// Step 4 - Run the internal loop
	for (let col = 1; col <= row; col++) {
		// Step 5 - Print the symbol
		symbol += '*';
	}
	// Print new line
	console.log(symbol);
}


// - End no. 2 */

/* || Pattern no 3

*****
****
***
**
*


// Initiate
// Step 1 - Initiate
let numberOfRows = 5;
// Step 2 - Run the external loop
for (let row = 1; row <= numberOfRows; row++) {
	// Step 3 - Print the space
	let symbol = '';
	// Step 4 - Run the internal loop
	for (let col = 1; col <= numberOfRows - row + 1; col++) {
		// Step 5 - Print the symbol
		symbol += '*';
	}
	// Print new line
	console.log(symbol);
}

// - End no. 3 */

/* || Pattern no 4

// Step 1 - Initiate
let numberOfRows = 5;
// Step 2 - Run the external loop
for (let row = 1; row <= numberOfRows; row++) {
	// Step 3 - Print the space
	let symbol = '';
	// Step 4 - Run the internal loop
	for (let col = 1; col <= row; col++) {
		// Step 5 - Print the symbol
		symbol += col;
	}
	// Print new line
	console.log(symbol);
}

// - End no. 4 */

/* || Pattern no 5

*
**
***
****
*****
*****
****
***
**
*

// Step 1 - Initiate
let numberOfRows = 5;
// Step 2 - Run the external loop
for (let row = 1; row <= numberOfRows; row++) {
	// Step 3 - Print the space
	let symbol = '';
	// Step 4 - Run the internal loop
	for (let col = 1; col <= row; col++) {
		// Step 5 - Print the symbol
		symbol += '*';
	}
	// Print new line
	console.log(symbol);
}

// Step 6 - Start decreasing
for (let row = numberOfRows; row >= 1; row--) {
	// Step 7 - Print the space
	let symbol = '';
	// Step 8 - Run the internal loop
	for (let col = 1; col <= row; col++) {
		// Step 9 - Print the symbol
		symbol += '*';
	}
	// Print new line
	console.log(symbol);
}

// - End no. 5 */

/* || Pattern no 6

'*****';
'*   *';
'*   *';
'*   *';
'*****';

// Step 1 - Initiate
let numberOfRows = 5;

// Step 2 - Run the external loop
for (let row = 1; row <= numberOfRows; row++) {
	// Step 3 - Print the symbol
	let symbol = '';
	// Step 4 - Run the internal loop
	for (let col = 1; col <= numberOfRows; col++) {
		if (row == 1 || row == numberOfRows || col == 1 || col == numberOfRows) {
			symbol += '*';
		} else {
			symbol += ' ';
		}
	}
	console.log(symbol);
}

// - End no. 6 */

/* || Pattern no 7

    *
   **
  ***
 ****
*****

let height = 5;
let symbol = '';

for (let i = 1; i <= height; i++) {
	// printing spaces
	for (let j = 0; j < height - i; j++) {
		symbol += ' ';
	}
	// printing star
	for (let k = 0; k < i; k++) {
		symbol += '*';
	}
	symbol += '\n';
}
console.log(symbol);

// - End no. 7 */

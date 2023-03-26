// Detailed explanation

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
	console.log(symbol);
}

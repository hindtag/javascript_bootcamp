## Array Methods

    .pop() - remove the last element.
    .push() - add new element to the end of the array.
    .shift() - remove the first element.
    .unshift() - add new element to the beginning of the array.
    .sort() - Arrange order alphabetically.
    .reverse() - Arrange order descending.

    Activity: Use a loop to create an array containing the numbers 11 - 23.

        let numStart = 11;

        let numEnd = 23;
        let myArr = [];

        for (i = numStart; i <= numEnd; i++) {
        myArr.push(i);
        }
        document.write(myArr);

## Functions

    Activity: Make a function that converts CM to Inches. Round the result and add the inch symbol after the value

        let result = cm2in;

        function cm2in(x) {
        var convert = x / 2.54;
        return Math.round(convert) + '"';
        }
        document.write(cm2in(16));

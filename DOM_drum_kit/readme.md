## (Step 1) - Adding event listener to all of the button

Using for each

    let btns = document.querySelectorAll('button');
    btns.forEach(function (i) {
    i.addEventListener('click', function () {
    alert('I was clicked');
    });
    });

Using for loop

    let numberOfButton = document.querySelectorAll('.drum').length;

    for (let i = 0; i < numberOfButton; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    alert('I was clicked');
    });
    }

Using while loop

    let numberOfButton = document.querySelectorAll('.drum').length;
    let i = 0;
    while (i < numberOfButton) {
    i++;
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    alert('I was clicked');
    });
    }

## (Step 2) - Adding background image in the css

    Example:

        .j {
            background-image: url('/DOM_drum_kit/images/snare.png');
        }

## (Step 3) - Using event listener for Click and Keyboard press.

    // Detecting Button Press

    let numberOfButton = document.querySelectorAll('.drum').length;

    for (let i = 0; i < numberOfButton; i++) {
        document.querySelectorAll('.drum')[i].addEventListener('click', function () {
            var buttonInnerHTML = this.innerHTML;

            makeSound(buttonInnerHTML);
        });
    }

    // Detecting Keyboard Press

    document.addEventListener('keydown', function (event) {
        makeSound(event.key);
    });

## (Step 4) - Adding sounds using switch case

    	switch (key) {
    	case 'w':
    		var tom1 = new Audio('sounds/tom-1.mp3');
    		tom1.play();
    		break;

            default:
    		console.log(buttonInnerHTML);
    		break;
    }

## (Step 5) - Moving the switch case in the keyboard listener.

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

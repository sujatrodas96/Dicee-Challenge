function myFunction() {
    var numbers = Math.random() * 6; 
    var freshs = Math.floor(numbers);
    var randomNumber1 = freshs + 1;

    var imagesrc = 'images/dice' + randomNumber1 + ".png";
    document.querySelector("img.img1").setAttribute("src", imagesrc);

    return randomNumber1; // return the value
}

function myFunctionsec() {
    var number = Math.random() * 6; 
    var fresh = Math.floor(number);
    var randomNumber2 = fresh + 1;

    var imagesrcs = 'images/dice' + randomNumber2 + ".png";
    document.querySelector("img.img2").setAttribute("src", imagesrcs);

    return randomNumber2; // return the value
}


function rollDice() {
    var a = myFunction();
    var b = myFunctionsec();

    if (a > b) {
        document.getElementById('textchange').textContent = 'Player 1 Wins';
    } else if (b > a) {
        document.getElementById('textchange').textContent = 'Player 2 Wins';
    } else {
        document.getElementById('textchange').textContent = 'Draw!';
    }
}

document.addEventListener("DOMContentLoaded", rollDice);

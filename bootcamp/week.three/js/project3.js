function guessGameDefault() { // The default range is from 0 -> 100

    let number = Math.trunc(Math.random() * 100);

    console.log("Guessing game | Range [0 - 100]");
    do {
        let value = prompt("Guess my number");

        if (value < 0 || value > 100) console.log("Out of range.");
        else {
            if (value > number)
                console.log("Too high!");
            else if (value < number)
                console.log("Too low!");
            else
                console.log("You found my number!");
        }
    } while (value != number);
}

function guessGameRange() { // In case we need to select a range for the game

    let number = Math.trunc(Math.random() * 100);

    do {
        let value = prompt("Guess my number");

        if (value < 0 || value > 100) console.log("Out of range.");

        if (value > number)
            console.log("Too high!");
        else if (value < number)
            console.log("Too low!");
        else
            console.log("You found my number!");
    } while (value != number && min >= max);
}

function isEmpty(value){ // I just wrote it
    return value === "";
}




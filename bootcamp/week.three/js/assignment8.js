/***********Assignment 8***********/

console.log("A.");

// Uncomment one of each teams score array to get the winner.

// let nets = [96, 108, 89];
let nets = [97, 112, 101];

// let knicks = [88, 91, 110];
// let knicks = [109, 95, 123];
let knicks = [109, 95, 106];

let total = 0;

for (i = 0; i < nets.length; i++) // 
    total += nets[i]; // compute the team total score in the competition

let netsAvg = total / nets.length;

total = 0; // reinitialize the total value.

for (i = 0; i < knicks.length; i++)
    total += knicks[i];

let knicksAvg = total / knicks.length;

// console.log(netsAvg); // Checking that values.
// console.log(knicksAvg);

console.log("Nets\t\t\t VS \t\t\tKnicks");
console.log(`${nets}\t\t\t\t\t${knicks}\n\nResult`);
if (netsAvg >= 100 || knicksAvg >= 100) {
    if (netsAvg > knicksAvg)
        console.log("Nets team wins the trophy!!");
    else if (netsAvg < knicksAvg)
        console.log("Knicks team wins the trophy!!");
    else
        console.log("It is a draw!!");
} else
    console.log("There is no winner");


console.log("B.");

let tip = 0;

let bill = [275, 28, 430];

for (i = 0; i < bill.length; i++) {
    switch (bill[i] >= 30 && bill[i] <= 300) {
        case true:
            tip = bill[i] * 0.15;
            break;
        case false:
            tip = bill[i] * 0.20;
            break;
    }

    console.log(`The bill was ${bill[i]}, the tip was ${tip}, and the total value ${bill[i] + tip}.`);
}


console.log("C.");

let celcius = 10, fahrenheit = 40;

function celciusToFahrenheit(celcius) {
    return celcius * 1.8 + 32;
}

function fahrenheitToCelcius(fahrenheit) { 
    return (fahrenheit - 32) * 5/9;
}

console.log(`${celcius}\u00B0C is ${celciusToFahrenheit(celcius)}\u00B0F.`);

console.log(`${fahrenheit}\u00B0CFis ${fahrenheitToCelcius(fahrenheit)}\u00B0C.`);




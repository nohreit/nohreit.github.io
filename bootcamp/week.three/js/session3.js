// // age = 10;
// // console.log(`${age >= 21 ? "wine" : "water"}`);

// function display(str) {
//     console.log(`${str}`);
// }

// // display(25);

// const calAge = birthYear => 2021 - birthYear;

// console.log(calAge(1996));

// const yearUntilRetire = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retire = 65 - age;
//     return `${firstName} retires in ${retire} year(s).`;
// }

// display(yearUntilRetire(1992, "John"));


// /***********Assignment 8***********/

// console.log("A.");

// // Uncomment one of each teams score array to get the winner.

// // let nets = [96, 108, 89];
// let nets = [97, 112, 101];

// // let knicks = [88, 91, 110];
// // let knicks = [109, 95, 123];
// let knicks = [109, 95, 106];

// function avg(array) {
//     let total = 0;
//     for (i = 0; i < array.length; i++)
//         total += nets[i];
//     return total / array.length;
// }

// function winner(nets, knicks) {
//     console.log("Nets\t\t\t VS \t\t\tKnicks");
//     console.log(`${nets}\t\t\t\t\t${knicks}\n\nResult`);
//     if (avg(nets) >= 100 || avg(knicks) >= 100) {
//         if (avg(nets) > avg(knicks))
//             console.log("Nets team wins the trophy!!");
//         else if (avg(nets) < avg(knicks))
//             console.log("Knicks team wins the trophy!!");
//         else
//             console.log("It is a draw!!");
//     } else
//         console.log("There is no winner");
// }

// winner(nets, knicks);



// class Students { // Normally I would have put this class in a separate and personal js file
//     constructor(firstName, lastName, birthYear, schoolName, major, year) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//         this.schoolName = schoolName;
//         this.major = major;
//         this.year = year;
//     }

//     getFirstName() {
//         return this.firstName;
//     }

//     getLastName() {
//         return this.lastName;
//     }

//     setFirstName(firstName) {
//         this.firstName = firstName;
//     }

//     setLastName(lastName) {
//         this.lastName = lastName;
//     }

//     details(){
//         return `Student Info:
//                 First name  : ${this.firstName}
//                 Last name   : ${this.lastName}
//                 Birth Year  : ${this.birthYear}
//                 School      : ${this.schoolName}
//                 Major       : ${this.major}
//                 Year        : ${this.year}`
//     }
// }

// const Rimuru = {
//     firstName: "Rimuru",
//     lastName: "Tempest",
//     race: "Slime",
//     color: "Blue",

//     getRace: function () {
//         return this.race;
//     },

//     getColor: function () {
//         return this.color;
//     },

//     details: function () {
//         return `Entity Info:
//                 First name  : ${this.firstName}
//                 Last name   : ${this.lastName}
//                 Race        : ${this.race}
//                 Color       : ${this.color}`
//     }
// }

// Rimuru.setRace = function (race) {
//     this.race = race;
// }

// Rimuru.setColor = function (color) {
//     this.color = color;
// }


// function main() {
//     student = new Students("Sirius", "Taurus", 2000, "Magic Highschool", "Engeneering", "Freshman");
//     console.log(student.details());

//     student.setFirstName("Shiba");
//     student.setLastName("Tatsuya");

//     console.log(student.details());

//     console.log(Rimuru.details());

//     Rimuru.setRace("Human");
//     Rimuru.setColor("Pale blue");

//     console.log(Rimuru.details());

// }

// console.log(main());

// const lucas = {
//     firstName: "Rimuru",
//     lastName: "Tempest",
//     race: "Slime",
//     color: "Blue",

//     getRace: function () {
//         return this.race;
//     },

//     getColor: function () {
//         return this.color;
//     },

//     details: function () {
//         return `Entity Info:
//                 First name  : ${this.firstName}
//                 Last name   : ${this.lastName}
//                 Race        : ${this.race}
//                 Color       : ${this.color}`
//     }
// }

// console.log(document.querySelector("p").textContent);

// document.querySelector("p").textContent = "Used js to modify the previous text";

// document.querySelector(".btn").addEventListener( "click", function () {
//     const userInput = Number(document.querySelector(".userInput").value);
//     document.querySelector(".output").textContent = `${document.querySelector(".output").textContent} ${userInput}`;
// })

console.log(Math.trunc(Math.random()*100));




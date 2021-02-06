// Part A

const sirius = {
    firstName: "Sirius",
    lastName: "Taurus",
    birthYear: 2004,
    job: "Student",
    friends: ["Erika", "Leonhart", "Mizuki", "Mikihiko"],

    getAge: function () {
        return 2021 - this.birthYear;
    },

    getColor: function () {
        return this.color;
    },

    details: function () {
        return `${this.firstName} has ${this.friends.length} friends, and ${this.friends[1]} is his best friends.`;
    }
}

console.log(sirius.details());

// Part B

sirius.getSummary = function () {
    return `${this.firstName} is ${this.getAge()} year(s) old, and he has ${(this.getAge() >= 18) ? "a" : "no"} driver license.`;
}

console.log(sirius.getSummary());


// Part C

document.getElementById("btn1").addEventListener("click", function on() {
    document.getElementById("modal1").style.display = "block";
});

document.getElementById("btn2").addEventListener("click", function on() {
    document.getElementById("modal2").style.display = "block";
});

document.getElementById("btn3").addEventListener("click", function on() {
    document.getElementById("modal3").style.display = "block";
});


document.getElementById("close1").addEventListener("click", function off() {
    document.getElementById("modal1").style.display = "none";
});

document.getElementById("close2").addEventListener("click", function off() {
    document.getElementById("modal2").style.display = "none";
});

document.getElementById("close3").addEventListener("click", function off() {
    document.getElementById("modal3").style.display = "none";
});

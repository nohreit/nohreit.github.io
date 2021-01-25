const sirius = {
    firstName: "Sirius",
    lastName: "Taurus",
    birthYear: "2004",
    job: "Student",
    friends: ["Erika", "Leonhart", "Mizuki", "Mikihiko"],

    getAge: function () {
        return this.birthYear - 2021;
    },

    getColor: function () {
        return this.color;
    },

    details: function () {
        return `${this.firstName} has ${this.friends.length} friends, and ${this.friends[1]} is his best friends.`;
    }
}

console.log(sirius.details());

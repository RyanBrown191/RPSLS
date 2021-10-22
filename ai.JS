const Player = require("./player");

class AI extends Player {
    constructor(name) {
        super(name);
        this.score = 0;
    }
}

// generateRandomNumber(max); {
//     let randomNumber = Math.floor(Math.random() * max); Random number generation for gesture choices

module.exports = AI;
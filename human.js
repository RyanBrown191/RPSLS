const Player = require ("./player");

class Human extends Player {
    constructor(name) {
        super(name);
        this.score = 0;
    }
}

module.exports = Human;
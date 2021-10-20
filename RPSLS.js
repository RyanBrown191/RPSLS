"use strict";

class Game {
    constructor() {
        this.playerOne = new Player(" ");
        this.playerTwo = new Player(" ");

        this.gameGestures = [];

    }
    playerInfo() {
        
        let playerOneInfo = prompt("What is your name?");
        this.playerOne = new Human(playerOneInfo);
        let playerTwoInfo = prompt("Would you like to play against another person or an AI? Enter Person or AI");
        if (playerTwoInfo.toLowerCase() === "person") {
            let playerTwoInfo = promptFor("What is the other persons name?");
            this.playerTwo = new Human(playerTwoInfo);
        }
        else if (playerTwoInfo.toLowerCase() === "ai"){
            this.playerTwo = new AI();
            alert("You have chosen to play against an AI.");
        }
        else {
            alert("Invalid selection. Try Again");
        }
        }
    }
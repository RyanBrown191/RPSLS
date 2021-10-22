"use strict";
const prompt = require("prompt-sync")()


class Game {
    constructor() {
        this.playerOne = new Player(" ");
        this.playerTwo = new Player(" ");
    }

    runGame(){
        this.playerInfo();
        while (this.playerOne.score < 3 && this.playerTwo.score < 3){
            this.chooseGesture();
            this.winningGestures();

        }
    }


    playerInfo() {
        
        let playerOneInfo = prompt("What is your name?");
        this.playerOne = new Human(playerOneInfo);
        let playerTwoInfo = prompt("Would you like to play against another person or an AI? Enter Person or AI");
        if (playerTwoInfo.toLowerCase() === "person") {
            let playerTwoInfo = prompt("What is the other persons name?");
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
    winningGestures() ;{
        if(this.playerOne.chosenGesture === this.playerTwo.chosenGesture){
            alert("It is a tie");
        }
       else{
        switch (this.playerOne.chosenGesture) {
            case "Rock":
                if(this.playerTwo.chosenGesture === "Scissors"){
                    this.playerOne.score++
                    alert("Rock crushes scissors");
                }
                else if(this.playerTwo.chosenGesture === "Lizard"){
                    this.playerOne.score++
                    alert("Rock crushes Lizard");
                }
                else{
                    this.playerTwo.score++
                    alert("Player Two wins this round");
                }
                break;
            case "Paper":
                if(this.playerTwo.chosenGesture === "Rock"){
                    this.playerOne.score++;
                    alert("Paper covers Rock");
                }
                else if(this.playerTwo.chosenGesture === "Scissors"){
                    this.playerOne.score++
                    alert("Scissors cuts Paper");
                }
                else{
                    this.playerTwo.score++;
                    alert("Player Two wins this round");
                }
                break;
            case "Scissors":
                if(this.playerTwo.chosenGesture === "Paper"){
                    this.playerOne.score++;
                    alert("Scissors cuts Paper");
                }
                else if(this.playerTwo.chosenGesture === "Lizard"){
                    this.playerOne.score++;
                    alert("Scissors decapitates Lizard");
                }
                else {
                this.playerTwo.score++;
                    alert("Player Two wins this round");
                }
                break;
            case "Lizard":
                if(this.playerTwo.chosenGesture === "Spock"){
                    this.playerOne.score++;
                    alert("Lizard poisons Spock");
                }
                else if(this.playerTwo.chosenGesture === "Paper"){
                    this.playerOne.score++;
                    alert("Lizard eats Paper");
                }
                else{
                    this.playerTwo.score++;
                    alert("Player Two wins this round");
                }
                break;
            case "Spock":
                if(this.playerTwo.chosenGesture === "Rock"){
                    this.playerOne.score++;
                    alert("Spock vaporizes Rock");
                }
                else if(this.playerTwo.chosenGesture === "Scissors"){
                    this.playerOne.score++;
                    alert("Spock smashes Scissors");
                }
                else{
                    this.playerTwo.score++;
                    alert("Player Two wins this round");
                }
                break;
                default:
                break;
        }
    }
    }
    chooseGesture(); {     
        let humanPlayerGesture = prompt("Type 1 for Rock, 2 for Paper, 3 for Scissors, 4 for Lizard and 5 for Spock.");
        switch(humanPlayerGesture){
            case "1":
                this.chosenGesture = this.gameGestures[0];
                break;
            case "2":
                this.chosenGesture = this.gameGestures[1];
                break;
            case "3":
                this.chosenGesture = this.gameGestures[2];
                break;
            case "4":
                this.chosenGesture = this.gameGestures[3];
                break;
            case "5": 
             this.chosenGesture = this.gameGestures[4];
                break;
            default:
                this.chooseGesture();
                break;
        }    
    }
module.exports = Game;
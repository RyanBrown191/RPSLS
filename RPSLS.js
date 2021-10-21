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
    compareGestures() ;{
        let gameGestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

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
    runGame(); {
        this.playerInfo();
        this.displayMessage();
        do {this.playerOne.chooseGesture(); 
            this.playerTwo.chooseGesture();
            this.compareGestures();
        }
        while (this.displayGameWinner());        
    }
    displayGameWinner(); {
        if (this.playerOne.score > this.playerTwo.score) {
            alert(this.playerOne.name + " wins this game!");
        }
        else if (this.playerTwo.score > this.playerOne.score){
            console.log(this.playerTwo.name + " wins this game!");
        }
    }
    class Player {
        constructor(name) {
            this.gameGestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
            this.score = 0;
            this.name = name;
            this.chosenGesture;
        }
    }
    class Human extends Player {
        constructor(name) {
            super(name);
            this.score = 0;
        }
    }
    class AI extends Player {
        constructor(name) {
            super(name);
            this.score = 0;
        }
    }

    //figure out gesture array for choices
    // AI random selection generator of AI
    //Clean up prompts
    
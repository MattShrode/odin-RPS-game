/* Javascript */

//Begin match

playGame();

function playGame() {

     console.log(welcome());

     let computerChoice = computerPlay();
     console.log(computerChoice);

}

//Greet user

function welcome() {

    return "Let's Play Rock Paper Scissors! I'll make my selection; go ahead and make yours!";

}

//Make a choice for the computer

function computerPlay() {

    let choice = generateRandomInt(1,3);
    switch (choice) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;        
    }

}

//Generate a random number for the computer's choice

function generateRandomInt(min,max) {

    return Math.floor(min + Math.random() * (max - min +1));

}

//Ask the user for their choice

//Comapre the user's choice to the computer's choice

//Display the winner

//Incrememnt the score counter

//Begin next round
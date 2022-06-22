/* Javascript */

//Begin match

playGame();

function playGame() {

     console.log(welcome());

     let computerChoice = computerPlay();

     let userChoice = userPlay();
     console.log(userChoice);
     

}

//Greet user

function welcome() {

    return "Let's Play Rock Paper Scissors! I've made my selection." ;

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

function userPlay() {

    let acceptable = false;

    let choice = prompt("Make your selection!");
    acceptable = inputChecker(choice);

    while(!acceptable) {
        choice = prompt("That is not a valid selection. Please choose rock, paper, or scissors.");
        acceptable = inputChecker(choice);
    }
    return choice;
}

//Validate user's input

function inputChecker(string) {

    let stringCheck = string.toLowerCase();
    
        if (stringCheck === "rock" || stringCheck === "paper" || stringCheck === "scissors" || stringCheck === "scissor") {
            return true;
        } else
            return false;
}

//Comapre the user's choice to the computer's choice

//Display the winner

//Incrememnt the score counter

//Begin next round
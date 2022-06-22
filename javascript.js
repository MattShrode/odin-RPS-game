/* Javascript */

//Begin match

playGame();

function playGame() {

     console.log(welcome());

     let computerChoice = computerPlay();

     let userChoice = userPlay();

     let result = playRound(userChoice, computerChoice);

     display(userChoice, computerChoice, result);
     
}

//Greet user

function welcome() {

    return "Let's Play Rock Paper Scissors! I've already made my selection." ;
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

    let check = string.toLowerCase();
    
        if (check === "rock" || check === "paper" || check === "scissors") {
            return true;
        } else
            return false;
}

//Compare the user's choice to the computer's choice

function playRound(userChoice, computerChoice) {

    switch (userChoice.toLowerCase()) {
        case "rock":
            if (computerChoice.toLowerCase() === "rock") {
                return "draw";
            } else if (computerChoice.toLowerCase() === "paper") {
                return "playerLose";
            } else
                return "playerWin";
            break;
        case "paper":
            if (computerChoice.toLowerCase() === "paper") {
                return "draw";
            } else if (computerChoice.toLowerCase() === "scissors") {
                return "playerLose";
            } else
                return "playerWin";
            break;
        case "scissors":
            if (computerChoice.toLowerCase() === "scissors") {
                return "draw";
            } else if (computerChoice.toLowerCase() === "rock") {
                return "playerLose";
            } else
                return "playerWin";
            break;
    }
}

//Display the winner

function display(userChoice, computerChoice, result) {

    console.log(`I chose ${computerChoice} and you chose ${userChoice}.`);

    if (result === "draw") {
        console.log("It's a draw!");
    }else if (result === "playerWin") {
        console.log(`${userChoice} beats ${computerChoice}! You win!`);
    }else
        console.log(`${computerChoice} beats ${userChoice}! I win!`)
}

//Increment the score counter

//Begin next round
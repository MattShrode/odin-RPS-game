/* Javascript */

// Inititalize Score Variables

let playerScore = 0;
let computerScore = 0;
let ties = 0;

//Begin match

//playGame();

function playGame() {

    /*for (let i = 0; i < 5; i++) {
     
     if (i == 0) {
        console.log(welcome());
     } else if (i != 0) {
        console.log(again());
     }*/

     let computerChoice = computerPlay();

     let userChoice = userPlay();

     let result = playRound(userChoice, computerChoice);

     score(result);

     displayWinner(userChoice, computerChoice, result);

     displayScore();

     if (i == 4) {
        console.log(bye());
     }
    //}

}

const userChoice = document.querySelectorAll('#button');

userChoice.forEach(button => button.addEventListener('click', userPlay));


//Greet user

function welcome() {

    return "Let's Play Rock Paper Scissors! I've already made my selection.";
}

//Repeating the game

function again() {
    return "Next round! I've made my selection.";
}

//Ending the game

function bye() {
    return "Thanks for playing!";
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

    /*let acceptable = false;

    let choice = prompt("Make your selection!");
    acceptable = inputChecker(choice);

    while(!acceptable) {
        choice = prompt("That is not a valid selection. Please choose rock, paper, or scissors.");
        acceptable = inputChecker(choice);
    }
    return choice;*/

    console.log(this);
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

    if (userChoice.toLowerCase() === computerChoice.toLowerCase()) {
        return "draw";
    } else {
        switch (userChoice.toLowerCase()) {
            case "rock":
                if (computerChoice.toLowerCase() === "paper") {
                    return "playerLose";
                } else
                    return "playerWin";
                break;
            case "paper":
                if (computerChoice.toLowerCase() === "scissors") {
                    return "playerLose";
                } else
                    return "playerWin";
                break;
            case "scissors":
                if (computerChoice.toLowerCase() === "rock") {
                    return "playerLose";
                } else
                    return "playerWin";
                break;
        }
    }
    
}

//Display the winner

function displayWinner(userChoice, computerChoice, result) {

    console.log(`I chose ${computerChoice} and you chose ${userChoice}.`);

    if (result === "draw") {
        console.log("It's a draw!");
    }else if (result === "playerWin") {
        console.log(`${userChoice} beats ${computerChoice}! You win!`);
    }else
        console.log(`${computerChoice} beats ${userChoice}! I win!`)
}

//Increment the score counter

function score(result) {

    switch (result) {
        case "playerWin":
            ++playerScore;
            break;
        case "playerLose":
            ++computerScore;
            break;
        case "draw":
            ++ties;
            break;
    }
}

//Display Score

function displayScore() {

    console.log(`Player Wins: ${playerScore} \nComputer Wins: ${computerScore} \nTies: ${ties}`);

}
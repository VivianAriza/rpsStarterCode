// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
var array ["rock","paper","scissors" ];
var genRandom = function(limit) {
    var number = Math.round(Math.random()*limit);
    return number;
};


    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2.
var randomNum= Math.round(Math.random(*2)

    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[ranomNum]
   return array[randomNum];
  
    // Task 1, Step 4: return this new value
};
// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.Arra

       if (computerChoice == "ROCK") {
           outcome = DRAW!;
       }
       else if (computerChoice == "PAPER") {
           outcome = COMPUTER WIN!;
       }
       else {
           outcome = User Wins!;
       }
    }
    else if (userChoice == "PAPER" {
       if (computerChoice == "ROCK") {
           outcome = USER WINS!;
       }
       else if (computerChoice == "PAPER") {
           outcome = DRAW!;
       }
       else {
           outcome = COMPUTER WINS!;
       }
    }
    else {
       if (computerChoice == "ROCK") {
           outcome = DRAW!;
       }
       else if (computerChoice == "PAPER") {
           outcome = USER WINS!;
       }
       else {
           outcome = DRAW!;
       }

var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
var generateComputerChoice = function () {
    var number = genRandom(2);
    var choice = VALID_CHOICES[number];
    return choice;
};

 }
}
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    var userChoice = "rock";
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create a click handler that changes the
    // value based on the item the user clicks on the HTML page.

    // This line callss the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    pickWinner(userChoice, computerChoice);
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    var outcome = '';
    
});

var handleUserClick = function(userChoice){
    // generate the computer choice
    var computerChoice = generateComputerChoice();
    
    // pick a winner
    var outcome = pickWinner(userChoice, computerChoice);
    
    // set the html element text for the computer choice and the outcome
    $('#computer-choice').text('The computer picked ' + computerChoice);
    $('#winner').text('Outcome: ' + outcome);
};
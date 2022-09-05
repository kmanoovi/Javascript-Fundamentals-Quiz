var timeEl = document.querySelector (".time");
var mainEl = document.getElementById("main");
var secondsLeft = 180;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            secondMessage();
        }
    }, 1000);
}


// addButton.addEventListener("click", function() {
//     if ();
// }
// );
function generateQuiz() {
var questionOne = window.prompt("Javascript is a dynamic scripting language that enhances the user experience. Yes or No.");
var questionTwo = window.prompt("You DO NOT use console logs to help explore your code. Yes or No.");
var questionThree = window.prompt("An array is a variable with a list of values. Yes or No.");
var questionFour = window.prompt("A 'for loop' executes a block of code so long as the condition of the statement is true. Yes or No.");
var questionFive = window.prompt("The 'this' keyword is not confusing at all. Yes or No.");

// For Loops //

}
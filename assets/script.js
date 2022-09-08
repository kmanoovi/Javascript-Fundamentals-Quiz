var timeEl = document.querySelector (".time");
var mainEl = document.getElementById("main");
var secondsLeft = 5;
var startBtn = document.getElementById("start");
var saveBtn = document.getElementById("save");
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

var questionsArray = [
    {
        question: "Javascript is a dynamic scripting language that enhances the user experience. Yes or No.",
        options: [
            "Yes",
            "No",
            "Maybe?",
            "Definitely no"
        ],
        correct: "Maybe?"
    },
    {
        question: "You DO NOT use console logs to help explore your code. Yes or No.",
        options: [
            "Yes",
            "No",
            "Maybe?",
            "Definitely noooo"
        ],
        correct: "Yes"
    },
    {
        question: "An array is a variable with a list of values. Yes or No.",
        options: [
            "Yes",
            "No",
            "Maybe?",
            "Definitely noooo"
        ],
        correct: "Yes"
    },
    {
        question: "A 'for loop' executes a block of code so long as the condition of the statement is true. Yes or No.",
        options: [
            "Yes",
            "No",
            "Maybe?",
            "Definitely noooo"
        ],
        correct: "Yes"
    },
    {
        question: "The 'this' keyword is not confusing at all. Yes or No.",
        options: [
            "Yes",
            "No",
            "Maybe?",
            "Definitely noooo"
        ],
        correct: "Yes"
    },
];
var currentQuestion = 0;

function generateQuiz() {
    console.log('inside generateQuiz function');

    var questionEl = document.createElement('h2');
    questionEl.textContent = questionsArray[currentQuestion].question;
    mainEl.appendChild(questionEl);
    for(let i = 0; i < 4; i++) {
        var btn = document.createElement('button');
        btn.textContent = questionsArray[currentQuestion].options[i];
        btn.setAttribute('class', 'option-styling');
        mainEl.appendChild(btn);
    }
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time is up!";
}

function saveInitials(){
    localStorage.setItem("initials", initials);
}

function saveLastScore(){
    localStorage.setItem("score", score);
}

function gradeUserSelection(e) {
    let thingThatWasClicked = e.target;
    if(thingThatWasClicked.matches('button')) {
        console.log(thingThatWasClicked);
        var userSelection = thingThatWasClicked.textContent;
        console.log(userSelection);
        if(userSelection == questionsArray[currentQuestion].correct) {
            console.log('You selected correctly.');
            // write code here to move on to the next question....
            // maybe update currentQuestion variable?
            // maybe clear out mainEl?
            // maybe create more buttons, style them, etc.
            // and add them to mainEl again
        } else {

        }
    }
}

function beginTimer() {
    var Interval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 'second(s) remaining';
        if(secondsLeft <= 0) {
            secondsLeft = 0;
            clearInterval(Interval);
            timeEl.textContent = "Times up! Your score is " + secondsLeft;
            // run some code to display an input field, a submit button, etc
            // so the user can save their score to local storage.
        }
    }, 1000)
}

saveBtn.addEventListener("click", function(event) {
event.preventDefault();
saveInitials();
saveLastScore();
});


startBtn.addEventListener("click", generateQuiz);
startBtn.addEventListener("click", beginTimer);
mainEl.addEventListener("click", function(e) {
    console.log('You clicked somewhere in the main element');
    // run som other code here...
    gradeUserSelection(e);
})

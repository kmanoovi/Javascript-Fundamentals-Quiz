var timeEl = document.querySelector (".time");
var mainEl = document.getElementById("main");
var secondsLeft = 180;
var startBtn = document.getElementById("start");
var saveBtn = document.getElementById("save");
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");
var message = "Click to start quiz!";
var questionsArray = [
    {
        question: "What is Javascript?",
        options: [
            "A type of coffee.",
            "A way to enhance your css code.",
            "A dynamic scripting language.",
            "All the above."
        ],
        correct: "A dynamic scripting language.?"
    },
    {
        question: "You DO NOT use console logs to help explore your code. Yes or No.",
        options: [
            "They help the developer explore their code.",
            "It is not used in web development.",
            "They are used only for CSS and HTML.",
            "None of the above."
        ],
        correct: "They help the developer explore their code."
    },
    {
        question: "An array is a variable with a list of values.",
        options: [
            "Yes.",
            "No.",
            "Sort of.",
            "Definitely no."
        ],
        correct: "Yes."
    },
    {
        question: "A 'for loop' . Yes or No.",
        options: [
            "A type of dance style.",
            "A technique used to enhance HTML.",
            "It executes a block of code so long as the condition of the statement is true.",
            "All the above."
        ],
        correct: "It executes a block of code so long as the condition of the statement is true."
    },
    {
        question: "The 'this' keyword is not confusing at all.",
        options: [
            "Yes.",
            "No.",
            "Maybe?",
            "Definitely."
        ],
        correct: "Yes"
    },
];
var currentQuestion = [0];

function generateQuiz() {
    console.log('inside generateQuiz function');
    var questionEl = document.createElement('start-quiz');
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

function gradeUserSelection(event) {
    let btnClicked = event.target;
    if(btnClicked.matches('button')) {
        console.log(btnClicked);
        var userSelection = btnClicked.textContent;
        console.log(userSelection);
        if(userSelection == questionsArray[currentQuestion].correct) {
            console.log('You selected correctly.');
        } else { (userSelection !== questionsArray[currentQuestion].correct)
            console.log('You selected incorrectly.');
            document.setTime.addEventListener('click', function()
            {sec-=5});
            startTimer();
            loseTime.sendMessage('Wrong!');
        }
    }
    var nextBtn = document.getElementById("next")(function() {
        mainEl.textContent = nextBtn + ("Click to move on to next question!");
        append.nextBtn(mainEl);
    })
}

function beginTimer() {
    var Interval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 'second(s) remaining';
        if(secondsLeft <= 0) {
            secondsLeft = 0;
            clearInterval(Interval);
            timeEl.textContent = "Times up! Your score is " + secondsLeft;
            sendMessage("Your score is " + score);
            var saveInitials = initials;
            saveInitials.localStorage.setItem("initials", initials);
            document.getElementById("save").value = "Submit Initials";
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
mainEl.addEventListener("click", function(event) {
    console.log('You clicked somewhere in the main element');
    gradeUserSelection(event);
})

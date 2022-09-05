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
//     if (count < )
// })
var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var timeLeft = 75
var questionsContainer = document.getElementById("questions-container")

// there's a question, an array of choices, and an answer that index into the the array of choices.
var quizItems = [
    { "question": "Commonly used data types do NOT include:", "choices": ["strings", "booleans", "alerts", "numbers"], "answer": 2 },
    { "question": "The flight of unladen swallow is:", "choices": ["0 mph", "1_000_000 mph", "Swallows can't fly", "45 mph, maybe"], "answer": 3 }
]
// get the question buttons so you can replace them with the question text
var quizChoiceButtons = document.querySelectorAll(".choice")

function startGame() {
    // get the number of quizItems in total
    const totalNumOfQuizItems = quizItems.length
    console.log({ numOfQuestions: totalNumOfQuizItems })
    var gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft--;
        if (!timeLeft) {
            clearInterval(gameInterval);
            window.location.href = "highscore.html";
        }
    }, 1000);
}
renderQuestions(0)
function renderQuestions(questionIndex, totalChoices) {
    const numOfChoices = quizItems[questionIndex].choices.length
    for (let index = 0; index < numOfChoices; index++) {
        quizChoiceButtons[index].innerHTML = quizItems[questionIndex].choices[index]
    }
    questionsContainer.style.setProperty("display", "inline-block")

}

if (startButton)
    startButton.addEventListener("click", startGame);


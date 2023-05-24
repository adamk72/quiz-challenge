var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var startingTime = 75
var timeLeft = startingTime
var wrongAnswerPenalty = 10
var currentQuestionIndex = 0
var currentAnswer = ""
var questionsContainer = document.getElementById("questions-container")
var finalScoreContainer = document.getElementById("final-score-container")
var beforeStartContainer = document.getElementById("before-start")
var answerResultElement = document.getElementById("answer-result")
var gameInterval

// there's a question, an array of choices, and an answer that we'll store globally to check against (there are better ways to do this).
var quizItems = [
    { "question": "Commonly used data types do NOT include:", "choices": ["strings", "booleans", "alerts", "numbers"], "answer": "alerts" },
    { "question": "The flight of unladen swallow is:", "choices": ["0 mph", "1_000_000 mph", "Swallows can't fly", "45 mph, maybe"], "answer": "45 mph, maybe" }
]
// get the question buttons so you can replace them with the question text
var quizChoiceButtons = document.querySelectorAll(".choice")

function initializeGameState() {
    clearInterval(gameInterval);
    timeLeft = startingTime;
    beforeStartContainer.style.setProperty("display", "block")
    questionsContainer.style.setProperty("display", "none")
    finalScoreContainer.style.setProperty("display", "none")
    currentQuestionIndex = 0
    currentAnswer = ""

}
function startGame() {
    initializeGameState()
    beforeStartContainer.style.setProperty("display", "none")
    renderQuestions(currentQuestionIndex)
    gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft--;
        if (!timeLeft) {
            renderFinalAnswer();
        }
    }, 1000);
}
function renderFinalAnswer(params) {
    clearInterval(gameInterval);

    questionsContainer.style.setProperty("display", "none")
    finalScoreContainer.style.setProperty("display", "inline-block")
    finalScore = document.getElementById("final-score")
    finalScore.innerHTML = timeLeft;
}
function checkAnswer(event) {
    answerResultElement.innerHTML = "Correct!"
    if (event.target.innerHTML != currentAnswer) {
        timeLeft -= wrongAnswerPenalty
        answerResultElement.innerHTML = "Wrong!"
    }
    answerResultElement.style.setProperty("display", "inline")

    // length is a counting number, so have to subtract 1.
    if (currentQuestionIndex < quizItems.length - 1) {
        currentQuestionIndex++
        renderQuestions(currentQuestionIndex)
    } else {
        renderFinalAnswer();
    }
}
function renderQuestions(questionIndex) {
    const numOfChoices = quizItems[questionIndex].choices.length
    for (let index = 0; index < numOfChoices; index++) {
        quizChoiceButtons[index].innerHTML = quizItems[questionIndex].choices[index]
        quizChoiceButtons[index].addEventListener("click", checkAnswer)
    }
    questionsContainer.style.setProperty("display", "inline-block")
    currentAnswer = quizItems[questionIndex].answer
}

if (startButton)
    startButton.addEventListener("click", startGame);


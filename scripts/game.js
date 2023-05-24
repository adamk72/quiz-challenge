var startButton = document.getElementById("start-button");
var timerSpan = document.getElementById("time-left");
var timeLeft = 75
var questionsContainer = document.getElementById("questions-container")
var currentQuestionIndex = 0
var currentAnswer = ""
var answerResultElement = document.getElementById("answer-result")

// there's a question, an array of choices, and an answer that we'll store globally to check against (there are better ways to do this).
var quizItems = [
    { "question": "Commonly used data types do NOT include:", "choices": ["strings", "booleans", "alerts", "numbers"], "answer": "alerts" },
    { "question": "The flight of unladen swallow is:", "choices": ["0 mph", "1_000_000 mph", "Swallows can't fly", "45 mph, maybe"], "answer": "45 mph, maybe" }
]
// get the question buttons so you can replace them with the question text
var quizChoiceButtons = document.querySelectorAll(".choice")

function startGame() {
    // get the number of quizItems in total
    const totalNumOfQuizItems = quizItems.length
    renderQuestions(currentQuestionIndex)
    var gameInterval = setInterval(() => {
        timerSpan.textContent = timeLeft--;
        if (!timeLeft) {
            clearInterval(gameInterval);
            window.location.href = "highscore.html";
        }
    }, 1000);
}
function checkAnswer(event) {
    answerResultElement.innerHTML = "Wrong!"
    if (event.target.innerHTML === currentAnswer) {
        answerResultElement.innerHTML = "Correct!"
    }
    answerResultElement.style.setProperty("display", "inline")

    // length is a counting number, so have to subtract 1.
    if (currentQuestionIndex < quizItems.length - 1) {
        currentQuestionIndex++
        renderQuestions(currentQuestionIndex)
    } else {
        questionsContainer.style.setProperty("display", "none") 
    }
    console.log(currentQuestionIndex, quizItems.length)
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


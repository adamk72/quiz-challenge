var clearHighScoresButton = document.getElementById("clear")
if (clearHighScoresButton)
  clearHighScoresButton.addEventListener("click", clearHighScores)

function clearHighScores(event) {
  event.preventDefault();
  localStorage.removeItem("playerScores");
  window.location.href = "/"
}
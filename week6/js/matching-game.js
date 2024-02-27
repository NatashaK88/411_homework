// matching-game.js
document.write('<script src="js/script.js"></script>');
// Retrieve user information from local storage
var userDataString = localStorage.getItem("userData");
var userData = userDataString ? JSON.parse(userDataString) : {};

// Assume this function is called when a card is successfully matched
function cardMatched() {
    // Your existing logic for handling a matched pair...

    // Check if the player wants to end the game
    endGame();
}

// Assume this function checks whether all pairs have been matched
function allPairsMatched() {
    // Your logic to determine if all pairs are matched (return true if the game is completed)
    // Example: return true if all cards are flipped and matched
}

// Assume this function is called when the player clicks the "End Game" button
function endGame() {
    // Your existing logic

    // Update attempts counter
    userData.attempts++; // Increment attempts for finishing the game
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log(userData);

    // Redirect to the final page
    window.location.href = "final-page.html";
}

// Add an event listener for the "End Game" button
document.addEventListener("DOMContentLoaded", function () {
    var endGameButton = document.getElementById("end-game-button");

    if (endGameButton) {
        endGameButton.addEventListener("click", endGame);
    }

    // Your matching game logic here...

    // Example: Increment attempts counter
    userData.attempts++;
    localStorage.setItem("userData", JSON.stringify(userData));
});

// Ensure the images are loaded before initializing the game
window.onload = printBlanks;

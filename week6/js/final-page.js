function displayPlayerInfo() {
  

    // Retrieve user information from local storage
    var userDataString = localStorage.getItem("userData");
    var userData = userDataString ? JSON.parse(userDataString) : {};

    // Display player information on the final page
    var playerNameElement = document.getElementById("player-name");
    var playerAgeElement = document.getElementById("player-age");
    var attemptsElement = document.getElementById("attempts");

    console.log("final-page.js: Player Name Element:", playerNameElement);
    console.log("final-page.js: Player Age Element:", playerAgeElement);
    console.log("final-page.js: Attempts Element:", attemptsElement);

    if (playerNameElement && playerAgeElement && attemptsElement) {
        // Update the content only if the elements are found
        var playerName = (userData.firstName || "") + " " + (userData.lastName || "");
        playerNameElement.innerHTML = "Player Name: " + (playerName.trim() || "Unknown");
        playerAgeElement.innerHTML = "Player Age: " + (userData.age || "Unknown");
        attemptsElement.innerHTML = "Attempts: " + (userData.attempts || 0);

        console.log("final-page.js: User Data:", userData);
    } else {
        console.error("final-page.js: One or more elements not found.");
    }
}

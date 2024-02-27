document.addEventListener("DOMContentLoaded", function () {
    console.log("user-info.js: Document structure:", document);

    // Retrieve user information from local storage
    var userDataString = localStorage.getItem("userData");
    var userData = userDataString ? JSON.parse(userDataString) : {};
console.log(userData);
    console.log("user-info.js: Retrieved User Data:", userData);  // Add this line to check the retrieved data

    // Display player information on the user info page
    displayPlayerInfo(userData);
});

function displayPlayerInfo(userData) {
    console.log("user-info.js: Display Player Info function is called.");

    // Display player information on the user info page
    var playerNameElement = document.getElementById("player-name");
    var playerAgeElement = document.getElementById("player-age");
    var attemptsElement = document.getElementById("attempts");

    console.log("user-info.js: Player Name Element:", playerNameElement);
    console.log("user-info.js: Player Age Element:", playerAgeElement);
    console.log("user-info.js: Attempts Element:", attemptsElement);

    if (playerNameElement && playerAgeElement && attemptsElement) {
        // Update the content only if the elements are found
        playerNameElement.textContent = "Player Name: " + (userData.firstName || "") + " " + (userData.lastName || "");
        playerAgeElement.textContent = "Player Age: " + (userData.age || "");
        attemptsElement.textContent = "Attempts: " + (userData.attempts || 0);

        console.log("user-info.js: User Data:", userData);
    } else {
        console.error("user-info.js: One or more elements not found.");
    }
}

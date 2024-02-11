let outcomeElement;
let adventureInProgress = false;
let choiceCounter = 0;

function startAdventure() {
    const ready = confirm("Are you ready to go on an adventure?");
    if (ready) {
        adventureInProgress = true;
        continueAdventure();
    } else {
        alert("Maybe next time!");
    }
}

function continueAdventure() {
    outcomeElement.innerHTML = `
        <p>You decide to take your giant Great Dane for a walk. You come to the end of the apartment parking lot and are left with three choices.</p>
        <button onclick="makeChoice(1)">Go Left</button>
        <button onclick="makeChoice(2)">Go Right</button>
        <button onclick="makeChoice(3)">Go Forward</button>
        <button onclick="makeChoice(4)">Go Home</button>
        <button onclick="makeChoice(5)">Go Backwards</button>
        <button onclick="stopAdventure()">Stop Adventure</button>
    `;
}

function makeChoice(choice) {
    if (!adventureInProgress) {
        return;
    }

    choiceCounter++; // Increment the choice counter

    let outcome = "";
    let imageSource = "";

    if (choice === 1) {
        outcome = "You come to a chest of cursed chest of gold with a pirate skeleton guarding it.";
        imageSource = "images/treasure.jpg";
    } else if (choice === 2) {
        outcome = "You come to a river full of Hippo's";
        imageSource = "images/hippo.jpg";
    } else if (choice === 3) {
        outcome = "You come to a drop in the road that goes down forever.";
        imageSource = "images/crack.jpg";
    } else if (choice === 4) {
        outcome = "You go home and give your dog a treat.";
        imageSource = "images/nyx.jpg";
    } else if (choice === 5) {
        outcome = "You and your dog lay in the grass and watch the clouds";
        imageSource = "images/clouds.jpg";
    }

    updateOutcome(outcome, imageSource);
}

function updateOutcome(outcome, imageSource) {
    let outcomeText = document.createElement("p");
    outcomeText.innerHTML = outcome;
    outcomeElement.appendChild(outcomeText);

    if (imageSource) {
        let imageElement = document.createElement("img");
        imageElement.src = imageSource;
        imageElement.alt = "Choice Image";
        imageElement.className = "choice-image";
        outcomeElement.appendChild(imageElement);
    }

    // Display the choice counter
    let counterText = document.createElement("p");
    counterText.innerHTML = `Number of Choices: ${choiceCounter}`;
    outcomeElement.appendChild(counterText);
}

function stopAdventure() {
    adventureInProgress = false;
    outcomeElement.innerHTML = `<p>Adventure stopped. You made ${choiceCounter} choices. Come back next time!</p>`;
}

document.addEventListener("DOMContentLoaded", function () {
    outcomeElement = document.getElementById("outcome");
    startAdventure();
});

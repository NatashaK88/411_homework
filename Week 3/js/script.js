let outcomeElement = document.getElementById("outcome");

function makeChoice(choice) {
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
    }

    updateOutcome(outcome, imageSource);
}

function updateOutcome(outcome, imageSource) {
    outcomeElement.innerHTML = `<p>${outcome}</p>`;


    let imageElement = document.createElement("img");
    imageElement.src = imageSource;
    imageElement.alt = "Choice Image";
    imageElement.className = "choice-image";
    outcomeElement.appendChild(imageElement);
}

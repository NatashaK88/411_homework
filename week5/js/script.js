var imageTags = ["image0", "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11"];
var blankImagePath = "images/blank.jpg";
var actualImages = [];
var flippedCards = [];
var flippedCardCount = 0;

function printBlanks() {
  createRandomImageArray();
  for (var i = 0; i < imageTags.length; i++) {
    var card = document.getElementById(imageTags[i]);
    card.src = blankImagePath;
    card.dataset.index = i;
    card.addEventListener("click", flipImage);
  }
}

function createRandomImageArray() {
  var actualImagePath = [
    "images/bruce3.jpg", "images/bruce4.jpg",
    "images/nyx3.jpg", "images/nyx4.jpg",
    "images/buffy3.jpg", "images/buffy4.jpg"
  ];
  var count = [0, 0, 0, 0, 0, 0];

  while (actualImages.length < 12) {
    var randomNumber = Math.floor(Math.random() * actualImagePath.length);

    if (count[randomNumber] < 2) {
      actualImages.push(actualImagePath[randomNumber]);
      count[randomNumber]++;
    }
  }
}

function checkForMatch() {
  if (flippedCards.length === 2) {
    var card1Index = flippedCards[0].dataset.index;
    var card2Index = flippedCards[1].dataset.index;

    if (actualImages[card1Index] === actualImages[card2Index]) {
      // It's a match!
      alert("Match!");

      // Reset flipped cards
      flippedCards = [];
      flippedCardCount = 0;
    } else {
      // Not a match, flip the cards back
      setTimeout(function () {
        flippedCards[0].src = blankImagePath;
        flippedCards[1].src = blankImagePath;

        // Reset flipped cards after flipping back
        flippedCards = [];
        flippedCardCount = 0;
      }, 1000);
    }
  }
}

function flipImage() {
  if (flippedCards.length < 2) {
    var card = this;
    var cardIndex = card.dataset.index;
    card.src = actualImages[cardIndex];
    flippedCards.push(card);
    flippedCardCount++;

    if (flippedCardCount === 2) {
      setTimeout(checkForMatch, 1000);
    }
  }
}

// Ensure the images are loaded before initializing the game
window.onload = printBlanks;

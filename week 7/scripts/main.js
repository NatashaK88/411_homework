// let's create an empty array. We will add to this later
var myViewFinderArray = [];

// this is the main ViewFinder class
class ViewFinder {
    // the constructor requires the title, image, description, author, and image year
    constructor(title, image, description, author, imageYear) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }

    // this function returns a string representation of the object including an HTML image tag
    toString() {
        console.log(`Image Path: ${this.image}`); // Add this line for debugging

        return (
            '<div>' +
            '<strong>Title:</strong> ' + this.title + '<br>' +
            '<img src="' + this.image + '" alt="' + this.title + '" style="max-width: 300px;"><br>' +
            '<strong>Description:</strong> ' + this.description + '<br>' +
            '<strong>Author:</strong> ' + this.author + '<br>' +
            '<strong>Image Year:</strong> ' + this.imageYear + '<br>' +
            '</div>'
        );
    }

    // this is the property theTitle which returns the title
    get theTitle() {
        return this.title;
    }
}

// this function is called in the body of the HTML page so that the objects are created and added to the
// array myViewFinderArray
function initializeArray() {
    // create objects with title, image, description, author, and image year
    var myViewFinder1 = new ViewFinder("Red Tree", "images/redtree.jpg", "A vibrant red tree standing tall, its colorful foliage catching the sunlight in a mesmerizing display.", "Denis Kochnev", "2012");
    var myViewFinder2 = new ViewFinder("Another Red Tree", "images/redtree1.jpg", "A striking red tree with a unique form, exuding an aura of elegance and natural beauty.", "Leta Olson", "2002");
    var myViewFinder3 = new ViewFinder("Another Tree", "images/redtree2.jpg", "A tree showcasing a mix of red and green hues, presenting a harmonious blend of colors in its leaves.", "Leta Olson", "2019");
    var myViewFinder4 = new ViewFinder("Rock Tree", "images/rocktree.jpg", "A sturdy tree standing resilient among rocky surroundings, symbolizing strength and endurance in nature.", "Melissa", "2005");
    var myViewFinder5 = new ViewFinder("Many Trees", "images/manytrees.jpg", "A picturesque scene of multiple trees, creating a lush and diverse forest landscape teeming with life.", "Adrian Jones", "2008");
    var myViewFinder6 = new ViewFinder("White Tree", "images/whitetree.jpg", "A captivating white tree, its branches stretching gracefully, symbolizing purity and tranquility in the midst of nature.", "tatranka 7", "2017");

    // add objects to the array
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    myViewFinderArray.push(myViewFinder5);
    myViewFinderArray.push(myViewFinder6);
}

// this function gets an object from the array and puts it into the element with the id title
function accessInformation() {
    // get a random number
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    // get a random object from the array
    // calling the toString, but we could have gotten the property theTitle as well
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}

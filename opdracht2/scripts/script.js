// JavaScript Document
console.log("howdy");

// Declare an empty array to store the generated random numbers
var randomNumbers = [];
var randomNumbersList = document.querySelector("#randomNumbersList");

// Get a reference to the "pullNumber" element
var pullNumberBtn = document.querySelector("#pullNumber");

// Add a "click" event listener to the element
pullNumberBtn.addEventListener("click", function () {
  // Generate a random number between 0 and 20
  var randomNumber;

  // Keep generating random numbers until a unique one is found
  do {
    randomNumber = Math.floor(Math.random() * 21);
  } while (randomNumbers.includes(randomNumber));

  // Push the generated random number into the array
  randomNumbers.push(randomNumber);

  var liPulled = document.createElement("li"); // create a new list item element
  liPulled.textContent = randomNumber; // set its text content to the generated number
  randomNumbersList.insertBefore(liPulled, randomNumbersList.firstChild); // insert the list item at the beginning of the unordered list
});

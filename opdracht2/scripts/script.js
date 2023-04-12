// JavaScript Document
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

  // Check if the generated number matches with any number in the bingo card list
  var bingoCardList = document.querySelectorAll("#bingoCardList li");
  var matchedCount = 0;
  for (var i = 0; i < bingoCardList.length; i++) {
    if (bingoCardList[i].textContent == randomNumber) {
      bingoCardList[i].classList.add("available");
      matchedCount++;
    }
  }

  // Check if all the numbers in the bingo card have been matched
  if (matchedCount == bingoCardList.length) {
    alert(
      "Congratulations! You have matched all the numbers on your bingo card."
    );
  }

  // Add animation to show the pulled number
  var pulledNumber = document.createElement("span");
  pulledNumber.classList.add("pulled-number");
  pulledNumber.textContent = randomNumber;
  document.body.appendChild(pulledNumber);
  setTimeout(function () {
    pulledNumber.classList.add("fade-out");
    setTimeout(function () {
      pulledNumber.remove();
    }, 3000);
  }, 500);
});

// Declare an empty array to store the bingo card numbers
var bingoCardNumbers = [];

// Generate 20 unique random numbers between 0 and 30
while (bingoCardNumbers.length < 20) {
  var randomNumber = Math.floor(Math.random() * 31); // generate a random number between 0 and 30
  if (!bingoCardNumbers.includes(randomNumber)) {
    // check if the random number is not already in the array
    bingoCardNumbers.push(randomNumber); // add the random number to the array
  }
}

// Display the bingo card numbers on the screen
var bingoCardList = document.querySelector("#bingoCardList");
for (var i = 0; i < bingoCardNumbers.length; i++) {
  var li = document.createElement("li");
  li.textContent = bingoCardNumbers[i];
  bingoCardList.appendChild(li);

  // Add a click event listener to each li element in the bingo card list
  li.addEventListener("click", function () {
    // Check if the clicked li element matches with any number in the randomNumbers array
    var clickedNumber = parseInt(this.textContent);
    if (randomNumbers.includes(clickedNumber)) {
      this.classList.add("matched");
    }
  });
}

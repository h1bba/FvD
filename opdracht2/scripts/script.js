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
    randomNumber = Math.floor(Math.random() * 31);
  } while (randomNumbers.includes(randomNumber));

  // Push the generated random number into the array
  randomNumbers.push(randomNumber);

  var liPulled = document.createElement("li"); // create a new list item element
  liPulled.textContent = randomNumber; // set its text content to the generated number
  randomNumbersList.insertBefore(liPulled, randomNumbersList.firstChild); // insert the list item at the beginning of the unordered list

  // Check if the generated number matches with any number in the bingo card list
  var bingoCardList = document.querySelectorAll("#bingoCardList li");
  for (var i = 0; i < bingoCardList.length; i++) {
    if (bingoCardList[i].textContent == randomNumber) {
      bingoCardList[i].classList.add("available");
    }
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

var searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("input", function () {
  var filterValue = searchBar.value.toLowerCase();
  var filteredNumbers = randomNumbers.filter(function (number) {
    return number.toString().includes(filterValue);
  });
  randomNumbersList.innerHTML = "";
  filteredNumbers.forEach(function (number) {
    var li = document.createElement("li");
    li.textContent = number;
    randomNumbersList.appendChild(li);
  });
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
  li.setAttribute("tabindex", "0"); // add tabindex attribute
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

// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the spacebar (keyCode 32)
  if (event.keyCode === 32) {
    // Simulate a click on the "pullNumber" button
    pullNumberBtn.click();
  }
});

document.addEventListener("keydown", function (event) {
  // handle arrow key presses
  var bingoCardList = document.querySelectorAll("#bingoCardList li");
  var activeIndex = Array.from(bingoCardList).findIndex(
    (li) => li === document.activeElement
  );
  if (event.key === "ArrowLeft") {
    if (activeIndex > 0) {
      bingoCardList[activeIndex - 1].focus();
    }
  } else if (event.key === "ArrowRight") {
    if (activeIndex < bingoCardList.length - 1) {
      bingoCardList[activeIndex + 1].focus();
    }
  } else if (event.key === "ArrowUp") {
    if (activeIndex > 4) {
      bingoCardList[activeIndex - 5].focus();
    }
  } else if (event.key === "ArrowDown") {
    if (activeIndex < 15) {
      bingoCardList[activeIndex + 5].focus();
    }
  }
});

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the Enter key (keyCode 13)
  if (event.keyCode === 13) {
    // Get the currently active element
    var activeElement = document.activeElement;

    // Check if the active element is an li element in the bingo card list
    if (
      activeElement.tagName === "LI" &&
      activeElement.parentNode.id === "bingoCardList"
    ) {
      // Check if the clicked li element matches with any number in the randomNumbers array
      var clickedNumber = parseInt(activeElement.textContent);
      if (randomNumbers.includes(clickedNumber)) {
        activeElement.classList.add("matched");
      }
    }
  }
});

// Get a reference to the "bingo" button
var bingoBtn = document.querySelector("#bingoBtn");

// Add a click event listener to the button
bingoBtn.addEventListener("click", function () {
  var matchedNumbers = document.querySelectorAll("#bingoCardList li.matched");
  if (matchedNumbers.length === 20) {
    alert("Bingo!");
  } else {
    alert("Je hebt nog geen bingo!");
  }
});
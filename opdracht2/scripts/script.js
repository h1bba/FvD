// JavaScript Document
// randomNumbers array om de gerollde nummers in te stoppen
var randomNumbers = [];
// lijst met de gerollde nummers
var randomNumbersList = document.querySelector("#randomNumbersList");

// query selector met id voor de roll nummer knop
var pullNumberBtn = document.querySelector("#pullNumber");

// eventlistener voor de click van pullNumberBtn zodat ik functies kan uitvoeren
pullNumberBtn.addEventListener("click", function () {
  // getal tussen 0 en 30 genereren
  var randomNumber;

  // nummers uniek maken
  do {
    randomNumber = Math.floor(Math.random() * 31);
  } while (randomNumbers.includes(randomNumber));

  // Push de gerollde getal in de randomNumbers array
  randomNumbers.push(randomNumber);

  // maak een li voor de nieuwe nummer en insert hem als firstchild
  var liPulled = document.createElement("li");
  liPulled.textContent = randomNumber;
  randomNumbersList.insertBefore(liPulled, randomNumbersList.firstChild);

  // maak een bingokaart lijst en zet de randomNumbers als Li om een bingokaart te maken
  var bingoCardList = document.querySelectorAll("#bingoCardList li");
  for (var i = 0; i < bingoCardList.length; i++) {
    // als bingoCardList dezelfde waarde heeft als de gerollde nummer, voeg de class available toe aan de li
    if (bingoCardList[i].textContent == randomNumber) {
      bingoCardList[i].classList.add("available");
    }
  }

  // Animatie voor pulled number
  var pulledNumber = document.createElement("span");
  // class geven
  pulledNumber.classList.add("pulled-number");
  // de text als getal geven van random nummer
  pulledNumber.textContent = randomNumber;
  // insert het in de body
  document.body.appendChild(pulledNumber);
  // wacht met de class fade-out geven, verwijder het na 3 secondes
  setTimeout(function () {
    pulledNumber.classList.add("fade-out");
    setTimeout(function () {
      pulledNumber.remove();
      // houd het in beeld voor 3 secondes
    }, 3000);
    // wacht met de class fade-out geven, verwijder het na 0,5 secondes
  }, 500);
});

// searchbar
var searchBar = document.querySelector("#searchBar");

// ~lowerCase onnodig maar te weinig tijd om het te fixen~
searchBar.addEventListener("input", function () {
  var filterValue = searchBar.value.toLowerCase();
  var filteredNumbers = randomNumbers.filter(function (number) {
    return number.toString().includes(filterValue);
  });
  // laat alleen de gefilterde nummer zien
  randomNumbersList.innerHTML = "";
  filteredNumbers.forEach(function (number) {
    var li = document.createElement("li");
    li.textContent = number;
    randomNumbersList.appendChild(li);
  });
});

// bingo kaart nummers
var bingoCardNumbers = [];

// genereer 20 unieke nummers
while (bingoCardNumbers.length < 20) {
  // tussen de 0 en 30
  var randomNumber = Math.floor(Math.random() * 31);
  if (!bingoCardNumbers.includes(randomNumber)) {
    // kijk of hij niet al in de bingoCardNumbers zit zodat het uniek blijft
    bingoCardNumbers.push(randomNumber);
  }
}

// zet de bingokaart in scherm als li's
var bingoCardList = document.querySelector("#bingoCardList");
for (var i = 0; i < bingoCardNumbers.length; i++) {
  var li = document.createElement("li");
  li.textContent = bingoCardNumbers[i];
  // tabindex voor de keydowns
  li.setAttribute("tabindex", "0");
  bingoCardList.appendChild(li);

  // event listeners op de li zodat matchen mogelijk is
  li.addEventListener("click", function () {
    // kijk of de textcontent in de gerollde nummers zit
    var clickedNumber = parseInt(this.textContent);
    if (randomNumbers.includes(clickedNumber)) {
      // voeg de class matched toe
      this.classList.add("matched");
    }
  });
}

// Add a keydown event listener to the document
document.addEventListener("keydown", function (event) {
  // spacebar is keycode 32
  if (event.keyCode === 32) {
    // pullNumberBtn uitvoeren
    pullNumberBtn.click();
  }
});

document.addEventListener("keydown", function (event) {
  // handle arrow key presses
  var bingoCardList = document.querySelectorAll("#bingoCardList li");
  // vind de index
  var activeIndex = Array.from(bingoCardList).findIndex(
    // pak de huidige element
    (li) => li === document.activeElement
  );
  if (event.key === "ArrowLeft") {
    // 1 plek naar links
    if (activeIndex > 0) {
      // geef focus state
      bingoCardList[activeIndex - 1].focus();
    }
  } else if (event.key === "ArrowRight") {
    // 1 plek naar rechts
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
  // keycode enter 13
  if (event.keyCode === 13) {
    // pak de actieve element
    var activeElement = document.activeElement;

    // kijk of de actieve element in de bingoCardList zit
    // https://stackoverflow.com/questions/27285714/javascript-parentnode-id-not-working-the-way-i-expected //
    if (
      activeElement.tagName === "LI" &&
      activeElement.parentNode.id === "bingoCardList"
    ) {
      // kijk of de actieve element matched met de randomNumbers en geef dan de class matched als het succesvol is
      var clickedNumber = parseInt(activeElement.textContent);
      if (randomNumbers.includes(clickedNumber)) {
        activeElement.classList.add("matched");
      }
    }
  }
});

// Bingo knop
var bingoBtn = document.querySelector("#bingoBtn");

// als de matchednumbers de waarde 20 heeft, is bingo mogelijk (20 matched li's)
bingoBtn.addEventListener("click", function () {
  var matchedNumbers = document.querySelectorAll("#bingoCardList li.matched");
  if (matchedNumbers.length === 20) {
    alert("Bingo!");
  } else {
    alert("Je hebt nog geen bingo!");
  }
});

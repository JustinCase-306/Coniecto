// Elemente als Variablen holen
const inputGuessHTML = document.getElementById('inputGuessHTML');
const gameStatus = document.getElementById('gameStatus');
const triesDisplay = document.getElementById('triesDisplay');
const jsConfetti = new JSConfetti();

// Variablen erzeugen, welche dauerhaft genutzt werden
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessingTries = 0;

function numberGuessing(){
    // Werte auslesen bzw. ändern
    let playerGuess = Number(inputGuessHTML.value);
    guessingTries = guessingTries + 1;
    triesDisplay.innerHTML = "Versuche: " + guessingTries;

    // Gewinn - Rückmeldungen
    if (playerGuess == numberToGuess) {
    gameStatus.innerHTML = "Du hast die richtige Zahl erraten!";
    // Konfetti
    jsConfetti.addConfetti({
        emojis: ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🟤', '⚫', '⚪'],
        emojiSize: 100,
        confettiNumber: 30,
    });
    // Eingabe sperren
    inputGuessHTML.disabled = true;
    document.querySelector("button").disabled = true;
    return false;

    } else if (playerGuess > numberToGuess) {
        gameStatus.innerHTML = "Die gesuchte Zahl ist kleiner!";
    } else {
        gameStatus.innerHTML = "Die gesuchte Zahl ist größer!";
    }

    // Inputfeld leeren
    inputGuessHTML.value = "";
}

function resetGame(){
    numberToGuess = Math.floor(Math.random() * 101);
    guessingTries = 0
    triesDisplay.innerHTML = "Versuche: 0";
    inputGuessHTML.value = "";
    inputGuessHTML.disabled = false;
    document.querySelector("button").disabled = false;
    gameStatus.innerHTML = "Bitte rate die korrekte Zahl zwischen 1 und 100!"
}
const LETTERS = "qwertyuiopasdfghjklzxcvbnm";
const keyboard = document.querySelector(".keyboard");
const lettersContainer = document.querySelector(".game .word");
const modal = document.querySelector(".modal");
let hangmanImage = document.querySelector(".hangman img");

let selectedWord = "";
let usedLetters = "";
let leftLives = 6;
let gameEnded = false;

// Adding letters to the keyboard
LETTERS.split("").map(letter => {
    const createdButton = document.createElement("button");
    createdButton.textContent = letter;
    createdButton.onclick = (b) => typeLetter(b.target, letter);
    keyboard.insertAdjacentElement("beforeend", createdButton);
    return createdButton;
});

// A funciton to get a random word
const getRandomWord = () => wordList[Math.floor(Math.random() * wordList.length)];


function newGame() {
    const { word, hint } = getRandomWord();
    modal.classList.remove("show");
    hangmanImage.src = hangmanImage.src.replace(/\d.svg/, `0.svg`);
    document.querySelector("h4.guessed b").textContent = `0 / 6`;
    lettersContainer.innerHTML = "";
    [...keyboard.children].forEach(btn => {
        btn.classList.remove("clicked");
        btn.disabled = false;
    });
    selectedWord = word;
    gameEnded = false;
    usedLetters = "";
    leftLives = 6;

    document.querySelector(".game .hint b").textContent = hint;
    lettersContainer.insertAdjacentHTML("beforeend", new Array(word.length).fill(`<li class="letter"></li>`).join(""));
}

/**
 * @param {HTMLButtonElement} btn 
 * @param {String} letter 
 */
function typeLetter(btn, letter) {
    if (!selectedWord || usedLetters.includes(letter) || gameEnded) return;
    btn.classList.add("clicked");
    btn.disabled = true;

    usedLetters += letter;

    if (selectedWord.includes(letter)) {
        selectedWord.split("").forEach((l, i) => {
            if (letter === l) {
                lettersContainer.querySelectorAll("li")[i].textContent = l;
                lettersContainer.querySelectorAll("li")[i].classList.add("guessed");
            }
        });
    } else {
        removeLife();
    }


    if (leftLives === 0) return gameOver(false);
    if (!selectedWord.split("").map(l => !usedLetters.includes(l)).includes(true)) return gameOver(true);
}

function removeLife() {
    leftLives--;
    hangmanImage.src = hangmanImage.src.replace(/\d.svg/, `${6 - leftLives}.svg`);

    document.querySelector("h4.guessed b").textContent = `${6 - leftLives} / 6`;
}

function gameOver(won) {
    gameEnded = true;
    setTimeout(() => {
        const modalMessage = won ? "You found the word: " : "The correct word was: ";
        modal.querySelector("img").src = `./images/${won ? "victory.gif" : "lost.gif"}`;
        modal.querySelector("h4").textContent = won ? "Congrats!" : "Game Over !";
        modal.querySelector("p").innerHTML = `${modalMessage} <b>${selectedWord}</b>`;
        modal.classList.add("show");
    }, 300);
}

window.onload = newGame;
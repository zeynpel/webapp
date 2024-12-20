"use strict"; // Enables strict mode, which catches common coding errors and improves performance

// main.js
// Name: [Zeynep Pelit]
// Banner ID: [001221738]
// Course: ELEE1159

const cardsArray = [
    "card_1.png", "card_2.png", "card_3.png", "card_4.png",
    "card_5.png", "card_6.png", "card_7.png", "card_8.png",
    "card_9.png", "card_10.png", "card_11.png", "card_12.png",
    "card_13.png", "card_14.png", "card_15.png", "card_16.png",
    "card_17.png", "card_18.png", "card_19.png", "card_20.png",
    "card_21.png", "card_22.png", "card_23.png", "card_24.png"
];

let selectedCards = [];
let matchedCards = [];
let playerName = localStorage.getItem('playerName') || prompt("Enter your name:") || "Player";
localStorage.setItem('playerName', playerName);
let numberOfCards = parseInt(localStorage.getItem('numberOfCards')) || 48;
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
let timer;
let timeElapsed = 0;

// Preload images
function preloadImages() {
    cardsArray.forEach((card) => {
        const img = new Image();
        img.src = `images/${card}`;
    });
}

// Shuffle cards
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Initialize the game
function initGame() {
    clearInterval(timer);
    timeElapsed = 0;
    updateTimer();

    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";

    let gameCards = shuffle([...cardsArray, ...cardsArray]).slice(0, numberOfCards);
    matchedCards = [];
    selectedCards = [];

    gameCards.forEach((card) => {
        const cardElement = document.createElement("a");
        cardElement.href = "#";
        cardElement.classList.add("card");
        cardElement.innerHTML = `<img src="images/back.png" alt="" data-front="images/${card}">`;
        cardElement.addEventListener("click", flipCard);
        cardsContainer.appendChild(cardElement);
    });

    document.getElementById("player").textContent = `Player: ${playerName}`;
    displayHighScores();
    startTimer();
}

// Flip card logic
function flipCard(event) {
    if (selectedCards.length >= 2 || matchedCards.includes(event.currentTarget)) {
        return;
    }

    const card = event.currentTarget.querySelector("img");

    if (selectedCards.includes(event.currentTarget)) {
        return;
    }

    card.src = card.dataset.front;
    selectedCards.push(event.currentTarget);

    if (selectedCards.length === 2) {
        checkMatch();
    }
}

// Check for a match
function checkMatch() {
    const [card1, card2] = selectedCards;
    const front1 = card1.querySelector("img").dataset.front;
    const front2 = card2.querySelector("img").dataset.front;

    if (front1 === front2) {
        matchedCards.push(card1, card2);
        selectedCards = [];

        if (matchedCards.length === numberOfCards) {
            setTimeout(() => endGame(), 500);
        }
    } else {
        setTimeout(() => {
            card1.querySelector("img").src = "images/back.png";
            card2.querySelector("img").src = "images/back.png";
            selectedCards = [];
        }, 1000);
    }
}

// End the game
function endGame() {
    clearInterval(timer);
    const finishTime = timeElapsed;

    highScores.push({ name: playerName, time: finishTime });
    highScores.sort((a, b) => a.time - b.time);
    highScores = highScores.slice(0, 10);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    alert(`Game Over! Your time: ${finishTime} seconds`);

    playerName = prompt("Enter a new player name for the next game:") || "Player";
    localStorage.setItem('playerName', playerName);

    initGame();
}

// Timer functions
function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        updateTimer();
    }, 1000);
}

function updateTimer() {
    document.getElementById("timer").textContent = `Time: ${timeElapsed} seconds`;
}

// Save settings
function saveSettings() {
    playerName = document.getElementById("player_name").value || "Player";
    numberOfCards = parseInt(document.getElementById("num_cards").value, 10) || 48;

    localStorage.setItem('playerName', playerName);
    localStorage.setItem('numberOfCards', numberOfCards);

    location.reload();
}

// Display high scores
function displayHighScores() {
    const highScoreList = document.getElementById("high_score");
    highScoreList.innerHTML = `High Scores:<br>`;
    highScores.forEach((entry, index) => {
        highScoreList.innerHTML += `${index + 1}. ${entry.name}: ${entry.time} seconds<br>`;
    });
}

// Show rules dynamically
function showRules() {
    const rulesContent = `
        <p>The Memory Game rules:</p>
        <ul>
            <li>The game starts with all cards facing down.</li>
            <li>Select two cards to reveal their faces.</li>
            <li>If the cards match, they remain revealed.</li>
            <li>If they don’t match, they will flip back after 1 second.</li>
            <li>The game ends when all cards are matched.</li>
            <li>Your score is based on the time taken to complete the game.</li>
        </ul>
    `;
    const rulesTab = document.getElementById("tabs_rules");
    rulesTab.innerHTML = rulesContent;

    document.getElementById("tabs_rules").classList.remove("hide");
    document.getElementById("tabs_cards").classList.add("hide");
    document.getElementById("tabs_settings").classList.add("hide");
}

// Switch back to the game tab
function showGame() {
    document.getElementById("tabs_rules").classList.add("hide");
    document.getElementById("tabs_cards").classList.remove("hide");
    document.getElementById("tabs_settings").classList.add("hide");
}

// Reset high scores and restart the lineup
function resetGame() {
    highScores = [];
    localStorage.removeItem('highScores');
    alert("High scores cleared and game reset!");

    // Prompt for a new player name
    playerName = prompt("Enter your name for the new game:");
    while (!playerName || playerName.trim() === "") {
        playerName = prompt("Name cannot be empty. Please enter your name:");
    }
    localStorage.setItem('playerName', playerName);
    document.getElementById("player").textContent = `Player: ${playerName}`;

    initGame(); // Restart the game
}

// Event listeners
document.getElementById("save_settings").addEventListener("click", saveSettings);
document.getElementById("tabs_rules_link").addEventListener("click", showRules);
document.getElementById("tabs_cards_link").addEventListener("click", showGame);
document.getElementById("reset_button").addEventListener("click", resetGame);

// Start the game
preloadImages();
initGame();

document.addEventListener('DOMContentLoaded', function () {
    // Prompt for Name at Start
    let playerName = prompt("Please enter your name to start the game:");
    while (!playerName || playerName.trim() === "") {
        playerName = prompt("Name cannot be empty. Please enter your name:");
    }
    document.getElementById('player').textContent = `Player: ${playerName}`;

    // Save Settings Button Logic
    const saveSettingsButton = document.getElementById('save_settings');
    saveSettingsButton.addEventListener('click', function () {
        const nameInput = document.getElementById('player_name').value.trim();
        if (nameInput === "") {
            alert("Player name cannot be empty. Please enter a name.");
        } else {
            document.getElementById('player').textContent = `Player: ${nameInput}`;
            alert("Settings saved successfully!");
        }
    });
});

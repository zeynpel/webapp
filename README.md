# Memory Game

The **Memory Game** is a beginner-friendly browser game where players flip cards to find matching pairs. This project uses **HTML**, **CSS**, and **JavaScript** to demonstrate dynamic web development concepts, including user interaction, event handling, and logic.

---

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [How It Works](#how-it-works)
4. [File Structure](#file-structure)
5. [Code Explanation](#code-explanation)
6. [How to Run](#how-to-run)
7. [Customization](#customization)

---

## Overview

This game challenges players to match all card pairs as quickly as possible. The time taken to complete the game is recorded, and high scores are saved locally in the browser. The game allows customization for the number of cards and player names.

---

## Features
- **Interactive Gameplay**: Click cards to reveal their faces and match pairs.
- **Timer**: Tracks the time taken to finish the game.
- **High Scores**: Saves the top 10 scores with player names.
- **Player Input**: Allows players to input their names.
- **Custom Settings**: Choose the number of cards to play with.
- **Responsive Design**: Works seamlessly on desktop and mobile.

---

## How It Works
1. Cards are shuffled and displayed face-down.
2. Players flip two cards at a time by clicking.
3. If the two cards match, they remain face-up. If not, they flip back.
4. The game ends when all cards are matched.
5. The player's time is recorded in the high scores list if it qualifies.

---

## File Structure

Memory-Game/ ├── index.html # The main HTML file ├── memory.css # CSS for styling the game ├── main.js # JavaScript for game logic ├── images/ # Folder for card images │ ├── card_1.png │ ├── card_2.png │ └── ... └── README.md # Project documentation


---

## Code Explanation

### **HTML (`index.html`)**
The HTML file defines the structure of the game:
1. **Header**:
   - Displays the game title, player name, timer, and high scores.
   - Example:
     ```html
     <header>
         <h1>Memory Game</h1>
         <p id="new_game"><a href="index.html">New Game</a></p>
         <p id="player">&nbsp;</p>
         <p id="timer">Time: 0 seconds</p>
         <p id="high_score">High Scores:</p>
     </header>
     ```

2. **Tabs**:
   - Provides navigation between the game, rules, and settings.
   - Example:
     ```html
     <div class="tabs">
         <button id="tabs_cards_link" class="tablinks active">Play Game</button>
         <button id="tabs_rules_link" class="tablinks">View Rules</button>
         <button id="tabs_settings_link" class="tablinks">Settings</button>
         <button id="reset_button">Reset Game</button>
     </div>
     ```

3. **Game Area**:
   - The cards are dynamically inserted into this section using JavaScript.
   - Example:
     ```html
     <div id="tabs_cards" class="tabcontent">
         <div id="cards"></div>
     </div>
     ```

4. **Rules and Settings**:
   - Contains instructions for playing the game and options to customize it.

---

### **CSS (`memory.css`)**
- Styles the game layout, including the cards, buttons, and tabs.
- Example:
  - Cards have a flip animation when clicked.
  - High scores are displayed in a styled list.

---

### **JavaScript (`main.js`)**

#### Key Variables
- **`cardsArray`**: Contains the list of card images.
- **`selectedCards`**: Temporarily stores the two cards flipped by the player.
- **`matchedCards`**: Stores all matched card pairs.
- **`playerName`**: Stores the current player's name.
- **`highScores`**: Stores the list of top scores.

#### Key Functions

1. **`initGame()`**:
   - Initializes the game by shuffling cards, creating card elements, and starting the timer.

2. **`flipCard(event)`**:
   - Handles card flipping and adds the selected card to `selectedCards`.

3. **`checkMatch()`**:
   - Compares the two selected cards. If they match, they're added to `matchedCards`.
   - If not, the cards flip back after a delay.

4. **`endGame()`**:
   - Stops the timer, prompts for a new player name, updates the high scores, and restarts the game.

5. **`startTimer()` / `updateTimer()`**:
   - Manages the timer, updating it every second during gameplay.

6. **`saveSettings()`**:
   - Updates player preferences, such as the name and number of cards.

7. **`showRules()` / `showGame()`**:
   - Switches between the game and rules tabs.

8. **`resetGame()`**:
   - Clears all high scores and resets the game.

---

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/zeynpel/webapp
   cd memory-game

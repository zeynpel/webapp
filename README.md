# Memory Game

The **Memory Game** is an interactive browser-based game developed using **HTML**, **CSS**, and **JavaScript**. It challenges players to find matching card pairs while keeping track of their time and score. This project demonstrates dynamic web development concepts, including DOM manipulation, event handling, and local storage.

---

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Game Logic](#game-logic)
4. [Code Structure](#code-structure)
5. [Detailed Code Explanation](#detailed-code-explanation)
6. [How to Run](#how-to-run)
7. [Customization](#customization)
8. [Testing and Debugging](#testing-and-debugging)
9. [Future Enhancements](#future-enhancements)

---

## Overview

The **Memory Game** offers players a fun way to test their memory and reflexes. The goal is to match all card pairs as quickly as possible. The game keeps track of the time and maintains a local high score leaderboard.

---

## Features

- **Interactive Gameplay**: Flip cards to reveal their faces and find matches.
- **Timer**: Tracks the time taken to complete the game.
- **High Scores**: Stores the top 10 scores locally.
- **Player Customization**: Input player names and adjust the number of cards.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Rules and Settings Tabs**: Includes instructions and customization options.

---

## Game Logic

1. **Initial Setup**:
   - Cards are shuffled and displayed face-down.
   - The game area is dynamically populated based on user settings.

2. **Gameplay**:
   - Players flip two cards at a time.
   - If the cards match, they remain face-up.
   - If not, they flip back after a short delay.

3. **Winning**:
   - The game ends when all cards are matched.
   - The player's time and score are evaluated and saved if they qualify for the high scores.

4. **Customization**:
   - Users can adjust the number of cards and input their names in the Settings tab.

---

## Code Structure


Memory-Game/ ├── index.html # The main HTML file ├── memory.css # CSS for styling the game ├── main.js # JavaScript for game logic ├── images/ # Folder for card images │ ├── card_1.png │ ├── card_2.png │ └── ... └── README.md # Project documentation



---

## Detailed Code Explanation

### **HTML (`index.html`)**

- **Header Section**:
  Displays the game title, player name, timer, and high scores. Example:
  ```html
  <header>
      <h1>Memory Game</h1>
      <p id="new_game"><a href="index.html">New Game</a></p>
      <p id="player">&nbsp;</p>
      <p id="timer">Time: 0 seconds</p>
      <p id="high_score">High Scores:</p>
  </header>

**Tabs**: Navigation for switching between the game, rules, and settings.

<div class="tabs">
    <button id="tabs_cards_link" class="tablinks active">Play Game</button>
    <button id="tabs_rules_link" class="tablinks">View Rules</button>
    <button id="tabs_settings_link" class="tablinks">Settings</button>
</div>


**Game Area**: The game dynamically inserts card elements here.
<div id="tabs_cards" class="tabcontent">
    <div id="cards"></div>
</div>

**Settings**: Inputs for player name and number of cards.
<div id="tabs_settings" class="tabcontent">
    <label for='player_name'>Player name:</label>
    <input type='text' id='player_name'><br>
    <label for='num_cards'>Number of cards:</label>
    <select id='num_cards'>
        <option>48</option>
        <option>40</option>
        <option>32</option>
        <option>24</option>
        <option>16</option>
        <option>8</option>
    </select><br>
    <input type='button' id='save_settings' value='Save Settings'>
</div>

### **CSS (`memory.css`)**
- Styles the layout, animations, and responsiveness of the game.
- Example:
  - Flip animation for cards.
  - Styling for the high score list.

---

### **JavaScript (`main.js`)**

#### **Initialization (`initGame`)**
1. **Shuffling and Displaying Cards**: Randomly arranges cards and sets them face down.
2. **Event Listeners**: Sets up click listeners for the cards and other interactive elements.
3. **Reset Game State**: Ensures a fresh start by resetting the timer and matched cards.

#### **Card Interaction (`flipCard`)**
- Detects user clicks to flip a card.
- Temporarily stores flipped cards in an array for matching logic.
- Adds a smooth flip animation using CSS classes.

#### **Matching Logic (`checkMatch`)**
- Compares two flipped cards:
  - **If Match**: Leaves the cards face-up and adds them to the matched cards list.
  - **If No Match**: Flips the cards back to their initial state after a short delay.

#### **Timer Functions (`startTimer` and `updateTimer`)**
- **Start Timer**: Begins tracking the time when the game starts.
- **Update Timer**: Updates the timer display every second in the game's header.

#### **Player Settings (`saveSettings`)**
- Allows users to enter a player name and choose the number of cards.
- Saves these preferences in local storage for future sessions.
- Reloads the game with the updated settings.

#### **High Scores (`renderHighScores`)**
- Retrieves and displays the leaderboard from local storage.
- Updates the leaderboard with new scores after each game.

#### **Tab Navigation**
- Switches between the game board, rules, and settings tabs.
- Ensures a clean UI by showing only the selected tab at any time.

#### **Reset and New Game**
- Clears the current game state.
- Restarts the game with a freshly shuffled card arrangement.

---

### **How to Run**

1. Clone the repository:
   ```bash
   git clone https://github.com/zeynpel/memory-game
   cd memory-game
2. Open `index.html` in any modern browser.
3. Enjoy the game!

---

### **Customization**

- **Player Name**: Enter your name in the Settings tab.
- **Card Count**: Adjust the number of cards from 8 to 48.
- **Styling**: Modify `memory.css` for personalized design.

---

### **Testing and Debugging**

#### **Edge Cases**
- **Blank Player Name**: Prompts for a valid name.
- **Large Card Sets**: Ensures performance and layout consistency.

#### **Debugging Tools**
- Used `console.log()` to track issues.
- Browser developer tools for testing responsiveness and functionality.

---

### **Future Enhancements**

1. **Multiplayer Mode**: Allow two players to compete.
2. **Themes**: Add customizable card themes.
3. **Advanced Scoring**: Introduce bonuses for consecutive matches.
4. **Sound Effects**: Add audio feedback for actions.
5. **Cloud Sync**: Save high scores online.

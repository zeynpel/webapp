# Memory Game

A browser-based **Memory Game** built using **HTML**, **CSS**, and **JavaScript**. This game challenges players to flip over cards and find matching pairs. It’s simple, fun, and a great way to sharpen your memory!

## What Does the Game Do?

- **Card Matching:** You flip two cards at a time. If they match, they stay flipped!
- **Timing Yourself:** A timer keeps track of how long it takes you to match all the cards.
- **High Scores:** The game remembers your best times (the top 10 scores) and shows them to you.
- **Player Name:** Enter your name so your scores are recorded under it.
- **Custom Game Settings:** Choose how many cards you want to play with (making the game easier or harder).
- **Responsive Design:** The game looks good on both computers and phones.

---

## File Structure Overview

When you look at the project folder, here’s what you’ll see:

Memory-Game/ ├─ index.html # The main webpage that you open in your browser ├─ memory.css # The file that styles the game (colors, layouts, fonts) ├─ main.js # The file that controls the game’s logic (how cards flip, timer, scores) ├─ images/ # A folder that holds all the card images │ ├─ card_1.png │ ├─ card_2.png │ └─ ... (more images) └─ README.md # This instructions file you’re reading right now


**Tip:** The `images/` folder is where you put card images. If you add a new card image, you’ll need to tell the `main.js` file about it so the game knows to use it.

---

## How to Play the Game

1. **Open the Game**:  
   - Double-click `index.html` to open it in your browser.
   - If you’re using Visual Studio Code, you can right-click on `index.html` and select “Open with Live Server” if you have the Live Server extension installed.

2. **Starting the Game**:  
   - When the game starts, all cards are face-down.
   - Click any card to flip it over, then click another card to see if they match.

3. **Making Matches**:  
   - If two flipped cards match, they remain visible.
   - If they don’t match, they will flip back face-down after a short delay.

4. **Winning the Game**:  
   - Keep flipping and matching until all cards are face-up (matched).
   - The timer stops when all matches are found, and if it’s a top 10 time, it saves your score.

5. **Customizing Your Experience**:  
   - There’s a settings area where you can change the number of cards.
   - You can also set or change your player name before starting the game.

---

## How the Game Works (Behind the Scenes)

- **Card Matching Logic:**  
  The JavaScript code in `main.js` randomly shuffles the cards at the start of the game. Each time you flip two cards, the code checks if they are the same. If they match, they stay flipped. If not, they flip back after a moment.

- **Timer:**  
  The timer starts at zero when the game begins and keeps counting until all cards are matched. Your finishing time is recorded, and if it’s good enough to be in the top 10, it’s saved for next time.

- **High Scores (LocalStorage):**  
  The browser’s localStorage is used to remember your high scores and player name even if you close the browser. So the next time you open the game, your best times are still there!

- **Dynamic Card Generation:**  
  The cards are created in the browser using JavaScript, so you don’t have to hard-code them in the HTML. This makes it easy to add new cards or change how many cards are displayed.

---

## Making It Your Own

1. **Add New Cards:**  
   Put new images in the `images/` folder and update the `cardsArray` in `main.js` so the game knows about the new cards.

2. **Change Difficulty:**  
   In `main.js`, there’s a variable that sets the total number of cards. Increase it for a harder game (more cards) or decrease it for an easier one.

3. **Change the Look (Styling):**  
   Open `memory.css` and modify colors, fonts, spacing, or layout to make the game look different.

---

## Example High Scores Table

| Rank | Player Name | Time (Seconds) |
|------|-------------|----------------|
| 1    | Alice       | 35             |
| 2    | Bob         | 42             |
| 3    | Charlie     | 50             |

This table is just an example. Your game will build its own table of top scores as you play!

---

## Requirements

- **A Modern Web Browser:**  
  Use Chrome, Firefox, Safari, or Edge.
  
- **Local Server (Optional):**  
  If you want to use `localStorage` and ensure all features work properly, open the game through a local server. For example, if you’re using Visual Studio Code, install the **Live Server** extension:
  - Press `Shift + Command (or Ctrl) + X` to open extensions.
  - Search for "Live Server" and install it.
  - Right-click on `index.html` and choose "Open with Live Server."

If you don’t have a server, just double-clicking `index.html` should still let you play, but some features might not work as intended depending on your browser’s security settings.

---

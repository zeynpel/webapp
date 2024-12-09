# Memory Game

A browser-based **Memory Game** built using **HTML**, **CSS**, and **JavaScript**. The game challenges players to match pairs of cards as quickly as possible. It includes a timer, high-score tracking, and customizable settings.

## Features
- **Card Matching**: Players flip two cards at a time to find a match.
- **Timer**: Tracks the time taken to complete the game.
- **High Scores**: Saves the top 10 scores with player names.
- **Player Input**: Allows players to set their name before and after each game.
- **Customizable Settings**: Choose the number of cards to play with.
- **Responsive Design**: Works on both desktop and mobile browsers.

---

## File Structure

Memory-Game/ ├── index.html # The main HTML file for the game ├── memory.css # CSS file for styling ├── main.js # JavaScript file with game logic ├── images/ # Folder containing card images │ ├── card_1.png │ ├── card_2.png │ └── ... └── README.md # This README file


---

## How to Play
1. **Start the Game**:
   - The game begins with all cards face-down.
   - Click on two cards to flip them and reveal their images.

2. **Match the Cards**:
   - If the two cards match, they remain flipped.
   - If they don’t match, they flip back after a short delay.

3. **Complete the Game**:
   - Match all cards to complete the game.
   - Your time will be saved if it’s among the top 10 scores.

4. **Custom Settings**:
   - Change the number of cards or your player name in the settings tab.

---

## How It Works
- **Card Matching Logic**: 
  - The game checks if two flipped cards match.
  - Matched cards stay open; unmatched cards flip back.
  
- **Timer**: 
  - The timer starts at the beginning of the game and stops when all cards are matched.
  
- **Dynamic Card Generation**: 
  - Cards are dynamically generated and shuffled at the start of each game.
  
- **LocalStorage**: 
  - Player names and high scores persist across sessions using `localStorage`.

---

## Customization
You can customize the game by:
1. **Adding New Cards**:
   - Add new card images to the `images/` folder and update the `cardsArray` in `main.js`.

2. **Adjusting Difficulty**:
   - Change the default number of cards by modifying the `totalCards` variable in `main.js`.

3. **Styling**:
   - Edit `memory.css` to customize the appearance of the game.

---

## Example High Scores
| Rank | Player Name | Time (Seconds) |
|------|-------------|----------------|
| 1    | Alice       | 35             |
| 2    | Bob         | 42             |
| 3    | Charlie     | 50             |

---

## Requirements
- A modern browser (e.g., Chrome, Firefox, Edge).
- Local server (e.g., **Live Server** in Visual Studio Code) to ensure proper functionality of `localStorage`.

---

## How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/memory-game.git
   cd memory-game

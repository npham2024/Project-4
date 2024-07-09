let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);

	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}

	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	
	const buttons = getGameBoardButtons();

	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];

	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}

	// See if any more moves are left
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}

	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
   clearTimeout(computerMoveTimeout)

   const buttons = getGameBoardButtons()
   for(let button of buttons){
      button.innerHTML = "";
      button.className = "";
      button.removeAttribute('disabled');
   }

	 // Set up the ideal state for Player starting game.
   playerTurn = true;

   let turnInfo = document.getElementById('turnInfo')
   turnInfo.innerText = 'Your turn'
}

// Set attribures of a button being clicked
function boardButtonClicked(button) {
	// TODO: Complete the function
   if(playerTurn == true){
      button.innerText = 'X';
      button.className = 'x';
      button.disabled = true;
      switchTurn()
   }
}


function switchTurn() {
	// TODO: Complete the function
   let status = checkForWinner();
   let turnInfo = document.getElementById('turnInfo')

	 // Set timeout for when computers turn to make it not so instant
   if(playerTurn){
      turnInfo.innerText = "Computer's turn"
      computerMoveTimeout = setTimeout(makeComputerMove, 1000)
      playerTurn = false;
   } else {
      turnInfo.innerText = "Your turn"
      playerTurn = true
   }

	 // Set the text when a final outcome is realized
   if(status === gameStatus.HUMAN_WINS){
      playerTurn = false;
      turnInfo.innerText = "You win!";
   } else if(status === gameStatus.COMPUTER_WINS){
      playerTurn = false;
      turnInfo.innerText = "Computer wins!";
   } else if(status === gameStatus.DRAW_GAME){
      playerTurn = false;
      turnInfo.innerText = "Draw game";
   }
}

// Randomize the computers move. 
// Turn the buttons into an array and filter them based on if they are empty
// randomly select a button and set its attributes indicating the computers move. 
function makeComputerMove() {
	// TODO: Complete the function
   const buttons = getGameBoardButtons()
   const emptyButtons = Array.from(buttons).filter(button => button.innerHTML === "");

   if (emptyButtons.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyButtons.length);
      const randomButton = emptyButtons[randomIndex];
      randomButton.innerText = 'O';
      randomButton.className = 'O';
      randomButton.disabled = true;
      switchTurn();
   }
}
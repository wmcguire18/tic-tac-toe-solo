var game = new Game("Player One", "Player Two", "Player One Turn");

var newGame = document.querySelector('#new-game');
var gameBoard = document.querySelector(".game-board");
var playerOneTurn = document.querySelector(".game-data1");
var playerTwoTurn = document.querySelector(".game-data2");
var resignButton = document.querySelector("#resign-game");

newGame.addEventListener("click", loadNewGame);
gameBoard.addEventListener("click", makeMove);

function loadNewGame() {
  var game = new Game("Player One", "Player Two", "Player One Turn");
  clearGameBoard();
  game.resetBoard();
  console.log(playerTwoTurn.innerText)
  playerOneTurn.innerText = "Player One, it's your turn...";
  playerTwoTurn.innerText = "Player Two, it's your turn...";
  playerOneTurn.classList.remove("hidden");
  playerTwoTurn.classList.add("hidden");
}

function makeMove() {
  var selectedButton = event.target.closest(".game-button");
  if (game.turn === "Player One Turn") {
    selectedButton.innerText = "X";
    disableMultiClick(selectedButton);
    playerOneTurn.classList.add("hidden");
    playerTwoTurn.classList.remove("hidden");
} else {
    selectedButton.innerText = "O";
    disableMultiClick(selectedButton);
    playerOneTurn.classList.remove("hidden");
    playerTwoTurn.classList.add("hidden");
  }
  game.updateBoard(selectedButton.id)
  game.toggleTurn()
  game.checkForWin(game.playerOne);
  game.checkForWin(game.playerTwo);
  winScreen();
  // game.checkForDraw();
}

function winScreen(){
  console.log(newGame.innerText)
  if (game.checkForWin(game.playerOne)) {
    playerTwoTurn.innerText = "Player One wins!"
    setTimeout(function(){loadNewGame();}, 3000);
  } else if (game.checkForWin(game.playerTwo)) {
    playerOneTurn.innerText = "Player Two wins!"
    setTimeout(function(){loadNewGame();}, 3000);
  }
}

function disableMultiClick(button) {
  button.disabled = true;
}

function clearGameBoard() {
  gameBoard.innerHTML = `
  <div class="row">
    <button type="button" name="button1" class="game-button" id="0"></button>
    <button type="button" name="button2" class="game-button" id="1"></button>
    <button type="button" name="button3" class="game-button" id="2"></button>
  </div>
  <div class="row">
    <button type="button" name="button4" class="game-button" id="3"></button>
    <button type="button" name="button5" class="game-button" id="4"></button>
    <button type="button" name="button6" class="game-button" id="5"></button>
  </div>
  <div class="row">
    <button type="button" name="button7" class="game-button" id="6"></button>
    <button type="button" name="button8" class="game-button" id="7"></button>
    <button type="button" name="button9" class="game-button" id="8"></button>
  </div>
  <div class="new-game" id="new-game">New game?</div>`
}

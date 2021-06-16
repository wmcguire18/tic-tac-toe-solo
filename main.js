var game = new Game();

var newGame = document.querySelector('#newGame');
var gameBoard = document.querySelector("#gameBoard");
var playerOneTurn = document.querySelector("#gameData1");
var playerTwoTurn = document.querySelector("#gameData2");
var playerOneWins = document.querySelector("#player1Wins");
var playerTwoWins = document.querySelector("#player2Wins");


window.addEventListener("load", indicateWins);
newGame.addEventListener("click", loadNewGame);
gameBoard.addEventListener("click", makeMove);

function loadNewGame() {
  clearGameBoard();
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
} else if (game.turn === "Player Two Turn"){
    selectedButton.innerText = "O";
    disableMultiClick(selectedButton);
    playerOneTurn.classList.remove("hidden");
    playerTwoTurn.classList.add("hidden");
  }
  game.updateBoard(selectedButton.id)
  game.toggleTurn()
  winScreen();
}

function winScreen(){
  if (game.checkForWin(game.playerOne)) {
    playerTwoTurn.innerText = "Player One wins!"
    setTimeout(function(){location.reload()}, 300);
  } else if (game.checkForWin(game.playerTwo)) {
    playerOneTurn.innerText = "Player Two wins!"
    setTimeout(function(){location.reload()}, 300);
  } else if (game.turns === 9) {
    playerOneTurn.innerText = "Draw Game!"
    playerTwoTurn.innerText = "Draw Game!"
    setTimeout(function(){location.reload()}, 300);
  }
  indicateWins()
  $(':button').prop('disabled', true);
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

function indicateWins() {
  game.resetBoard();
  playerOneWins.innerHTML = `${game.playerOne.wins} Wins`;
  playerTwoWins.innerHTML = `${game.playerTwo.wins} Wins`;
}


//CREATING A METHOD IN MAIN THAT TRANSFERS GAMEINFO OBJECT DATA TO VISUAL REPRESENTATION.
//ON LOAD, LOAD YOUR GAME, PULL FROM LOCAL STORAGE, UPDATE DOM WITH GLOBAL VARIABLE

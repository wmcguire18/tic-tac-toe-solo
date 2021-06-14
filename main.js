var game = new Game("Player One", "Player Two", "Player One Turn", "Unknown");

var newGame = document.querySelector("#new-game");
var gameBoard = document.querySelector(".game-board");
var playerOneTurn = document.querySelector(".game-data1");
var playerTwoTurn = document.querySelector(".game-data2");


// newGame.addEventListener("click", game.newGame);
// gameBoard.addEventListener("click", game.makeMove);
gameBoard.addEventListener("click", game.toggleTurn);


// makeMove(playerOne, playerTwo) {
//   var selectedButton = event.target.closest(".game-button");
//   if (game.turn === "Player One Turn") {
//     selectedButton.innerText = "X";
//     playerOneTurn.classList.add("hidden");
//     playerTwoTurn.classList.remove("hidden");
//   } else {
//     selectedButton.innerText = "O";
//     playerOneTurn.classList.remove("hidden");
//     playerTwoTurn.classList.add("hidden");
//   }
// }
//
// newGame(playerOne, playerTwo) {
//   this.playerOne = new Player ("Player One", "X", 0);
//   this.playerTwo = new Player ("Player Two", "O", 0);
//   game.isActive = true;
//   var gameButtons = document.getElementsByClassName("game-button");
//   gameButtons.innerText = "";
//   game.turn = "Player Two Turn";
//   playerOneTurn.classList.remove("hidden");
//   playerTwoTurn.classList.add("hidden");
//   newGame.innerText = "Resign?"
// }

var game = new Game("Player One", "Player Two", "P1", "Unknown");

var newGame = document.querySelector("#new-game");
var gameBoard = document.querySelector(".game-board");
var playerOneTurn = document.querySelector(".game-data1");
var playerTwoTurn = document.querySelector(".game-data2");


newGame.addEventListener("click", game.newGame);
gameBoard.addEventListener("click", game.toggleTurn);

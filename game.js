class Game {
  constructor(playerOne, playerTwo, turn, result) {
    this.playerOne = "Player One";
    this.playerTwo = "Player Two";
    this.turn = "Player One Turn" || "Player Two Turn";
    this.result = result;
    this.turns = 0;
  }

  newGame(playerOne, playerTwo) {
    this.playerOne = new Player ("Player One", "X", 0);
    this.playerTwo = new Player ("Player Two", "O", 0);
    var gameButtons = document.getElementsByClassName("game-button");
    gameButtons.innerText = "";
    this.turn = "Player One Turn";
    playerOneTurn.classList.remove("hidden");
    playerTwoTurn.classList.add("hidden");
    newGame.innerText = "Resign?"
  }

  makeMove(playerOne, playerTwo) {
    var selectedButton = event.target.closest(".game-button");
    if (game.turns % 2 === 0) {
      selectedButton.innerText = "X";
      game.turns++;
    } else {
      selectedButton.innerText = "O";
      game.turns++;
    }
  }
};
  //toggleTurn
  //after player1 move (if no result) this.turn = player2
  //player2 has control of the board
  //track status of game board

  //findResult
  //determine if winning combination played OR no win POSSIBLE

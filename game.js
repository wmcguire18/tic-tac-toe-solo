class Game {
  constructor(playerOne, playerTwo, turn, result) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.turn = turn;
    this.result = result;
  }
  newGame() {
    console.log("Game Ready?");
    var playerOne = new Player ("Player One", "X", 0);
    var playerTwo = new Player ("Player Two", "O", 0);
    var gameButtons = document.getElementsByClassName("game-button");
    gameButtons.innerText = "";
    this.turn = playerOne;
    playerOneTurn.classList.remove("hidden");
    newGame.innerText = "Resign?"
  }


  //toggleTurn
  //after player1 move (if no result) this.turn = player2
  //player2 has control of the board
  //track status of game board

  //findResult
  //determine if winning combination played OR no win POSSIBLE
};

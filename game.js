class Game {
  constructor(playerOne, playerTwo, turn, result) {
    this.playerOne = new Player("Player One", "X", 0);
    this.playerTwo = new Player("Player Two", "O", 0);
    this.turn = "Player One Turn";
    this.result = result;
    this.gameboard = ["", "", "", "", "", "", "", "", "",];
  }


  updateBoard(index) {
  if (this.turn === "Player One Turn") {
    this.gameboard[index] = this.playerOne.token;
    this.playerOne.turns.push(index);
    checkForWin(this.PlayerOne);
  } else if (this.turn === "Player Two Turn") {
    this.gameboard[index] = this.playerTwo.token;
    this.playerTwo.turns.push(index);
    checkForWin(this.PlayerTwo);
  }
    checkForDraw();
  }

  resetBoard() {
    this.gameboard = ["", "", "", "", "", "", "", "", "",];
  }

  toggleTurn() {
    console.log(this.turn);
    if (this.turn === "Player One Turn") {
      this.turn = "Player Two Turn";
    } else if (this.turn === "Player Two Turn") {
      this.turn = "Player One Turn";
    }
  }

  checkForWin(player) {
    if (player.turns.includes(0) && player.turns.includes(1) && player.turns.includes(2) ||
    player.turns.includes(3) && player.turns.includes(4) && player.turns.includes(5) ||
    player.turns.includes(6) && player.turns.includes(7) && player.turns.includes(8) ||
    player.turns.includes(0) && player.turns.includes(3) && player.turns.includes(6) ||
    player.turns.includes(1) && player.turns.includes(4) && player.turns.includes(7) ||
    player.turns.includes(2) && player.turns.includes(5) && player.turns.includes(8) ||
    player.turns.includes(0) && player.turns.includes(4) && player.turns.includes(8) ||
    player.turns.includes(8) && player.turns.includes(4) && player.turns.includes(0) ||
    player.turns.includes(2) && player.turns.includes(4) && player.turns.includes(6)) {
      return true;
    }
  }


  checkForDraw() {
    if (!this.gameboard.includes("")) {
      this.result = "Draw";
    }
    }

}

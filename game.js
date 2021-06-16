class Game {
  constructor(playerOne, playerTwo, turn) {
    this.playerOne = new Player("Player One", "X");
    this.playerTwo = new Player("Player Two", "O");
    this.turn = "Player One Turn";
    this.gameboard = ["", "", "", "", "", "", "", "", "",];
    this.turns = 0;
  }


  updateBoard(index) {
  if (this.turn === "Player One Turn") {
    this.gameboard[index] = this.playerOne.token;
    this.playerOne.positions.push(parseInt(index));
    this.turns++;
  } else if (this.turn === "Player Two Turn") {
    this.gameboard[index] = this.playerTwo.token;
    this.playerTwo.positions.push(parseInt(index));
    this.turns++;
  }
  }

  resetBoard() {
    this.gameboard = ["", "", "", "", "", "", "", "", "",];
    this.turn = "Player One Turn";
  };

  toggleTurn() {
    if (this.turn === "Player One Turn") {
      this.turn = "Player Two Turn";
    } else if (this.turn === "Player Two Turn") {
      this.turn = "Player One Turn";
    }
  }

  checkForWin(player) {
    var winScenarios = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6] ];
    for (var i = 0; i < winScenarios.length; i++) {
      if (player.positions.includes(winScenarios[i][0]) && player.positions.includes(winScenarios[i][1]) && player.positions.includes(winScenarios[i][2])) {
        player.retreieveWinsFromStorage();
        player.calculateWins();
        player.saveWinsToStorage();
        console.log(player)
        setTimeout(function(){game.resetBoard();}, 3000);
        return true;
      }
    }
}
}

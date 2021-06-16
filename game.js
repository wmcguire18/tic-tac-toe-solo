class Game {
  constructor() {
    this.playerOne = new Player({id: "Player One", token: "X"});
    this.playerTwo = new Player({id: "Player Two", token: "O"});
    this.turn = "Player One Turn";
    this.gameboard = ["", "", "", "", "", "", "", "", "",];
    this.turns = 0;
  }

  inputToStorage() {
    var gameObject = JSON.stringify(this);
    localStorage.setItem("gameObject", gameObject);
    }

  grabFromStorage() {
    var stringGame = localStorage.getItem("gameObject")
    var gameInfo = JSON.parse(stringGame);
    this.playerOne = new Player(gameInfo.playerOne);
    this.playerTwo = new Player(gameInfo.playerTwo);
    this.turn = gameInfo.turn;
    this.gameboard = gameInfo.gameboard;
    this.turns = gameInfo.turns;
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
    this.playerOne.retreieveWinsFromStorage();
    this.playerTwo.retreieveWinsFromStorage();
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
        player.calculateWins();
        player.saveWinsToStorage();
        setTimeout(function(){game.resetBoard();}, 3000);
        return true;
      }
    }
}
}

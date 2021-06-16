class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 2;
    this.positions = [];
  }
  calculateWins() {
    this.wins++;
    }
  saveWinsToStorage() {
    var inputWins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.id}`, inputWins);
    }

  retreieveWinsFromStorage() {
    var stringScores = localStorage.getItem(`${this.id}`)
    var scores = JSON.parse(stringScores);
    this.wins = scores;
    console.log(scores);
    }

};

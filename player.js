class Player {
  constructor(object) {
    this.id = object.id;
    this.token = object.token;
    this.wins = object.wins || 0;
    this.positions = object.positions || [];
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
    }

};

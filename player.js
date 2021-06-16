class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = 0;
    this.positions = [];
  }
  calculateWins() {
      this.wins++;
    }
  saveWinsToStorage() {
      localStorage.setItem(`${this.id}`, JSON.stringify(this));
    }
  retreieveWinsFromStorage() {
      var scores = JSON.parse(localStorage.getItem (`${this.id}`)) || 0;
      return scores;
    }

};

var newGame = document.querySelector("#new-game");
var gameButton = document.querySelector("#game-button");

gameButton.addEventListener("click", addPlayerIcon);

function addPlayerIcon(){
  gameButton.innerText = "X";
}

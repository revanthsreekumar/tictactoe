const statusDisplay = document.querySelector('#turn');
var boxes=document.querySelectorAll(".column");
var clearAll=document.querySelector("#btn");
let currentPlayer = "X";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function getmark(){
  if(this.textContent == "")
  {
    this.textContent = currentPlayer;
    this.style.color="red";
  }

  handlePlayerChange();
}

function Allclear(){
  for (var i = 0; i < 9; i++) {
      boxes[i].textContent="";
  }
}
clearAll.addEventListener('click', Allclear);

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', getmark);
}

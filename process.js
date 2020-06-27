const statusDisplay = document.querySelector('#turn'); //message showing whose turn
var boxes=document.querySelectorAll(".column"); //all clicks
var clearAll=document.querySelector("#btn");
let currentPlayer = "X";
var gameActive=true;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
//All winning conditions
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameState = ["", "", "", "", "", "", "", "", ""];
statusDisplay.innerHTML = currentPlayerTurn();

// player change
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

//result validation
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];//taking each condition
        let a = gameState[winCondition[0]];//assigning each values
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
       //console.log(winCondition[0])
      //console.log(winCondition[1])
        //console.log(winCondition[2])
        if (a === '' || b === '' || c === '') {
            continue; //skip one loop
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
//draw
    let roundDraw = !gameState.includes(""); // if every box marked
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange(); // no body won or still boxes to be marked

}
function getmark(click){
  if(this.textContent == "" && gameActive != false)
  {
    this.textContent = currentPlayer;
    this.style.color="red";
    const clickedCell = click.target;
    //console.log("clickedcell"+clickedCell)
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index')//passing from html
    );
    //console.log("clickedcell index"+clickedCellIndex)
    gameState[clickedCellIndex] = currentPlayer;
    handleResultValidation();

  }
}
//Reset
function Allclear(){
  for (var i = 0; i < 9; i++) {
      boxes[i].textContent="";
  }
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
}

clearAll.addEventListener('click', Allclear); // if reset button is pressed

// when clicked on box
for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', getmark);
}

let cell = document.querySelectorAll(".cell");
let resetButton = document.querySelector(".reset-button");
let newGameButton = document.querySelector(".new-button");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]; 

const resetGame = () => {
    turnO = true;
    enableCelles();
    msgContainer.classList.add("hide");

};

cell.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(turnO === true){ //player O turn
            cell.innerHTML = "O";
            turnO = false;
        }else{ //player X turn
            cell.innerHTML = "X";
            turnO = true;
        }
        cell.disabled = true; //disable the cell after it's clicked

        checkwinner();
    });
});
const disableCelles = () => {
    for(let cells of cell) {
        cells.disabled = true;
    }
};

const enableCelles = () => {
    for(let cells of cell) {
        cells.disabled = false;
        cells.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableCelles();
};

const checkwinner = () => {
    for(let pattern of winPatterns) {     
    let pos1Val = cell[pattern[0]].innerText;
    let pos2Val = cell[pattern[1]].innerText;
    let pos3Val = cell[pattern[2]].innerText; 
    
    if(pos1Val !== "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        }
    }
  }    
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

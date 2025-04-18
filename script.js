let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let main = document.querySelector(".main");
let video = document.querySelector(".clip");

const playerX=prompt("Enter User-O Name : ");
const playerY=prompt("Enter User-X Name : ");
let turnO = true; //playerX, playerO


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetGame=()=>{
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
  main.classList.remove("hide");
  resetVideo();


}
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText="";

  }
};



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    if (turnO) {
      //playerO
      box.innerText = "O";
      msg.innerText = `Congratulations, Winner is ${playerX}`;
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      msg.innerText = `Congratulations, Winner is ${playerY}`;
      turnO = true;
    }
    box.disabled = true;
     checkWinner();
  });
});


const showWinner = (winner) => {
  msgContainer.classList.remove("hide")
  main.classList.add("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {

        
        showWinner(pos1Val);
        
      }
     
    }

  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

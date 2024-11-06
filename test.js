let button = document.createElement("button");
button.innerText = "Play music";
button.setAttribute("class","music")

let bodytag = document.querySelector("body");

function playmusic(){
    let audio =new Audio("/music/One Piece Uk Drill Gomu Gomu No Feat Ydee G Ls.mp3");
    audio.play();
}
button.addEventListener("click",playmusic);

let gamebox = document.querySelector("#game");
gamebox.after(button);

let boxes = document.querySelectorAll(".btns");
let turnO = true;
boxes.forEach((box) => {
  box.addEventListener("click",() =>{
    console.log("box clicked");
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
  })
});

let Winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];

let disable_Box = () => {
    for (let bts of boxes) {
        bts.disabled = true; 
    }
}
let Enable_Box = () => {
    for (let bts of boxes) {
        bts.disabled = false; 
        bts.innerText = "";
    }
}

let WIN = document.querySelector(".winner_container");
let msg = document.querySelector("#win_tag");
let showWinner = (winner) => {
    msg.innerText = `HOORAY !! WINNER IS ${winner}`;
    WIN.classList.remove("hide");
    disable_Box();
};

let checkWinner = () => {
    for(let patterns of Winpatterns){
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;
        
        if (val1!="" && val2!="" && val3!="") {
            if(val1===val2 && val2===val3){
                
                showWinner(val1);
            }
        }
    }
    checkTie();
};

let checkTie = () => {
    let allBoxesFilled = true;

for (let i = 0; i < boxes.length; i++) {
    let box = boxes[i];
    if (box.innerText === "") {
        allBoxesFilled = false;
        break;
    }
}
    if (allBoxesFilled) {
       
        handleTie();
    }
};

let handleTie = () => {
    console.log("It's a tie! No one wins.");
    msg.innerText = "It's a tie! No one wins.";
    WIN.classList.remove("hide");
};
let RESET = document.querySelector("#RENEW");
let NEW_GAME = document.querySelector("#RENEW2");

let reseting = () => {
    turnO = true;
    Enable_Box();
    WIN.classList.add("hide");
};
RESET.addEventListener("click",reseting);
NEW_GAME.addEventListener("click",reseting);

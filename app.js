let boxes = document.querySelectorAll('.box');
let rbtn = document.querySelector('.rgame');
let msgContainer = document.querySelector('.msg-container');
let nmsg = document.querySelector('#msg');
let newGame = document.querySelector('.ngame')
let turnO = true;
let count = 0;

const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const rstGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw = () => {
    nmsg.innerText = "Game was Draw"
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    nmsg.innerText = `Congragulations Winner Is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const checkWinner = () => {
    for( let pattern of winpat){
        let pos1 = boxes[pattern[0]].innerText ;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
}
rbtn.addEventListener('click',rstGame);
newGame.addEventListener('click',rstGame);
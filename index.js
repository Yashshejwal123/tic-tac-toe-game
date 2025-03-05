let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#reset-btn");
let turnO = true;
let msg = document.querySelector("#msg");
let newGameBtn= document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
const WinPatterns =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,8],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

]

const ResetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");
    enableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
console.log("box was clicked");
if(turnO){
    box.innerText = "O";
    turnO = false;
}
else{
    box.innerText="X";
    turnO = true;

}
box.disabled = true;
checkWinner();
    });

});
const  disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const  enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const ShowWinner= (winner) =>{
    msg.innerText = `Le Re Land Ke Jeet Gaya Tu ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}
const checkWinner = ()=>{
for(let pattern of WinPatterns){

let posval1 = boxes[pattern[0]].innerText;
let posval2 = boxes[pattern[1]].innerText;
let posval3 = boxes[pattern[2]].innerText;
if(posval1!=""  && posval2!= "" && posval3 != ""){
if(posval1=== posval2 && posval2 === posval3){

    console.log("winner",posval1);
    ShowWinner(posval1);
}


}

}


};
newGameBtn.addEventListener("click",ResetGame);
ResetBtn.addEventListener("click",ResetGame);


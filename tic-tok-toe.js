let msg = document.querySelector("#msg");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
// let noWinner = document.querySelector(".noresult");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");


//turn x and 0  ??//

let turnO = true;

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


boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        // if 1st is o then alter native it will be x;//
        if(turnO === true){
            box.innerHTML = "O";
            box.style.color="red";
            turnO = false;
        }else{
            box.innerHTML = "x";
            box.style.color="blue";
            turnO = true;
        }
        //to disable the button once clicked;//
        box.disabled = true;
        checkWinner(); 
    });
});


const disablaBoxes = ()=>{
    for (let box of boxes){
        box.disabled = true;   //

    }
}

const enablaBoxes = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML= "";
    }
}

let showWinner = (winner)=>{
    
    msg.innerHTML =`Congratulation , Winner is -${winner}`;
    msgContainer.classList.remove("hide");
    disablaBoxes();
}

// const noWinnerrr = () =>{

//     noWinner.innerHTML="Good try; wnna play again ?";
// }

// chack winner ; 
let checkWinner = () => {
    for (let pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerHTML; 
        let posVal2 = boxes[pattern[1]].innerHTML;
        let posVal3 = boxes[pattern[2]].innerHTML;

        if( posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 === posVal2 && posVal2 === posVal3){
                showWinner(posVal1); 
                console.log(posVal1);    
            }else{
                // noWinnerrr();
            }
        }
    }
};


const resetGame = ()=>{

    turnO = true;
    enablaBoxes();
    msgContainer.classList.add("hide");   

};

 newGameBtn.addEventListener("click" , resetGame);
 resetBtn.addEventListener("click", resetGame);

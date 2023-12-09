let gameSeq=[];
let userSeq=[];

let started = false;
let level=0;
let h2=document.querySelector("h2");
let btns=['red','blue','orange','purple'];

document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game started");
        started=true;

        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove('flash');
    } , 250);


}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranIdx=Math.floor(Math.random()*4);
    let rancolor=btns[ranIdx];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameSeq.push(rancolor);
    btnFlash(ranbtn);

}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerText=`Game Over! Your score is ${level}
        Press any key to restart`;
        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}
let gameseq=[];
let userseq=[];

let colors=['box1','box2','box3','box4'];
let gamestart=false;
let level=0;
let i=0;

let  h3=document.querySelector("h3");


document.addEventListener("keypress",()=>{
    if(gamestart==false){
        console.log("game is started");
        gamestart=true;
        level=0;
        let result=document.querySelector(".result");
        result.innerHTML="";
        levelup();
    }
})


function btnflash( rand){ 

    // console.log("here we in the flash section..")
    rand.classList.add("flash");
    setTimeout(() => {
        rand.classList.remove("flash");
    }, 300);

}

function userflash( rand){ 

    // console.log("here we in the flash section..")
    rand.classList.add("userflash");
    setTimeout(() => {
        rand.classList.remove("userflash");
    }, 300);

}


function checkseq(a){

    // console.log("i am working fine");
    let ind=a-1;
    console.log(a);
    if(userseq[ind]==gameseq[ind]){
        console.log("i am working");
        if(a===gameseq.length){
            console.log(userseq);
            setTimeout(()=>{

                levelup();
            },1500);
        }
    }else{
        gamestart=false;
        let result=document.querySelector(".result");
        result.innerHTML=`Your score : ${level-1}`;
        h3.innerHTML=`You lose! press any key to start`;
    }    
}

function levelup(){
    // console.log(userseq);
    userseq=[];
    level++;
    h3.innerHTML=`Level ${level}`;

    let ind=Math.floor(Math.random()*4);
    // console.log(ind);
    let randcolor=colors[ind]
    // console.log(randcolor);
    let ranbtn=document.querySelector(`.${randcolor}`);
    
    // console.log(ranbtn);
    gameseq.push(randcolor); //add color in gameseq array..
    // console.log(gameseq);
      btnflash(ranbtn);


}



function btnpress(){
//  console.log(this);
let btn=this; //that button that was clicked..full element are passed with div and all class.

userseq.push(btn.getAttribute("id")); //return the value of the id..
// console.log(userseq);

 userflash(btn);
 console.log(userseq.length);
 checkseq(userseq.length);


} 

let boxes=document.querySelectorAll(".box");
for(box of boxes){
    box.addEventListener("click",btnpress);
}


   


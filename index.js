let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".btn");
let newgamebtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let msgcont= document.querySelector(".msgcont");
// we need variables to play game 
/// we have alternate turns in this game 

//let we have two players named player X and player O
let turn0 = true ; // player0 and playerX will print 
// if trun0 will true = player0 and if turn0 will false= playerX

// now we have to store all winning patters  . for this we use arrays
// we use 3d array 
let winpatterns = [[0,1,2],
                   [0,4,8],
                   [0,3,6],
                   [1,4,7],
                   [2,5,8],
                   [2,4,6],
                   [3,4,5], 
                   [6,7,8]
                  ];
// we have to perform something or print something if we click on this buttons 
// so we can add event listeners to each buttons 
let changecolor=()=>{
    box
}
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
       console.log("box was clicked"); 
       // we have to write two vals X and 0 and this will tell our turn variable that whether we have to use X and 0 when we click th button 
       if(turn0 ===true){
          box.innerText="0";
          box.style.color= "black";
          turn0=false;
       }
       else{
        box.innerText="X";
        box.style.color= "green";
        turn0=true;
       }
       box.disabled = true; // ek bar likhne ke bad change nhi hoga fix ho jayega value button ka 
       // for every button click we have to check whether one team is winning or not 
       checkwiinner();  
   });
});
let winnermsg=(winner)=>{
   msg.innerText=`congratulations, winner is ${winner}`;
   disablebtn();
   msgcont.classList.remove("hide");

}
let enableboxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }

}
let disablebtn=()=>{
    for(let box of boxes){
        box.disabled = true;
    } 
}
let checkwiinner = () =>{
    for(let pattern of winpatterns){
    //    console.log(pattern[0],pattern[1],pattern[2]);
              let pos1 = boxes[pattern[0]].innerText;
              let pos2 = boxes[pattern[1]].innerText;
              let pos3 = boxes[pattern[2]].innerText;
              // we check whether this 3 positions are filled or empty 
              if(pos1!="" && pos2!="" && pos3!=""){
                // then check whether its equal or not 
                if(pos1===pos2 && pos2===pos3){
                    winnermsg(pos1);
                }
              }
    }  
  };
  let reset=()=>{
         turn0= false;
         enableboxes();
         msgcont.classList.add("hide");
  }

  //
  newgamebtn.addEventListener("click",()=>{
    reset();
  });
  resetbtn.addEventListener("click",()=>{
    reset();
  });







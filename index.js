var classname,x,y;

function rename(){
  if(document.body.clientWidth<1028)
   {
    document.querySelector("span").innerHTML="Tap";
   }
}

function imageupdate(classname,x){
  if(x===3)
   document.querySelector(classname).setAttribute("src","images/dice3.png")
  else if (x===4)
   document.querySelector(classname).setAttribute("src","images/dice4.png")
  else if (x===5)
   document.querySelector(classname).setAttribute("src","images/dice5.png")
  else if (x===6)
   document.querySelector(classname).setAttribute("src","images/dice6.png")
  else if (x===1)
   document.querySelector(classname).setAttribute("src","images/dice1.png")
  else if (x===2)
   document.querySelector(classname).setAttribute("src","images/dice2.png")
}

function resultprint(x,y){
  if(x>y)
      document.querySelector("h1").innerHTML="Player1 Wins";

   else if(x<y)
        document.querySelector("h1").innerHTML="Player2 Wins";

   else if(x===y)
        document.querySelector("h1").innerHTML="Draw";
}


function diceroll(){
 var randomNumber1,randomNumber2;
 randomNumber1=Math.floor((Math.random()*6)+1);
 randomNumber2=Math.floor((Math.random()*6)+1);
 console.log(randomNumber1)
 console.log(randomNumber2)
 imageupdate(".img1",randomNumber1)
 imageupdate(".img2",randomNumber2)
 resultprint(randomNumber1,randomNumber2)

 if(document.body.clientWidth<1028)
      document.querySelector("a").innerHTML="Tap to Play Again";
  else
      document.querySelector("a").innerHTML="Click to Play Again";
}

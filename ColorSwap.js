let score= 0;
localStorage.setItem("score", score);
let speed =1.2
let bar = document.getElementById("bar");
let wbar=document.getElementById("wbar");
let barcol = null;
let barcolors =null;
let spown =800
let up=0
let textscore=document.getElementById("score")

//audio
let removeball1 =document.getElementById("remove1")
let removeball2 =document.getElementById("remove2")
let removeball3 =document.getElementById("remove3")
let removeball4 =document.getElementById("remove4")
let removeball5 =document.getElementById("remove5")
let removeball6 =document.getElementById("remove6")
let removeball7 =document.getElementById("remove7")
let removeball8 =document.getElementById("remove8")
let barchange1 =document.getElementById("barchange1")
let barchange2 =document.getElementById("barchange2")
let barchange3 =document.getElementById("barchange3")
let lose =document.getElementById("lose")


let removenum=1
let barchangenum=0

localStorage.setItem("up",up)



document.onkeydown=function (k) {
   if (k.key===" ") {barcolor()}
}

setInterval(()=>{
      speed = speed*1.025
},2000)

function barcolor() {
          //if (barchangenum==0) {barchangenum++}
             //else if (barchangenum==1) {barchange1.play(),barchangenum++}
             //else if (barchangenum==2) {barchange2.play(),barchangenum++}
             //else if (barchangenum==3) {barchange3.play(),barchangenum=1}

   if (bar.className=="bar"){
     bar.className="wbar"
     barcolors= wbar
     barcol = wbar.getBoundingClientRect()
   }
   else if (bar.className=="wbar"){
     bar.className="bar"
     barcolors= bar
     barcol = bar.getBoundingClientRect()
   }
   else {
      bar.className="bar"
      barcolors= bar
      barcol = bar.getBoundingClientRect()
   }

}
function move(ball,startY=-5) {

   let y=startY


    function bmove(){
   y+=speed
   ball.style.top = y+'vh'
   const blackcol = ball.getBoundingClientRect()
  
   
   if (barcolors==bar) {
       if (ball.className=="bball"&& blackcol.bottom>=barcol.top) {
      ball.remove() 

       if (removenum==1) {removeball1.play(),removenum++}
         else if (removenum==2) {removeball2.play(),removenum++}
         else if (removenum==3) {removeball3.play(),removenum++}
         else if (removenum==4) {removeball4.play(),removenum++}
         else if (removenum==5) {removeball5.play(),removenum++}
         else if (removenum==6) {removeball6.play(),removenum++}
         else if (removenum==7) {removeball7.play(),removenum++}
         else if (removenum==8) {removeball8.play(),removenum=1}


            for (let i = 0; i < 6; i++){
      let sbball=document.createElement("div")
      let sballcreator=document.getElementById("sballcreator")
      sbball.style.left = "0px";
      sbball.style.top = "0px";
      sbball.style.transform = "translate(-50%, -50%)";
      sbball.className="sbball"
      min=10
      max=50
      let hi=Math.random()*(max-min)+min
      sbball.style.height = hi + "px"
      sbball.style.width  = hi + "px"
      sballcreator.appendChild(sbball)
      smove(sbball)}
      function smove(sball,startY=0,startX=0) {
         let y=startY
         let x=startX
         let yvelocity=-10
         let max=6
         let min=-6
         let xvelocity=Math.random()*(max-min)+min
         let gravity=0.8
         sball.style.opacity="1"
         requestAnimationFrame(sbmove)
         function sbmove() {
                y+=yvelocity
                yvelocity+=gravity
                sball.style.top=y+"px"
                
                x+=xvelocity
                sball.style.left=x+"px"
                sball.style.opacity -= 0.02

                if (sball.style.opacity <= 0) {
                  sball.remove()
                }
                requestAnimationFrame(sbmove)
         }


      }
      
      textscore.innerText=score
      textscore.style.animation="popscore 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) alternate"
      if (score>=100 && score<450) {textscore.style.color="rgba(180,180,180)"}
         else if (score>=450) {textscore.style.color="gold"}
            else{textscore.style.color="black"
                 textscore.style.opacity=1}
      
      localStorage.setItem("score", score);

      bar.style.animation="pop 0.2s alternate"

      setTimeout(()=>{
         bar.style.animation="none"
         textscore.style.animation="none"
      },210)

      if (score<10) {score+=1}
      else if (score<30) {score+=2}
      else if (score<60) {score+=3}
      else if (score<100) {score+=4}
      else if (score<150) {score+=5}
      else if (score<210) {score+=6}
      else if (score<280) {score+=7}
      else if (score<360) {score+=8}
      else if (score<450) {score+=9}
      else {score+=10}

       }
       else if (ball.className=="wball"&& blackcol.bottom>=barcol.top){
                        speed=0
                        ball.style.animation="endpop 0.5s forwards"
                        bar.style.animation="endpop 0.5s forwards"
                        setTimeout(()=>{gameover()},2)
   }}
   else if (barcolors==wbar){
    if (ball.className=="wball"&& blackcol.bottom>=barcol.top) {
      ball.remove()

       if (removenum==1) {removeball1.play(),removenum++}
         else if (removenum==2) {removeball2.play(),removenum++}
         else if (removenum==3) {removeball3.play(),removenum++}
         else if (removenum==4) {removeball4.play(),removenum++}
         else if (removenum==5) {removeball5.play(),removenum++}
         else if (removenum==6) {removeball6.play(),removenum++}
         else if (removenum==7) {removeball7.play(),removenum++}
         else if (removenum==8) {removeball8.play(),removenum=1}


      for (let i = 0; i < 6; i++){
      let sbball=document.createElement("div")
      let sballcreator=document.getElementById("sballcreator")
      sbball.style.left = "0px";
      sbball.style.top = "0px";
      sbball.style.transform = "translate(-50%, -50%)";
      sbball.className="swball"
      min=10
      max=50
      let hi=Math.random()*(max-min)+min
      sbball.style.height = hi + "px"
      sbball.style.width  = hi + "px"
      sballcreator.appendChild(sbball)
      smove(sbball)}
      function smove(sball,startY=0,startX=0) {
         let y=startY
         let x=startX
         let yvelocity=-10
         let max=6
         let min=-6
         let xvelocity=Math.random()*(max-min)+min
         let gravity=0.8
         sball.style.opacity="1"
         requestAnimationFrame(sbmove)

         function sbmove(argument) {
         
                y+=yvelocity
                yvelocity+=gravity
                sball.style.top=y+"px"
                
                x+=xvelocity
                sball.style.left=x+"px"
                sball.style.opacity -= 0.02

                if (sball.style.opacity <= 0) {
                  sball.remove()
                }
                requestAnimationFrame(sbmove)
         }



      }



      textscore.innerText=score
      textscore.style.animation="popscore 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) alternate"
      if (score>=100 && score<450) {textscore.style.color="rgba(180,180,180)"}
      else if (score>=450) {textscore.style.color="gold"}
      else{textscore.style.color="white"
            textscore.style.opacity=1}
      localStorage.setItem("score", score);

      bar.style.animation="pop 0.2s alternate"

      setTimeout(()=>{
         bar.style.animation="none"
         textscore.style.animation="none"
      },210)

           if (score<10) {score+=1}
      else if (score<30) {score+=2}
      else if (score<60) {score+=3}
      else if (score<100) {score+=4}
      else if (score<150) {score+=5}
      else if (score<210) {score+=6}
      else if (score<280) {score+=7}
      else if (score<360) {score+=8}
      else if (score<450) {score+=9}
      else {score+=10}

                  }
         else if (ball.className=="bball"&& blackcol.bottom>=barcol.top){
                        speed=0
                        ball.style.animation="endpop 0.2s forwards"
                        bar.style.animation="endpop 0.2s forwards"
                        setTimeout(()=>{gameover()},2)
         }
   }
   
    requestAnimationFrame(bmove)
}
requestAnimationFrame(bmove)
   
}
function gameover() {
   window.location.href="ColorSwapover.html"
   
}

function interval() {
   

  if (speed>0.9) {
      let cho=Math.floor(Math.random()*2)
      spown=1800/(2*speed)
      clearInterval(yo)
      yo = setInterval(interval,spown)

     if(cho==1){bball =document.createElement("div")
     bball.className="bball"
     document.body.appendChild(bball); 
     move(bball)  }  

     else{
        wball =document.createElement("div"),
     wball.className="wball"
     document.body.appendChild(wball); 
     move(wball)
   }
  }
 }

     let yo =setInterval(interval,spown)


barcolor()


let firsttime=0

function backgroundcreate() {
   let backy=null
   if (firsttime==0) {backy=50
                      firsttime++}
                   else{backy=-50}
   let mainback= document.createElement("div")
   mainback.className="mainback"
   document.body.appendChild(mainback)

if (window.innerWidth>window.innerHeight) {
   for (let i = 0; i < 11; i++) {
      let backbar =document.createElement("div")
      backbar.className="backbar"
      backbar.style.top=10*i+"%"
      if (i%2==0) {backbar.style.backgroundColor="#16ba00"}

      mainback.appendChild(backbar)}
}
else{
      for (let i = 0; i < 13; i++) {
      let backbar =document.createElement("div")
      backbar.className="backbar"
      backbar.style.top=8.4*i+"%"
      if (i%2==0) {backbar.style.backgroundColor="#16ba00"}

      mainback.appendChild(backbar)}
}
   


   
   for (let i = 0; i < 2; i++) {
      let longbar =document.createElement("div")
      longbar.className="longbar"
      if (i%2==0) {
         longbar.style.left=0
      }
      else{longbar.style.right=0}

      mainback.appendChild(longbar)
   }

function backmove() {

   backy+=0.2
   mainback.style.top=backy+"%"
   if (backy>=150) {backy=-50}
   requestAnimationFrame(backmove)
}
   requestAnimationFrame(backmove)
}


backgroundcreate()
backgroundcreate()

// variables
let num1 = document.querySelector(".firstNum")
let num2 = document.querySelector(".secondNum")
let num3 = document.querySelector(".thirdNum")
const spinBtn = document.querySelector(".spin")
const spinBtn2 = document.querySelector(".spin2")

const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")

const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const pic7 = document.querySelector(".pic7")
const pic8 = document.querySelector(".pic8")
const pic9 = document.querySelector(".pic9")
let time = 0;
let timerTest = 0
let timerTest2 = 0
let timerTest3 = 0
let picTime = 0
// let time=0;
const picCount = 3;
const picHeight = 50;
console.log(pic1)
// TIMER
function timer(){
    
   setInterval(function(){
        if(time<10){
            time++
            // console.log(time)
        } else{
            clearInterval(time)
            clearInterval()
        }
    }, 1000);    
}

// SPIN NUMBERS BUTTON
let num = 0;
function spinNumbers(){
  
        // num1.innerHTML= picArray3[Math.floor(Math.random() * 2)]

        num1.innerHTML = Math.floor(Math.random() * 2)
        num2.innerHTML = Math.floor(Math.random() * 2)
        num3.innerHTML = Math.floor(Math.random() * 2)
        console.log(num1.innerHTML, num2.innerHTML, num3.innerHTML)
        num++
        // console.log(num)   
    
    if (num1.innerHTML == num2.innerHTML && num1.innerHTML == num3.innerHTML){
        console.log("you win")
    }
    
}
// spinBtn.addEventListener("click", spinNumbers)

var currentPic=1;
let delta = picHeight*currentPic
let currentPic2 = 1;
let delta2 = picHeight*currentPic2
let currentPic3 = 1;
let delta3 = picHeight*currentPic3


// spinBtn.addEventListener("click", spin)
function spin(){
 
    spinBtn.onclick = changePic()
    spinBtn.onclick = changePic2()
    spinBtn.onclick = changePic3()
    spinBtn.onclick = timer()
    console.log(currentPic)

  }
  

function changePic(){
    const intTimer =setInterval(function(){
      if (currentPic<3){
          pic1.style.transform += `translateY(${delta}px)`
          pic4.style.transform += `translateY(${delta}px)`
          pic7.style.transform += `translateY(${delta}px)`
          currentPic++
        } else {
            pic1.style.transform = `translateY(0)`
            pic4.style.transform = `translateY(0)`
            pic7.style.transform = `translateY(0)`
            currentPic=1
        }
    timerTest+=200
    if(timerTest===3000){
        clearInterval(intTimer)
        timerTest=0
    }
    }, 200); 
    
}    




function changePic2(){
    const intTimer2=setInterval(function(){
        if (currentPic2==2){
           
            pic2.style.transform = `translateY(-50px)`
            pic5.style.transform = `translateY(-50px)`
            pic8.style.transform = `translateY(-50px)`
            currentPic2++
            
        
        } else if (currentPic2==3){
            pic2.style.transform = `translateY(0)`
            pic5.style.transform = `translateY(0)`
            pic8.style.transform = `translateY(0)`
            currentPic2=1
            
        } else if (currentPic2==1){    
            pic2.style.transform += `translateY(50px)`
            pic5.style.transform += `translateY(50px)`
            pic8.style.transform += `translateY(50px)`
            currentPic2++
            
        }
        timerTest2+=200
        if(timerTest2===3000){
            clearInterval(intTimer2)
            timerTest2=0
        }
    }, 200); 
} 



function changePic3(){
    const intTimer3 = setInterval(function(){
        if (currentPic3==2){
            pic3.style.transform = `translateY(-50px)`
            pic6.style.transform = `translateY(-50px)`
            pic9.style.transform = `translateY(-50px)`
            currentPic3++
        } else if (currentPic3==3){
            pic3.style.transform = `translateY(0)`
            pic6.style.transform = `translateY(0)`
            pic9.style.transform = `translateY(0)`
            currentPic3=1
        } else if (currentPic3==1){    
            pic3.style.transform += `translateY(-100px)`
            pic6.style.transform += `translateY(-100px)`
            pic9.style.transform += `translateY(-100px)`
            currentPic3++
        }
        timerTest3+=200
        if(timerTest3===3000){
            clearInterval(intTimer3)
            timerTest3=0
        }
    }, 200);    
}
// EVERYTHING BEFORE THIS IS FOR OLD LAYOUT


var pic10 = document.querySelector("pic10")
var pic11 = document.querySelector(".pic11")
var pic12 = document.querySelector(".pic12")
var bidAmount = document.querySelector("#bidAmount").innerHTML
console.log(bidAmount)
// var total = document.querySelector(".total").innerHTML
console.log(total)

const gallery = ["https://i.imgur.com/rCyJ3nK.jpg", "https://i.imgur.com/vtvGZ4I.jpg", "https://i.imgur.com/caEfCVG.jpg"]
console.log(gallery)


spinBtn2.addEventListener("click", spin2)
function spin2(){
    spinBtn2.onclick = randomPic()
    console.log(total)
}

var x = document.getElementById("container")
var y = document.querySelector("body")
console.log(y)
function randomPic(){
    const picTimer = setInterval(function(){
        document.querySelector(".pic10").src = gallery[Math.floor(Math.random() * 3)]
        document.querySelector(".pic11").src = gallery[Math.floor(Math.random() * 3)]
        document.querySelector(".pic12").src = gallery[Math.floor(Math.random() * 3)]
        picTime+=100
        if(picTime===1000){
            clearInterval(picTimer)
            picTime=0
        }
        if (picTime===0&&document.querySelector(".pic10").src===document.querySelector(".pic11").src&& document.querySelector(".pic10").src===document.querySelector(".pic12").src){
            document.querySelector(".title").innerText= "YOU WIN!"
            bankWon()
        } else {
            document.querySelector(".title").innerText= "Play to Win"
        }
    },150)  
    bankLoss()
}

function bankLoss(){
    
    var bankStart = document.querySelector("#total").innerText
    var bidAmount = document.querySelector("#bidAmount").value
    document.querySelector("#total").innerHTML = bankStart-bidAmount
  
}
function bankWon(){
    var bankStart = document.querySelector("#total").innerText
    var bidAmount = document.querySelector("#bidAmount").value
    document.querySelector("#total").innerHTML = +bankStart+ +bidAmount*10
}



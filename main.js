// variables

const spinBtn2 = document.querySelector(".spin2")
let picTime = 0
var pic10 = document.querySelector("pic10")
var pic11 = document.querySelector(".pic11")
var pic12 = document.querySelector(".pic12")
var bidAmount = document.querySelector("#bidAmount").innerHTML
const gallery = ["https://i.imgur.com/rCyJ3nK.jpg", "https://i.imgur.com/vtvGZ4I.jpg", "https://i.imgur.com/caEfCVG.jpg", "https://i.imgur.com/vdTuUFS.jpg"]

//FUNCTIONS

spinBtn2.addEventListener("click", spin2)
function spin2(){
    spinBtn2.onclick = randomPic()
    spinBtn2.onclick = bankLoss()
    spinBtn2.onclick = spinSound.play()
    spinBtn2.onclick = winSound.pause()
    document.querySelector(".youWin").innerHTML = "&#10024"
    // document.querySelector(".youWin2").innerHTML = "&#10024"
  
}

function randomPic(){
    const picTimer = setInterval(function(){
        document.querySelector(".pic10").src = gallery[Math.floor(Math.random() * 4)]
        document.querySelector(".pic11").src = gallery[Math.floor(Math.random() * 4)]
        document.querySelector(".pic12").src = gallery[Math.floor(Math.random() * 4)]
        picTime+=100
        if(picTime===2000){
            clearInterval(picTimer)
            picTime=0
            spinSound.pause()
        }
        if (picTime===0&&document.querySelector(".pic10").src===document.querySelector(".pic11").src&& document.querySelector(".pic10").src===document.querySelector(".pic12").src){
            document
            bankWon()
        } else {
            // document.querySelector(".title").innerText= "Spin to Win"
            // console.log(picTime)
        }
    },100)  
}

// WIN AND LOSS FUNCTIONS
function bankLoss(){
    var bankStart = document.querySelector("#total").innerText
    if (bankStart>0){
    var bankStart = document.querySelector("#total").innerText
    var bidAmount = document.querySelector("#bidAmount").value
    document.querySelector("#total").innerHTML = bankStart-bidAmount
    } else if (bankStart<=0){
        bankStart=0
        gameOver()
    }    
}
function bankWon(){
    var bankStart = document.querySelector("#total").innerText
    var bidAmount = document.querySelector("#bidAmount").value
    document.querySelector(".youWin").innerHTML = "YOU WIN!"
    // document.querySelector(".youWin2").innerHTML = "YOU WIN!"
    document.querySelector("#total").innerHTML = +bankStart+ +bidAmount*10
    winSound.play()
}
// GAME OVER FUNCTION
function gameOver(){
    window.location.href= "./gameover.html"
}
// AUDIO FUNCTIONS
const spinSound = new Audio()
spinSound.src = "./spinner sound longest.mp3"
spinSound.volume = .02
const winSound = new Audio ()
winSound.src = "./slot-machine-102137.mp3"
winSound.volume = .02

// variables
let num1 = document.querySelector(".firstNum")
let num2 = document.querySelector(".secondNum")
let num3 = document.querySelector(".thirdNum")
const spinBtn = document.querySelector(".spin")
const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")
const picCount = 3;
const picHeight = 50;
console.log(picHeight)


// Spin Function
let num = 0;
function spinNumbers(){
  
        num1.innerHTML= Math.floor(Math.random() * 5)
        num2.innerHTML = Math.floor(Math.random() * 5)
        num3.innerHTML = Math.floor(Math.random() * 5)
        console.log(num1.innerHTML, num2.innerHTML, num3.innerHTML)
        num++
        console.log(num)   
    
    if (num1.innerHTML==num2.innerHTML && num1.innerHTML == num3.innerHTML){
        console.log("you win")
    }
    
}
spinBtn.addEventListener("click", spinNumbers)

// function changingNum(){
//     while (num<10){
//         num++
//         spinNumbers()
//         console.log(num)
//     }
// }
let currentPic=1;
let delta = picHeight*currentPic
function changePic(){
    if (currentPic<3){
        pic1.style.transform += `translateY(${delta}px)`
        pic2.style.transform += `translateY(${delta}px)`
        pic3.style.transform += `translateY(${delta}px)`
        currentPic++
    } else {
        pic1.style.transform = `translateY(0)`
        pic2.style.transform = `translateY(0)`
        pic3.style.transform = `translateY(0)`
        currentPic=1
    }
}
setInterval(changePic, 500)

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
const picArray = document.querySelector(".picsWheel").children
const picArray2 =["https://i.imgur.com/rCyJ3nK.jpg","https://i.imgur.com/J7NYqGu.jpg","https://i.imgur.com/0p69VFG.jpg"]
const picArray3 = [pic1, pic2, pic3]
console.log(picArray3)


let num = 0;
function spinNumbers(){
  
        // num1.innerHTML= picArray3[Math.floor(Math.random() * 2)]

        num1.innerHTML = Math.floor(Math.random() * 2)
        num2.innerHTML = Math.floor(Math.random() * 2)
        num3.innerHTML = Math.floor(Math.random() * 2)
        console.log(num1.innerHTML, num2.innerHTML, num3.innerHTML)
        num++
        // console.log(num)   
    
    if (num1.innerHTML==num2.innerHTML && num1.innerHTML == num3.innerHTML){
        console.log("you win")
    }
    
}
spinBtn.addEventListener("click", spinNumbers)

let currentPic=1;
let delta = picHeight*currentPic
function changePic(){
    if (currentPic<3){
        pic1.style.transform += `translateY(${delta}px)`
        currentPic++
    } else {
        pic1.style.transform = `translateY(0)`
        currentPic=1
    }
}
setInterval(changePic, 200)


let currentPic2 = 1;
let delta2 = picHeight*currentPic2
function changePic2(){
    if (currentPic2==2){
        pic2.style.transform = `translateY(-50px)`
        currentPic2++
      
    } else if (currentPic2==3){
        pic2.style.transform = `translateY(0)`
        currentPic2=1
    } else if (currentPic2==1){    
        pic2.style.transform += `translateY(50px)`
        currentPic2++
    }
}
setInterval(changePic2, 200)

let currentPic3 = 1;
let delta3 = picHeight*currentPic3
function changePic3(){
    if (currentPic3==2){
        pic3.style.transform = `translateY(-50px)`
        currentPic3++
    } else if (currentPic3==3){
        pic3.style.transform = `translateY(0)`
        currentPic3=1
    } else if (currentPic3==1){    
        pic3.style.transform += `translateY(-100px)`
        currentPic3++
    }
}
setInterval(changePic3, 200)
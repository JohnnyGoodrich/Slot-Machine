// variables
let num1 = document.querySelector(".firstNum")
let num2 = document.querySelector(".secondNum")
let num3 = document.querySelector(".thirdNum")
const spinBtn = document.querySelector(".spin")

const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")

const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const pic7 = document.querySelector(".pic7")
const pic8 = document.querySelector(".pic8")
const pic9 = document.querySelector(".pic9")

const picCount = 3;
const picHeight = 50;
console.log(pic1)
// const picArray = document.querySelector(".picsWheel").children
// const picArray2 =["https://i.imgur.com/rCyJ3nK.jpg","https://i.imgur.com/J7NYqGu.jpg","https://i.imgur.com/0p69VFG.jpg"]
// const picArray3 = [pic1, pic2, pic3]
// console.log(picArray3)


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
// spinBtn.addEventListener("click", spinNumbers)
spinNum=1
function spin(){
    if (spinNum<20){
        setInterval(changePic, 200)
        spinNum++
    } 
}
spinBtn.addEventListener("click", spin)
let currentPic=1;
let delta = picHeight*currentPic
let currentPic2 = 1;
let delta2 = picHeight*currentPic2
let currentPic3 = 1;
let delta3 = picHeight*currentPic3

function spin(){
    spinBtn.onclick = changePic()
    spinBtn.onclick = changePic2()
    spinBtn.onclick = changePic3()

}

function changePic(){
  
    setInterval(function(){
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
    }, 200);
}    
// setInterval(changePic, 200)



function changePic2(){
    setInterval(function(){
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
    }, 200); 
}
// setInterval(changePic2, 200)


function changePic3(){
    setInterval(function(){
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
    }, 200);    
}
// setInterval(changePic3, 200)
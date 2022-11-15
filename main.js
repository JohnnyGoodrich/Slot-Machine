// variables
let num1 = document.querySelector(".firstNum")
let num2 = document.querySelector(".secondNum")
let num3 = document.querySelector(".thirdNum")
const spinBtn = document.querySelector(".spin")
console.log(num1)


// Spin Function
function spinNumbers(){
 
    num1.innerHTML= Math.floor(Math.random() * 5)
    num2.innerHTML = Math.floor(Math.random() * 5)
    num3.innerHTML = Math.floor(Math.random() * 5)
    console.log(num1.innerHTML, num2.innerHTML, num3.innerHTML)
   
    if (num1.innerHTML==num2.innerHTML && num1.innerHTML == num3.innerHTML){
        console.log("you win")
    }

}
spinBtn.addEventListener("click", spinNumbers)


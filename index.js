const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const number = document.querySelector(".number");


num = Number(number.textContent)
increase.addEventListener("click",function (){
    num +=1   
    number.innerHTML = num 
})
decrease.addEventListener("click",function (){
    num -=1   
    number.innerHTML = num 
})
reset.addEventListener("click",function (){
    num = 0;
    number.innerHTML = num 
})
"use strict";

let p1Counter = document.getElementById("p1Counter");
let p2Counter = document.getElementById("p2Counter");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let reset = document.getElementById("reset");
let input = document.getElementById("input");
let goal = document.getElementById("goal");

let number1 = 0;
let number2 = 0;
let maxNumber = 5;
goal.textContent = `Playing to: ${maxNumber}`;

btn1.addEventListener("click", function(){
    if(number1 < maxNumber && number2 < maxNumber){
        number1++;
        p1Counter.textContent = number1;
     }  if(number1 == maxNumber){
        p1Counter.style.color = "green";
      } 
});

btn2.addEventListener("click", function(){
    if(number2 < maxNumber && number1 < maxNumber){
    number2++;
    p2Counter.textContent = number2;
    } if(number2 == maxNumber){
        p2Counter.style.color = "green";
    }
});

input.addEventListener("change", function(){
   maxNumber = input.value;
   goal.textContent = `Playing to: ${maxNumber}`;
});

reset.addEventListener("click", function(){
    number1 = 0;
    p1Counter.textContent = number1;
    p1Counter.style.color = "black";
    number2 = 0;
    p2Counter.textContent = number2;
    p2Counter.style.color = "black";
});

//Exercise 1
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(' '));

//Exercise 2
let fruit="banana";
let veg="cabbage";

fruit = ("c" + (fruit.slice(1)));
veg= ("b" + (veg.slice(1)));

let both = `${fruit} ${veg}`;

console.log(both);

//Exercise 3
let num1 = parseFloat(prompt("Please enter the first number"));
let num2= parseFloat(prompt("Please enter the second number"));
alert(num1 + num2);

//BONUS

let operator=prompt("Choose an operator!");
let firstNum =parseFloat(prompt("Please choose your first number!"));
let secondNum= parseFloat(prompt("Please choose your second number!"));

if (
    operator === "+" ){
        alert(firstNum + secondNum)
    }
    else if (
        operator === "-"){
            alert(firstNum - secondNum)
    }
    else if (
        operator=== "*"){
            alert(firstNum * secondNum)
    }
    else {
        alert(firstNum / secondNum)
    };
     
    
    




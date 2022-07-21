//Exercise 1
let sumCalc = (num1, num2) => num1+num2

//Exercise 2
function decleration(kg){
    return kg*1000+"gr"
}
console.log(decleration(1))

let expression= function(kg) {
    return kg*1000+"gr"
}
console.log(expression(2))
//Function expressions can be used as an argument to another function, but function declarations cannot.

let arrow = (kg) => kg*1000+"gr";
console.log(arrow(3));

//Exercise 3
(function(){
    let newP=document.createElement("p")
    let body=document.querySelector("body")
    child="14"
    spouse="Sara Netanyahu"
    job="Hitman"
    country="Shanghai"
    newP.innerText=(`You will be a ${job} in ${country}, and married to ${spouse} with ${child} kids.`)
    body.append(newP)
})();


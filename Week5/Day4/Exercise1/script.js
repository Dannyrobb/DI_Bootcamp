//1
// let hello = (e) => {
//     alert("hello world")
// }
// setTimeout(hello , 2000);
//2
// let newP = () => {
//     let div=document.querySelector("#container");
//     let newP=document.createElement("p");
//     newP.innerText=("Hello World");
//     div.append(newP);
// }
// setTimeout(newP, 2000)
//3
let newP = () => {
    let div=document.querySelector("#container");
    let newP=document.createElement("p");
    newP.innerText=("Hello World");
    div.append(newP);
}
let interval= setInterval(newP, 2000)
let btn= document.querySelector("button");
let plsStahp= () => {
    clearInterval(interval)
}
btn.addEventListener("click",plsStahp )


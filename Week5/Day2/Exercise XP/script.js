//Exercise 1
console.log(document.querySelector("h1").innerText)
const article = document.querySelector("article");
article.removeChild(article.lastElementChild);
const h2=document.querySelector("h2");
h2.addEventListener("click",() => {
h2.style.color="red"
})
const h3= document.querySelector("h3");
h3.addEventListener("click",() =>{
    h3.style.display="none";
})

let boldIt =() => {
article.style.fontWeight="bold"
}
//Exercise 2
let form=document.forms[0];
console.log(form)
let formInput1=document.querySelector("#fname")
console.log(formInput1)
let formInput2=document.querySelector("#lname")
console.log(formInput2)
let inputsByName=document.getElementsByName("fname")
console.log(inputsByName)
let inputsByName2=document.getElementsByName("lname")
console.log(inputsByName2)
//after many attempts, hours, could not push the input value to li.
let ul=document.querySelector("ul");
form.addEventListener("submit", (e)=>{
e.preventDefault()
let form= e.target
let inputs=form.querySelectorAll("input")
console.log(inputs)
inputs.forEach(input=>
    console.log(input.value))
})

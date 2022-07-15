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
let ul=document.querySelector("ul");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let fname= form.fname.value;
    let lname= form.lname.value;
    li1= document.createElement("li")
    li1.innerText=fname;
    li2= document.createElement("li")
    li2.innerText=lname;
    ul.append(li1);
    ul.append(li2);
    form.lname.value= '';
    form.fname.value= '';
})



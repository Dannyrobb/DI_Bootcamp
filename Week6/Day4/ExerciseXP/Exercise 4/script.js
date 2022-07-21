(function(){
let container=document.querySelector(".container-fluid")
let user=document.createElement("div")
let username="John"
user.innerText=username
container.append(user)
let img = document.createElement("img");
img.src = "./img/icon.png";
user.append(img)

})()
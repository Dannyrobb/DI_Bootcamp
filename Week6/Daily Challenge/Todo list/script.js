//Hi Adane. I did my best .. completed after almost 4 hours without bonus.Hopefully I can get better in time.
let listTasks= [];
let btn=document.querySelector("#add")
let form = document.forms[0];  
let ul= document.querySelector("ul")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputValue = form.item.value;
    if (inputValue.length > 0 && listTasks.includes(inputValue)=== false){
       listTasks.push(inputValue);
       for(let i=0; i<listTasks.length; i++){
        if (listTasks[i] === inputValue){
        let li = document.createElement("li");
        li.innerHTML=`<button class="xBtn"><i class="fa-solid fa-x"></i></button> <input type="checkbox" class="checkbox">`;
        let text = document.createTextNode(form.item.value)
        li.append(text)
        ul.append(li);
        form.item.value = "";  
        }
       }
    }
    else{
        alert("Cannot add empty or duplicate item")
    }
} )


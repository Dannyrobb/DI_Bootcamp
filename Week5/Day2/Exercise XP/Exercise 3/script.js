let allBoldItems;
let getBold_items= () => {
    allBoldItems= document.querySelectorAll("strong")
    return(allBoldItems)
}
console.log(allBoldItems);
let highlight=(arr) =>{
    for(let i=0; i<arr.length;i++){
        arr[i].style.color="blue"
    }
}
let boldItems= getBold_items();
//highlight(boldItems);
let return_normal=(arr) =>{
    for(let i=0; i<arr.length;i++){
        arr[i].style.color="black"
    }
}
//return_normal(boldItems);
//could not do 5.





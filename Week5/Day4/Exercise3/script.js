const box = document.querySelector("#box")
box.addEventListener('dragstart', dragStart)
function dragStart(e){
    e.dataTransfer.setData('text/plain', e.target.id)
}

const bigBox = document.querySelector("#target")
bigBox.addEventListener("dragenter", dragEnter);
bigBox.addEventListener("dragover", dragOver);
bigBox.addEventListener("dragleave", dragLeave);
bigBox.addEventListener("drop", drop);

function dragEnter(e){
    e.preventDefault();
}

function dragOver(e){
    e.preventDefault(); 
}

function dragLeave(e){
    
}

function drop(e){
    let id= e.dataTransfer.getData('text/plain');
    let draggable= document.getElementById(id)
    e.target.appendChild(draggable);
}
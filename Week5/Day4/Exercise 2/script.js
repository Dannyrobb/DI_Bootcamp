function myMove() {
    let redBox = document.querySelector("#animate")
    let pos = 0;
    let interval = setInterval(mover ,10);
    function mover() {
        if(pos === 350) {
            clearInterval(interval)
        } else {
            pos++;
            redBox.style.left=`${pos}px`;
        }
    }
}
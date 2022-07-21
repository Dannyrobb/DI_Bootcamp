let form =document.forms[0];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let r= form.radius.value;
    let volume= form.volume.value;
    form.radius.value='';
    form.volume.value= (4/3) * 3.1415926535 * (r*r*r);
})
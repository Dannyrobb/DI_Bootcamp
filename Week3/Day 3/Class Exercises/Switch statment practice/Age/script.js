let age = prompt("How old are you?");
age= parseInt(age);
switch (true){
    case age<18:
        alert("Ah yes. A CHILD.");
        break;
    case 30>age>18:
        alert("Confusing times indeed");
        break;
    case 40>age>30:
        alert("Midlife CRISIS");
        break;
    case age>40:
        alert("Hopefully you've got your shit together.");
        break;
    case age>60:
        alert("Retired finalllllyyyyy!!!!!!!!!!!!!!!!");
    default:
        alert("Ok something is not working.");
    
}
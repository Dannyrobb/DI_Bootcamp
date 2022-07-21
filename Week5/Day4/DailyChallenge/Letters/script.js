function allLetter(inputtxt)
    { 
    let letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters))
    {
    alert('Good Job');
    return true;
    }
    else
    {
    alert('Please input alphabet characters only');
    return false;
    }
}
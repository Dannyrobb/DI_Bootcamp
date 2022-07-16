let form =document.forms[0];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let noun= form.noun.value;
    let adjective= form.adjective.value;
    let person= form.person.value;
    let verb= form.verb.value;
    let place= form.place.value;
    if(noun.length > 0 && adjective.length > 0 && person.length > 0 && verb.length > 0 && place.length > 0){
        console.log(`Yesterday I decided to eat the biggest ${noun} I could find. Unfortunatly it did not fit in my mouth, so ${person} helped me push it down my throat. The experience was ${adjective}. Maybe next time I should go to ${place} so I can ${verb} with no issue.`)
        form.noun.value='';
        form.adjective.value='';
        form.person.value='';
        form.verb.value='';
        form.place.value='';     
    }
        else{ console.log("Please fill out all the inputs")
    }
})
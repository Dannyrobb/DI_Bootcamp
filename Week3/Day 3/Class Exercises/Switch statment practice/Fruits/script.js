let fruit =prompt("Which fruit would you like to buy?");
switch(fruit){
    case ('Apple'):
         alert("An Apple! That will be one dollar");
    break;
    case ('Pear'):
        alert("A Pear! That will be 2 dollars!");
    break;
    case ('Banana'):
    case ('Lemon'):
        alert(`A ${fruit}! That will be 3 dollars!`);
    default:
        alert(`I'm sorry. Unfortunatly we don't have ${fruit}'s in stock at the moment.`)
    
}
// Exercise 1 pt1
// let infoAboutMe = () => console.log("Hello. my name is Daniel. I am 25 and studying Javascript.");
// infoAboutMe();

//Exercise 1 pt2
// let infoAboutPerson = (personName, personAge, personFavoriteColor) => console.log(`Your name is ${personName}, you are ${personAge} years old and your favorite color is ${personFavoriteColor}`);
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

//Exercise 2
// let calculateTip= () => {
// let bill= Number(prompt("What is the amount of the bill?"));
// switch (true){
//     case bill<50:
//         alert(`The tip for ${bill}$ is ${bill * 0.2}$.Total ammount do is ${bill + bill * 0.2}$`);
//         break;
//     case 50<bill<200:
//         alert(`The tip for ${bill}$ is ${bill * 0.15}$.Total ammount do is ${bill + bill * 0.15}$`);
//         break;
//     case bill>200:
//         alert(`The tip for ${bill}$ is ${bill * 0.1}$.Total ammount do is ${bill + bill * 0.1}$`);

//     }
// }
// calculateTip()

//Exercise 3
// let outcome = []
// let sum = 0
// let isDivisible = () => {
//     for (let i=0;i<=500;i++){
//         if (i%23 === 0){
//           outcome.push(i);
          
//         }
//         if(i%23 === 0){
//             sum = i + sum;
//         }
//     } 
// } 
// isDivisible();
// console.log(outcome.join(' '));
// console.log(sum);

//Exercise 4
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana","orange","apple"];
// let myBill = (shoppingList)=> {
//     let total=0;
//     for(let i=0;i<shoppingList.length;i++){
//         let listItem= shoppingList[i];
//         if (listItem in stock && stock[listItem] >1){
//          total+= prices[listItem]&&stock[listItem -1];
//        }
//     } 
    
//     return total;
// }

// let result= myBill(shoppingList);
// console.log(result);

//Exercise 5
// let changeEnough = (itemPrice, amountOfChange)=>{
//     let canOrCannot=itemPrice
//     let vals=[.25, .1, .05, .01]
//     for (let index=0; index<amountOfChange.length;index++){
//         const element= amountOfChange[index] * vals[index];
//         canOrCannot-=element
//         if(canOrCannot < 0)return true
//     }
//     return false

// }

//Exercise 6
// let hotelCost= ()=> {
//     let viableInput
//     let nights
//     do{
//         nights=prompt("How many nights?")
//         console.log (isNaN(Number(nights)))
//         viableInput= isNaN(Number(numNight))?true: nights === ""
//     }
//     while(!viableInput)
//     return 140* Number(numNight)
//     }


// let planeRideCost=() =>{
//     let destination= prompt("What is your destination?");
//     destination= destination.toLowerCase;
//     switch (destination){
//         case "london": return "183$";
//         case "paris": return "220$";
//         default: return "300$";
        
//     }
//     let finalCost= planeRideCost()
// }    
//     planeRideCost()

   












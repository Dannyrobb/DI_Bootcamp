//Exercise 2
// function winBattle(){
//     return true;
// }

// let winBattle = () => true;
// let experiencePoints = winBattle() === true ? 10 : 1
// console.log(experiencePoints)

//Exercise 3
// let isString= (value) => {
//     return typeof value === "string" ? true : false;
// }
// console.log(isString('hello'));
// console.log(isString([1, 2, 4, 0]))

//Exercise 4
// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let colorChoices = () => {
//     for (let i=0; i<colors.length; i++){
//         console.log(`${i+1}# choice is ${colors[i]}.`)
       
          
//     }
//     if (colors.some((checker) => { 
//         return (checker ==="Violet");}) ===true){
//             console.log("Yeah")
//         }
//         else{
//             console.log("Noo...")}
    
// }
// colorChoices()

//Exercise 5 // exercise Failed
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
function colorChoice(colorsArray, ordinalsArray) {
    colorsArray.forEach((element, index) => {
        const humanIndex = index+1;
        const ordinal=ordinalGetter(humanIndex, ordinalsArray)
        console.log(`${humanIndex}${ordinal} choice is ${element}`)
    });
}

function ordinalGetter(index, ordinalsArray) {
const ordinal = (index<3) ? ordinalsArray[index]:ordinalsArray[0];
return ordinal;
}
//Exercise 1
const language = prompt("What is the main language you speak?");
const languageLc= language.toLowerCase();
switch(languageLc){
    case "french":
        console.log("Bonjour")
    break;
    case "english":
        console.log("Hello")
    break;
    case "hebrew":
        console.log("Shalom")
    break;
    default:
        console.log( "01110011 01101111 01110010 01110010 01111001");
}
//Exercise 2
let userGrade = Number(prompt("Hello user. Please insert your numeric grade:"));
    switch(true){
        case userGrade > 90:
            console.log("A")
        break;
        case 80 < userGrade:
            console.log("B")
        break;
        case 69 < userGrade :
            console.log("C")
        break;
        case userGrade < 70:
            console.log("D");
    }
//Exercise 3
let verb = prompt("Please write one verb");
switch(true){
    case verb.length > 2 && verb.indexOf("ing")=== -1:
        console.log(`${verb}ing`);
    break;
    case verb.length > 2 && verb.indexOf("ing") !==-1:
        console.log(`${verb}ly`);

    
}
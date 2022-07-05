let userWords= prompt("pls nums seperated by comas")
let usersWordsArr= userWords.split(",")

let firstAndlastRow= () => {
    let biggestWord = usersWordsArr[0]
    usersWordsArr.forEach((elem) => {
        if (biggestWord.length <elem.length){
            biggestWord= elem
        }
    })

}
let otherRows= (string)=> {
    let toReturn= `* ${string} *`
}
let createTheFrame= () => {
    let toReturn =`${firstAndlastRow()}
    usersWordsArr.forEach(element => {

    })
    toReturn+=firstAndlastRow()
}

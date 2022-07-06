
    
let createTheFrame= () => {
    let userWords= prompt("pls nums seperated by comas")
    let usersWordsArr= userWords.split(",")
    let biggestWord = usersWordsArr[0]
    usersWordsArr.forEach((elem) => {
        if (biggestWord.length <elem.length){
            biggestWord= elem
        }
    })
    let biggestWordLength=biggestWord.length
    let firstAndlastRow= () => {
       
        return "*".repeat(biggestWordlength+4)
    }
    let otherRows= (string)=> `* ${string}${" ".repeat(biggestWordLength - (string.length))} *\n`
    let toReturn =`${firstAndlastRow()}\n`
    usersWordsArr.forEach(element => {
    toReturn+=otherRows(element)
});
    toReturn+=firstAndlastRow()
    console.log(createTheFrame())
    return toReturn
}





//pt 1
// function makeJuice(size){
//     function addIngredients(ing1, ing2, ing3){
//         const body= document.querySelector("body")
//         const sentence=document.createElement("p")
//         sentence.innerText=(`The client wants a ${size} juice, containing ${ing1}, ${ing2} and ${ing3}`)
//         body.append(sentence)
//     }
//     addIngredients()
// }
// makeJuice()

//pt 2
function makeJuice(size){
    let ingredients=[]
    function addIngredients(ing1, ing2, ing3){
        const body= document.querySelector("body")
        const sentence=document.createElement("p")
        ingredients.push(ing1, ing2, ing3)
        sentence.innerText=(`The client wants a ${size} juice, containing ${ing1}, ${ing2} and ${ing3}`)
        body.append(sentence)
    }
    addIngredients("banana","apple","pear")
    
    function displayJuice(){
        const body= document.querySelector("body")
        const sentence=document.createElement("p")
        sentence.textContent=(`The client wants a ${size} juice, containing`)
        ingredients.forEach((e, i) => {
            if (i>0){
        let newnode= document.createTextNode(` ,${e}`)
        sentence.append(newnode)
        body.append(sentence)
            }else{
                let newnode= document.createTextNode(` ${e}`)
                sentence.append(newnode)
                body.append(sentence)   
            }
        })
       }
   displayJuice()
}
makeJuice()

//Hi adane. was not able to complete Exercise 5 PT II Question 4. But the most is done !

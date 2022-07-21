let quotesArray=[
    {id: 0, author:"Oscar Wild", quote:"Be yourself; everyone else is already taken."},
    {id: 1,author:"Mae West" , quote:"You only live once, but if you do it right, once is enough"},
    {id: 3,author:"Mahatma Gandhi" , quote:"Be the change that you wish to see in the world."},
    {id: 4,author:"Robert Frost" , quote:"In three words I can sum up everything I've learned about life: it goes on."},
    {id: 5,author:"J.K. Rowling" , quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals"},
    {id: 6,author:"Elbert Hubbard" , quote:"A friend is someone who knows all about you and still loves you"},
]
const generate=document.querySelector("button")
generate.addEventListener("click",()=>{
 let newArr= quotesArray.map(e=>e.id )
 console.log(newArr)
 let randomQuote=quotesArray.find(e=>{
 let random=Math.floor(Math.random() * (newArr.length))
 return e.id === random})
 console.log(randomQuote.quote)
})
 

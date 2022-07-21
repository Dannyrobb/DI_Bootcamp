let client = "Betty";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        payed : false,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries= () => {
    groceries.fruits.forEach((e) => console.log(e))
}
displayGroceries()

let cloneGroceries= () => {
    let user=client
    let shopping=groceries
    console.log(shopping)
}
cloneGroceries()
// We will see that if we run the function after client has been changed user changes too,
 //when you run the function it fetches clients definition from the global scope.
 
 //When changing totalPrice we will see it change in shopping too.
 // With Objects- when saving it to another variable it refrences the
 //place in memory.
 
 
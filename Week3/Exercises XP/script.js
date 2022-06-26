// Exercise 1
const food = "burgers";
const meal = "dinner";
console.log(`I eat ${food} at every ${meal}`);

// Exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength= myWatchedSeries.length;
let myWatchedSeriesSentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}.`;
console.log (myWatchedSeriesSentence);

//Exercise 2 part 2
myWatchedSeries[2] = "friends";
myWatchedSeries.push("the boys");
myWatchedSeries.unshift("southpark");
myWatchedSeries.splice(1,1);
//**
console.log(myWatchedSeries);
//Exercise 3
let tempC= 30
let tempF= tempC * 9 / 5 + 32;
console.log(`${tempC}°C is ${tempF}°F`);

//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //1.first expression
// Prediction: 55 Numbers add together will always be numbers unless strings.
// Actual:55

a = 2;

console.log(a+b) //2. second expression
// Prediction:23 Numbers add together will always be numbers unless strings.
// Actual:23

//3. c=undefined We did not define c.

//4.
console.log(3 + 4 + '5');
//Outcome will be 75. A number thats a string gets placed nexto the previous number without being calculated.

//Exercise 5
console.log(typeof(15))
// Prediction: number -numbers are numbers unless they are strings.
// Actual:number
console.log(typeof(5.5))
// Prediction: number -numbers are numbers unless they are strings.
// Actual:number

console.log(typeof(NaN))
// Prediction:number - NaN is a numeric type.
// Actual:number

console.log(typeof("hello"))
// Prediction:string paranthesis is string.
// Actual:string

console.log(typeof(true))
// Prediction:boolean true/false = booleans
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction: boolean !=not. (1 not = 2 )= true
// Actual:boolean

console.log("hamburger" + "s")
// Prediction:hamburgers- paranthesis is string.
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:hamburger paranthesis is string.
// Actual: NaN. Cannot subtract from string :)

console.log("1" + "3")
// Prediction:13 paranthesis is string.
// Actual:string

console.log("1" - "3")
// Prediction: -2 Cannot subtract from string only add.
// Actual:-2

console.log("johnny" + 5)
// Prediction:johnny5
// Actual:johnny5 paranthesis makes numbers is string

console.log("johnny" - 5)
// Prediction: NaN cannot subtract from string
// Actual:Nan

console.log( 99 * "hello")
// Prediction: hello 99 times.
// Actual:NaN. Cannot multiply Strings!!!!!

console.log(1 != 1)
// Prediction: false - false statment
// Actual:false

console.log(1 == "1")
// Prediction:true. Two == allow to compare pure values.
// Actual:true

console.log(1 === "1")
// Prediction:false.  cant compare numbers and strings .
// Actual:false

//Exercise 6:
console.log(5 + "34")
// Prediction: 534 A number thats a string gets placed nexto the previous number without being calculated.
// Actual: 534

console.log(5 - "4")
// Prediction:NAN 
// Actual:1

console.log(10 % 5)
// Prediction:0 % operator returns the remainder of two numbers.
// Actual:0

console.log(5 % 10)
// Prediction:5 The % operator returns the remainder of two numbers.
// Actual:5

console.log("Java" + "Script")
// Prediction:JavaScript Strings no space add together
// Actual:Javascript

console.log(" " + " ")
// Prediction:"  "    String...
// Actual:"  "

console.log(" " + 0)
// Prediction: 0 as string. when adding number to string it becomes string.
// Actual:0

console.log(true + true)
// Prediction:2. js converts true to 1 
// Actual:2

console.log(true + false)
// Prediction:1 js converts false to 0.
// Actual:1

console.log(false + true)
// Prediction:1 js false to 0 & true to 1 
// Actual:1 js false to 0.

console.log(false - true)
// Prediction: -1 js false to 0 & true to 1 
// Actual:-1

console.log(!true)
// Prediction:false opisit of true
// Actual:false

console.log(3 - 4)
// Prediction:-1 numbers act usually
// Actual:-1

console.log("Bob" - "bill")
// Prediction:NaN cannot subtract from string
// Actual: Nan





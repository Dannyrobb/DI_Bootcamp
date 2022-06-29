//Exercise 1| All predictions correct
5 >= 1 //true 5 is greater than 1
0 === 1 // false are not equal
4 <= 1 //false 1 is not bigger or equal to 4
1 != 1 //false 1 is not equal to opisit of 1
"A" > "B"// false A smallest z biggest
"B" < "C"// TRUE A smallest z biggest
"a" > "A" // TRUE A smallest z biggest
"b" < "A"// false A smallest z biggest
true === false // false .true is in fact true and not false
true != true // false true is equal to true

//Exercise 2

let nums= prompt("Please enter a string of numbers with comas seperating between them").split(",");
let sum= 0;
for (let i= 0;i<nums.length;i++){
     sum += parseInt(nums[i]);
};
console.log(sum);


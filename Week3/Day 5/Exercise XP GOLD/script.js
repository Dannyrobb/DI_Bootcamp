//Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7];
for ( let i = 0; i<numbers.length;i++){
    if (numbers[i]%3 ===0){
        console.log(`${numbers[i]}: true`)
    }else{console.log(`${numbers[i]}: false`)}
}
//Exercise 2
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
  let names= prompt("What is your name?");
  if (names in guestList){
    console.log(`Hi! I'm ${names}, and I'm from ${guestList[names]}.`)
  } else {console.log("Hi! I'm a guest.")};

  //Exercise 3 PT 1
  let age = [20,5,12,43,98,55];
  let total=0;
  for (let i=0; i<age.length;i++){
    total=total +age[i]
  }
  console.log(total);
  //PT2
  let highest=age[0];
  for (let i=0; i<age.length ;i++){
    if(highest<age[i]){
            highest=age[i];
    }
}
console.log(highest)

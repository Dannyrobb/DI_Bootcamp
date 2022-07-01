// //Exercise 1 pt 1
let people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2,1,"Jason");
people.push("Daniel");
console.log(people.indexOf("Mary"));
let arr2 = people.slice(1);
people.indexOf("foo");// Shows -1 because foo does not exist in array
let last = people[people.length - 1];
console.log(last);

// //Exercise 1 pt 2
for (let i = 0; i<people.length;i++){
    console.log(people[i]);
}

for (let i = 0; i<people.length; i++){
    if (i ===3){
    break;}
    console.log(people[i])
}

 //Exercise 2

let colors= ["Black", "White", "Gold", "Silver"]
    for (let i=0; i < colors.length; i++){
        if (i===0) {console.log(`${colors[i]} is my favorite color!`)
            }else if(i===1){console.log(`${colors[i]} is my 2nd favorite color!`)
            }else if(i===2){console.log(`${colors[i]} is my 3rd favorite color!`)
            }else {console.log(`${colors[i]} is my 4th favorite color!`)}
    }

//Exercise 3
let num = Number(prompt("Hello user. Enter a number."));
while ( num < 11){
    num = Number(prompt("Hello user. Enter a number.")); 
}

//Exercise 4
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor);
console.log(`${building.nameOfTenants[0]} ${building.numberOfRoomsAndRent.sarah[0]}`);
if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1]= 1200
}
console.log(building);

//Exercise 5
let family={
    dad: "Shaul",
    mom: "Yael",
    eldest: "Daniel",
    youngest: "Tom"
}
for (const i in family){
    console.log(i)
}
for (const i in family){
    console.log(family[i])
}

//Exercise 6
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  for (let i in details){
    console.log(`${Object.keys(details)[0]} ${Object.values(details)[0]} ${Object.keys(details)[1]} ${Object.values(details)[1]} ${Object.keys(details)[2]} ${Object.values(details)[2]}`);
  }
//Exercise 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
console.log(names);
// WAY 1 :console.log(names[0][0]+names[1][0]+names[2][0]+names[3][0]+names[4][0]+names[5][0]);
//WAY 2:
let map1= names.map((name) => name[0]).join('');
console.log(map1);


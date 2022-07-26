//Exercise 4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);
// Object

//Exercise 5
//Option Number 2 is the answer.
//When extending a class & wanting to retrieve and use the same properties
//super is needed. when adding a new property its added to the parameters &
//with this keyword ( I THINK !)

//Exercise 6
//1 Both are false. The content may be the same but they are kept in diffrent places in memory.

//2
const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5 }; //5

object1.number = 4;
console.log(object2.number); //4
console.log(object3.number); //4
console.log(object4.number); //5
// On the top they are all 5 because they are
// equal to object 1, same place in memory(except 4 which is defined on its own)
//On the bottom object2,3 are changing because they are equal to object 1
//Object 4 has nothing to do with Object 1 s0 he stays 5

//1
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
//2
class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(sound) {
    return `${sound} I'm a ${this.type} named ${this.name} and i'm ${this.color}`;
  }
}
//3
const farmerCow = new Mamal("Lily", "Cow", "Brown and White");
console.log(farmerCow.sound("Moooooo"));

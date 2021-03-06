//Exercise 1
//------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result); // ['bread','carrot','potato','chicken','apple', 'orange']

//------2------
const country = "USA";
console.log([...country]); // ['U','S','A']

//------Bonus------
let newArray = [...[, ,]];
console.log(newArray); //"undefined";

//Exercise 2
let users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
//1
let newUsers = users.map((e) => {
  return `Hello ${e.firstName}`;
});

//2
let filteredArr = users.filter((e) => {
  return e.role === "Full Stack Resident";
});

//3
let epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];
let reduction = epic.reduce((prev, cur) => {
  return `${prev} ${cur}`;
});

//4
let students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

let filteredArr2 = students.filter((e) => {
  return e.isPassed === true;
});

filteredArr2.forEach((e) => {
  console.log(`Good job ${e.name}, you passed the course in ${e.course}.`);
});

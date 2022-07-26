//Exercise 1
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//Exercise 2
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

//Exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersObject = Object.entries(users);
usersObject.forEach((e) => {
  e[1] = e[1] * 2;
});

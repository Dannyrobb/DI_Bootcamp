const fullName = document.getElementById("name");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const birthYear = document.getElementById("birth-year");
const homeWorld = document.getElementById("home-world");
const button = document.getElementById("button");
const info = document.querySelectorAll(".infos");
const loading = document.querySelector("#loading");

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 82);
  return randomNumber;
}
function getRandomUrl() {
  const url = `https://www.swapi.tech/api/people/${getRandomNumber()}`;
  return url;
}

async function getChar(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  let character = data.result.properties;
  return character;
}

async function fetchHomeWorld(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data.result.properties.name;
}

function displayChar(obj, planet) {
  fullName.textContent = obj.name;
  height.textContent = "Height: " + obj.height;
  gender.textContent = "Gender: " + obj.gender;
  birthYear.textContent = "Birth Year: " + obj.birth_year;
  homeWorld.textContent = "Planet: " + planet;
}

async function display() {
  info.forEach((e) => {
    e.textContent = "";
  });
  loading.style.display = "unset";
  const obj = await getChar(getRandomUrl()).then((char) => {
    return char;
  });
  const planetName = await fetchHomeWorld(obj.homeworld).then((planet) => {
    return planet;
  });
  displayChar(obj, planetName);
  loading.style.display = "none";
}

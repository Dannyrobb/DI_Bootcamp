const form = document.forms[0];
const cardDiv = document.querySelector("#cardContainer");
let cities = [];
let unit = "metric";
function search(e) {
  e.preventDefault();
  let cityVal = form.search.value;
  let city = cityVal.charAt(0).toUpperCase() + cityVal.slice(1);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=1&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Please enter a valid city`);
    } else {
      let response = JSON.parse(this.responseText);
      try {
        let lon = response[0].lon;
        let lat = response[0].lat;
        cities.push({
          cityName: city,
          longitude: lon,
          latitude: lat,
        });
        let xhr = new XMLHttpRequest();
        xhr.open(
          "GET",
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
        );
        xhr.send();
        xhr.onload = function () {
          if (xhr.status != 200) {
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
          } else {
            const response = JSON.parse(this.responseText);
            console.log(response);
            const iconCode = response.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            const newCard = document.createElement("div");
            const topCard = document.createElement("div");
            const bottomCard = document.createElement("div");
            const cityName = document.createElement("h2");
            const countryName = document.createElement("h3");
            const temps = document.createElement("p");
            const image = document.createElement("img");
            const description = document.createElement("p");
            const button = document.createElement("button");
            button.innerText = "x";
            button.classList.add("x");
            button.addEventListener("click", () => {
              newCard.remove();
              cities = cities.filter((currentCity) => {
                if (currentCity.cityName !== city) {
                  return true;
                }
                return false;
              });
            });
            image.src = iconUrl;
            temps.classList.add("temp");
            cityName.classList.add("city");
            countryName.classList.add("country");
            newCard.classList.add("card");
            bottomCard.classList.add("bottomCard");
            description.classList.add("description");
            temps.textContent = Math.round(response.main.temp) + "°C";
            cityName.innerText = city;
            countryName.innerText = response.sys.country;
            description.textContent = response.weather[0].description.toUpperCase();
            cardDiv.append(newCard);
            newCard.append(topCard, bottomCard);
            topCard.append(cityName, countryName, button);
            bottomCard.append(temps, image, description);
          }
        };
      } catch {
        alert("Please enter a valid city");
      }
    }
    form.search.value = "";
  };
}

form.addEventListener("submit", search);

let clickState = 0;
document.querySelector("#btn2").addEventListener("click", change);
function change() {
  if (unit === "metric") {
    unit = "imperial";
  } else {
    unit = "metric";
  }
  let cardList = document.querySelectorAll(".card");
  cities.forEach((currentCity) => {
    let xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.latitude}&lon=${currentCity.longitude}&units=${unit}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`
    );
    xhr.send();
    xhr.onload = function () {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        const response = JSON.parse(this.responseText);
        const newTemp = Math.round(response.main.temp);
        const tempSuffix = unit === "metric" ? "°C" : "°F";
        cardList.forEach((card) => {
          if (card.querySelector(".city").innerText == currentCity.cityName) {
            card.querySelector(".temp").innerText = newTemp + tempSuffix;
          }
        });
      }
    };
  });
}

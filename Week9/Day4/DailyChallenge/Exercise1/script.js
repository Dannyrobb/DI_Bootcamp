//Exercise1
const arr = [Promise.resolve(3), Promise.resolve(4), Promise.resolve(5)];

function resolver(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].then((resolve) => newArr.push(resolve));
  }
  console.log(newArr);
}

//Exercise 2
const form = document.forms[0];
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const lat1 = form.lat1.value;
//   const long1 = form.long1.value;
//   const lat2 = form.lat2.value;
//   const long2 = form.long2.value;
//   form.lat1.value = "";
//   form.long1.value = "";
//   form.lat2.value = "";
//   form.long2.value = "";
//   const response1 = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${long1}`);
//   console.log(response1);
//   //   const result1 = await response1.json();
//   const response2 = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${long2}`);
//   console.log(response2);
//   //   const result2 = await response2.json();
//   Promise.all([response1, response2]);
// });
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.sunrise-sunset.org/json?lat=48.864716&lng=2.349014");
xhr.send();
xhr.onload = function () {
  if (xhr.status != 200) {
    console.log("Error");
  } else {
    console.log(JSON.parse(this.responseText));
  }
};

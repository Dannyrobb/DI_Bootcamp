//Exercise 1
function compareToTen(num) {
  const compare = new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("Under 10");
    } else {
      reject("Over 10");
    }
  });
  return compare;
}

//Exercise 2
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success"), reject("Ooops something went wrong");
  }, 4000);
});

newPromise
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((reject) => {
    console.log(reject);
  });

const newPromise2 = Promise.resolve("Success2");
newPromise2.then((value) => {
  console.log(value);
});

//Exercise 3
const newPromise3 = Promise.resolve(3);
newPromise3.then((value) => {
  console.log("value");
});

const newPromise4 = Promise.reject("Boo!");
newPromise.then((value) => {
  console.log(value);
});

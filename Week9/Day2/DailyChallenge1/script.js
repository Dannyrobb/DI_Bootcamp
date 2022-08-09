const testArray1 = ["cat", "dog", 1];
const testArray2 = ["cat", "dog", "cow", "water buffalo"];
const testArray3 = ["cat", "dog", "cow", "water buffalo", "gecko"];
function makeAllCaps(arr) {
  let counter = 0;
  const promise = new Promise((resolve, reject) => {
    arr.forEach((e) => {
      if (typeof e === "string") {
        counter++;
      }
    });
    if (counter === arr.length) {
      resolve(arr.map((e) => e.toUpperCase()));
    } else {
      reject("Array is not all strings.");
    }
  });
  return promise
    .then((resolve) => {
      console.log(resolve);
    })
    .then(sortWords(arr))
    .catch((error) => {
      console.log(error);
    });
}

function sortWords(capsArr) {
  const promise = new Promise((resolve, reject) => {
    if (capsArr.length > 4) {
      resolve(capsArr.sort());
    } else {
      reject("Array is not bigger than 4.");
    }
  });
  return promise
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((error) => {
      console.log(error);
    });
}

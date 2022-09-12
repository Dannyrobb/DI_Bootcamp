const fs = require("fs");

fs.readFile("./RightLeft.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    let position = 0;
    const dataArr = data.split("");
    dataArr.forEach((arrow) => {
      if (arrow === "<") {
        position -= 1;
      } else if (arrow === ">") {
        position += 1;
      }
    });
    if (position > 0) {
      console.log(position + " steps to the right");
    } else {
      console.log(position * -1 + " steps to the left");
    }
  }
});

fs.readFile("./RightLeft.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    let position = 0;
    let steps = 0;
    const dataArr = data.split("");
    while (position !== -1) {
      for (let i = 0; position !== -1; i++) {
        if (dataArr[i] === "<") {
          position -= 1;
          steps += 1;
        } else if (dataArr[i] === ">") {
          position += 1;
          steps += 1;
        }
      }
      console.log("first time in the left side in: " + steps + " steps");
    }
  }
});

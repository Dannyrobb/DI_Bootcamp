let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs(jsonObj) {
  return new Promise((resolve, reject) => {
    if (JSON.parse(jsonObj)) {
      resolve(JSON.parse(jsonObj));
    } else {
      reject("Nope");
    }
  });
}

function toMorse(jsObj) {
  return new Promise((resolve, reject) => {
    let word = prompt("Enter a word or Sentence").toLowerCase();
    let wordSplit = word.split("");
    let newArr = [];
    wordSplit.forEach((letter) => {
      if (Object.keys(jsObj).includes(letter)) {
        newArr.push(jsObj[letter.replaceAll('"', "")]);
      } else {
        reject("Sorry bye");
      }
    });
    resolve(newArr);
  });
}

function joinWords(morseTranslation) {
  const body = document.querySelector("body");
  morseTranslation.forEach((morseLetter) => {
    let newP = document.createElement("p");
    newP.textContent = morseLetter;
    body.append(newP);
  });
}

toJs(morse)
  .then((res) => toMorse(res))
  .then((res) => joinWords(res))
  .catch((err) => console.log(err));

//Thank you for the help here Adane, hope its done well....

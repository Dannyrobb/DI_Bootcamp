let quotesArray = [
  {
    id: 100,
    author: "Adane",
    quote: "Danny you are doing great!!! , see the comment in the prevBtn function",
    likes: 0,

  },
  {
    id: 0,
    author: "Oscar Wild",
    quote: "Be yourself;  everyone else is already taken",
    likes: 0,
  },
  {
    id: 1,
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough",
    likes: 0,
  },
  {
    id: 2,
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world",
    likes: 0,
  },
  {
    id: 3,
    author: "Robert Frost",
    quote: "In three words I can sum up everything I've learned about life: it goes on",
    likes: 0,
  },
  {
    id: 4,
    author: "J.K. Rowling",
    quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals",
    likes: 0,
  },
  {
    id: 5,
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you",
    likes: 0,
  },
];

let getRandomIndex = () => {
  // let quotes = quotesArray.map((e) => e.quote);
  let index = Math.floor(Math.random() * quotesArray.length);
  return index;
};

let index = getRandomIndex();

let getUniqueIndex = (lastIndex) => {
  let newIndex;
  do {
    newIndex = getRandomIndex();
  } while (newIndex === lastIndex);
  index = newIndex;
  return newIndex;
};

// index = getUniqueIndex(index);
const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", () => {
  const section = document.querySelector("#firstSection");
  const domQuote = document.querySelector("#p1");
  // let quotes = quotesArray.map((e) => e.quote);
  // let index = quotes[Math.floor(Math.random() * quotes.length)];
  const newIndex = getUniqueIndex(index);
  domQuote.textContent = quotesArray[newIndex].quote;
  section.append(domQuote);
});

const addToArrBtn = document.querySelector("#addToArr");
addToArrBtn.addEventListener("click", () => {
  const form = document.forms[0];
  const author = form.author.value;
  const quote = form.quote.value;
  const obj = { id: quotesArray.length, author: author, quote: quote, likes: 0 };
  quotesArray.push(obj);
  form.author.value = "";
  form.quote.value = "";
});

const letterLength = document.querySelector("#letterLength");
letterLength.addEventListener("click", () => {
  const nestedP = document.querySelector("#p1");
  alert(nestedP.innerText.length);
});

const letterNoSpace = document.querySelector("#letterNoSpace");
letterNoSpace.addEventListener("click", () => {
  const nestedP = document.querySelector("#p1");
  alert(nestedP.innerText.split(" ").join("").length);
});

const wordAmount = document.querySelector("#wordAmount");
wordAmount.addEventListener("click", () => {
  const nestedP = document.querySelector("#p1");
  alert(nestedP.innerText.split(" ").length);
});

const likeQuote = document.querySelector("#likeQuote");
likeQuote.addEventListener("click", () => {
  quotesArray[index].likes += 1;
});

//Part 3 Filter Form I
// const quoteGenByAuthor = document.querySelector("#quoteGenByAuthor");
// quoteGenByAuthor.addEventListener("click", () => {
//   const nestedP = document.querySelector("#p2");
//   nestedP.textContent = "";
//   const form2 = document.forms[1];
//   const authorValue = form2.authorQuotes.value;
//   quotesArray.forEach((e) => {
//     if (e.author === authorValue) {
//       const newP = document.createElement("p");
//       newP.textContent = `${e.author}: "${e.quote}"`;
//       nestedP.append(newP);
//       form2.authorQuotes.value = "";
//     }
//   });
// });

//Part 3 Filter Form II
results = [];
const quoteGenByAuthor = document.querySelector("#quoteGenByAuthor");
quoteGenByAuthor.addEventListener("click", () => {
  const nestedP = document.querySelector("#p2");
  nestedP.textContent = "";
  const form2 = document.forms[1];
  const authorValue = form2.authorQuotes.value;
  quotesArray.forEach((e) => {
    if (e.author === authorValue) {
      results.push(`${e.quote}`);
      nestedP.textContent = e.quote;
      form2.authorQuotes.value = "";
    }
  });
});

resultIndex = 0;
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", () => {
  const nestedP = document.querySelector("#p2");
  nestedP.innerText = results[resultIndex];
  resultIndex++;
  if (resultIndex === results.length) {
    resultIndex = 0;
  }
});

const prevBtn = document.querySelector("#prev");
prevBtn.addEventListener("click", () => {
  const nestedP = document.querySelector("#p2");
  nestedP.innerText = results[resultIndex];
  resultIndex--;
  console.log(resultIndex);
  if (resultIndex === -1) {
    //if an array has 
    // let arr = [1,2,3]
    //then to reach the last index we need to write 
    // arr.length-1  which gives us the last index in the array.
    //so insted of writing : resultIndex = results.length 
    //we will write :

    resultIndex = results.length - 1;
  }
});

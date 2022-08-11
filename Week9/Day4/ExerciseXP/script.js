//Exercise 1
async function dataFetcher() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

//Exercise 2
//When running asycCall(), first we will console log 'calling' ,
//after that we will call resolevAfter2Seconds(), which will return a new promise
// with resolve "resolved" after 2 seconds.
//after that we will console.log(result)- wich is the resolve from other function.

document.getElementById("btn").addEventListener("click", getObj);

function getObj() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(JSON.parse(this.responseText));
    }
  };
}

document.getElementById("btn2").addEventListener("click", getObj2);
function getObj2() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2&limit=10");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      console.log(JSON.parse(this.responseText));
    }
  };
}

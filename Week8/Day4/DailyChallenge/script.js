document.getElementById("btn1").addEventListener("click", gifSearch);
const form = document.forms[0];
const body = document.querySelector("body");
const gifDiv = document.getElementById("gifDiv");
document.getElementById("btn2").addEventListener("click", () => {
  gifDiv.innerHTML = "";
});

function gifSearch() {
  let value = form.search.value;
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${value}&rating=r&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1&offset=${Math.floor(
      Math.random() * 51
    )}`
  );
  xhr.send();
  xhr.onload = function () {
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      let response = JSON.parse(this.responseText);
      let img = response.data[0].images.downsized_medium.url;
      let newImg = document.createElement("img");
      newImg.src = img;
      gifDiv.append(newImg);
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add("deleteBtns");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        newImg.remove();
        deleteBtn.remove();
      });
      gifDiv.append(deleteBtn);
    }
  };
  form.search.value = "";
}

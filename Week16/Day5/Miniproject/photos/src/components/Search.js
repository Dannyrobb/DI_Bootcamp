import React, { useEffect, useState } from "react";
const apiKey = "563492ad6f91700001000001c46a81d658da4666b4d0ec1e0faaca97";

export const Search = () => {
  const [searchState, setSearch] = useState([]);
  const [imgData, setData] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const fetchImages = async () => {
    const res = await fetch(`https://api.pexels.com/v1/search?query=${searchState}&per_page=30`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apiKey,
      },
    });
    const data = await res.json();
    setData(data.photos);
    console.log(imgData);
  };

  return (
    <div className="App">
      <input type="text" name="search" placeholder="Search.." onChange={handleInput} />
      <button onClick={fetchImages}>I am Button</button>
      <div>
        {imgData.length > 0 ? (
          imgData.map((photo, index) => {
            return <img src={photo.src.original} style={{ width: "200px", height: "150px", margin: "7px" }} key={index} />;
          })
        ) : (
          <p>Try seaching with a new keyword, or get some inspiration from our preset examples above!</p>
        )}
      </div>
    </div>
  );
};

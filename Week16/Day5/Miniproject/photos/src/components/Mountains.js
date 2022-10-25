// import { fetcher } from "../functions/Fetcher";
import React, { useEffect, useState } from "react";
const apiKey = "563492ad6f91700001000001c46a81d658da4666b4d0ec1e0faaca97";

export const Mountains = () => {
  const [imgData, setData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("https://api.pexels.com/v1/search?query=mountains&per_page=30", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: apiKey,
        },
      });
      const data = await res.json();
      setData(data.photos);
    };

    fetchImages();
    console.log(imgData);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {imgData.length > 0 ? (
        imgData.map((photo) => {
          return <img src={photo.src.original} style={{ width: "200px", height: "150px", margin: "7px" }} />;
        })
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// {imgData.length < 0 ? "hi" : "bye"}

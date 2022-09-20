import React from "react";
import ReactDOM from "react-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slider() {
  return (
    <>
      <Carousel>
        <div>
          <img src="images/image1.jpg" width="200px" height="200px" />
        </div>
        <div>
          <img src="images/image2.webp" width="200px" height="200px" />
        </div>
        <div>
          <img src="images/image3.webp" width="200px" height="200px" />
        </div>
        <div>
          <img src="images/image4.webp" width="200px" height="200px" />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;

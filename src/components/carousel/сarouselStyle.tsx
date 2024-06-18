import React from "react";
import { Carousel } from "antd";
import B1 from "@/img/mainPhoto/b1.jpg";
import B2 from "@/img/mainPhoto/b2.jpg";
import B3 from "@/img/mainPhoto/b3.jpg";
import B4 from "@/img/mainPhoto/b4.jpg";

const contentStyle: React.CSSProperties = {
  height: "500px",
  width: "100%",
  color: "#130202",
  textAlign: "center",
  objectFit: "cover",
};

const CarouselStyle = () => {
  return (
    <div className=" h-auto">
      <Carousel autoplay>
        <div>
          <img src={B1.src} alt="Slide 1" style={contentStyle} />
        </div>
        <div>
          <img src={B2.src} alt="Slide 2" style={contentStyle} />
        </div>
        <div>
          <img src={B3.src} alt="Slide 3" style={contentStyle} />
        </div>
        <div>
          <img src={B4.src} alt="Slide 4" style={contentStyle} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselStyle;

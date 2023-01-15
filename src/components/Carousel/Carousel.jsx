import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/python.png";
import img2 from "../../assets/mongodb.png";
import img3 from "../../assets/mysql.png";
import img4 from "../../assets/node.png";
import img5 from "../../assets/css.png";
import img6 from "../../assets/postgresql.png";
import img7 from "../../assets/sap.png";
import img8 from "../../assets/angular.png";
import img9 from "../../assets/htm.png";
import img10 from "../../assets/wordpress.png";
import img11 from "../../assets/uipath.png";
import img12 from "../../assets/c++.png";
import img13 from "../../assets/cisco.png";
import img14 from "../../assets/ibm.png";
import img15 from "../../assets/javas.png";
import img16 from "../../assets/office.png";

const images = [
  {
    id: 1,
    img: img1,

    description: "PYTHON",
  },
  {
    id: 2,
    img: img2,
    description: " MONGO DB",
  },
  {
    id: 2,
    img: img3,
    description: "MY SQL",
  },
  {
    id: 2,
    img: img4,
    description: "NODE",
  },
  {
    id: 2,
    img: img5,
    description: "CSS",
  },
  {
    id: 2,
    img: img6,
    description: "POSTGRESQL",
  },
  {
    id: 2,
    img: img7,
    description: "SAP",
  },
  {
    id: 2,
    img: img8,
    description: "ANGULAR",
  },
  {
    id: 2,
    img: img9,
    description: "HTML",
  },
  {
    id: 2,
    img: img10,
    description: "WORD PRESS",
  },
  {
    id: 2,
    img: img11,
    description: "UI PATH",
  },
  {
    id: 2,
    img: img12,
    description: "C++",
  },
  {
    id: 2,
    img: img13,
    description: "CISCO",
  },
  {
    id: 2,
    img: img14,
    description: "IBM",
  },
  {
    id: 2,
    img: img15,
    description: "JAVASCRIPT",
  },
  {
    id: 2,
    img: img16,
    description: "OFFICE",
  },
];

function SampleNextArrow(onClick) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow(onClick) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="header">Our Technologies </h1>
      <div className="slider">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
            >
              <img src={item?.img} alt="slider" />
              <h4>{item.description}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;

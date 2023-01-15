import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import img1 from "../../assets/Afroshine.jpg";
import img2 from "../../assets/Aromane.png";
import img3 from "../../assets/Nemurango.jpg";
import img4 from "../../assets/Ronewa.jpg";
import img5 from "../../assets/Samba.jpg";

const images = [
  {
    id: 1,
    img: img1,

    description: "Some text about the product..",
  },
  {
    id: 2,
    img: img2,
    description: "Some text about the product..",
  },

  {
    id: 2,
    img: img3,

    description: "Some text about the product..",
  },
  {
    id: 2,
    img: img4,
    description: "Some text about the product..",
  },
  {
    id: 2,
    img: img5,
    description: "Some text about the product..",
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

const SliderCarousel = () => {
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
      <h1 className="header">Our Clients </h1>
      <div className="slider">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div
              className={index === slideIndex ? "slide slide-active" : "slide"}
            >
              <img src={item?.img} alt="slider" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCarousel;

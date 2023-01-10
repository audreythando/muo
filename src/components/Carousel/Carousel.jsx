import React , {useState} from 'react'
import Slider from 'react-slick'
import './Carousel.css'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import img1 from '../../assets/BLOG.jpg';
import img2 from '../../assets/blogSeven.jpg';
import img3 from '../../assets/blogThree.jpg';
import img4 from '../../assets/blogFour.jpg';
import img5 from '../../assets/blogSix.jpg';




const images =[{
  id: 1,
  img:img1,

  description: "Some text about the product..",
},
{
  id: 2,
  img:img2,
  description: "Some text about the product..",
},
{
  id: 2,
  img:img3,
  description: "Some text about the product..",
},
{
  id: 2,
  img:img3,

  description: "Some text about the product..",
},
{
  id: 2,
  img:img4,
  description: "Some text about the product..",
},
{
  id: 2,
  img:img5,
  description: "Some text about the product..",
},

]

function SampleNextArrow( onClick ) {
return (
  <div className='arrow arrow-right' onClick={onClick}>
   < BsArrowRight/>
  </div>
 
  
);
}

function SamplePrevArrow( onClick ) {
return (
  
  <div className='arrow arrow-left' onClick={onClick}>
    <BsArrowLeft/>
  </div>
  
);
}


const Carousel = () => {
  const [slideIndex , setSlideIndex]=useState()

  const settings ={
  
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:1000,
    beforeChange :( next)=>setSlideIndex(next),
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='container'>
      <h1 className='header'>Latest Articles  </h1>
      <div className='slider'>
<Slider {...settings}  >
{
images.map((item,index)=> (
  <div className={index===slideIndex? 'slide slide-active': 'slide'}
>
<img src={item?.img} alt="slider" />
<h4>{item.description}</h4>
<button>Read More</button>
  </div>
))
}
</Slider>
      </div>

    </div>
  )
}

export default Carousel


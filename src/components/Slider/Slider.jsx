
import React, { useState } from 'react';
import './Slider.css';
import slide1 from '../../assets/Afroshine.jpg'
import slide2 from '../../assets/Aromane.png'
import slide3 from '../../assets/Nemurango.jpg'
import slide4 from '../../assets/Ronewa.jpg'
import slide5 from '../../assets/Samba.jpg'

function ImageSlider() {

  
  const imgs=[
    {id:0,img:slide1},
    {id:1,img:slide2},
    {id:2,img:slide3},
    {id:3,img:slide4},
    {id:4,img:slide5},
  
  ]
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main">
        <h2>Our <span> Clients</span> </h2>
      <img src={wordData.img} height="300" width="500" /> 
      <div className='flex_row'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"clicked":""} src={data.img} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
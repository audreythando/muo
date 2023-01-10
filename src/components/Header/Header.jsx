import React from 'react';
import './Header.css'
import Hero from '../../assets/hero.mp4'

const Header = ({title}) => {
  return (
<div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Hero} type='video/mp4'/>
            </video>
            
    
       <div>
       <h1>{title}</h1>
       </div>
         
        </div>
  );
}

export default Header;

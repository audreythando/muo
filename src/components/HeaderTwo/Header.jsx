import React from 'react';
import './Header.css'
import Hero from '../../assets/earth.mp4'

const Header = () => {
  return (
<div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Hero} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>MUO INVESTMENTS</h1>
                <h2><span className="blue"> Digitally and  </span>  truly yours</h2>

                <div className="btn-group">
                    <button className="btn">Learn more</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
         
        </div>
  );
}

export default Header;
import React from 'react'
import './Mission.css'
import {BsBullseye} from 'react-icons/bs'
import {HiLightBulb} from 'react-icons/hi'
import { GiLaurelsTrophy } from 'react-icons/gi'
import AboutCard from './MissionCard';

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <h2>Leading Technology Solutions</h2>
                <p>Our mission , vision and values are your breakthroughs </p>
                <div className="card-container">
                    <div className="card" >
                        <AboutCard icon={<BsBullseye className='icon' />} heading='Mission' 
                        text='Our mission is to maintain the highest levels of professionalism, integrity,
                            honesty and fairness in our relationships with our clients, suppliers, 
                            subcontractors and professional associates.' />
                    </div>
                    
                    <div className="card">
                        <AboutCard icon={<HiLightBulb className='icon' />} heading='Vision'  
                        text='MUO investments is an IT company recognized for exceptional
              services.We place great importance on the digitalization of IT
              processes and on partnership-based working relationships.' />
                    </div>
                    <div className="card">
                        <AboutCard icon={<GiLaurelsTrophy className='icon' />} heading='Values' 
                        text='Our mission for high standards and quality and commitments towards
                         our client satisfaction is directly related to our Values'/>
                    </div>

                    <a href="/services" className="btn">Services</a>
                   
                </div>
          
            </div>
        </div>
    )
}

export default About
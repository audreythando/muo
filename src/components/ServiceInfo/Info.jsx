import React from 'react'
import IT from '../../assets/Intro1.jpg'
import AboutCard from './Card.jsx'
import {BsBullseye} from 'react-icons/bs'
import {HiLightBulb} from 'react-icons/hi'
import { GiLaurelsTrophy } from 'react-icons/gi'

const Info = () => {
  return (
    <>
    <div className='about'>
            <div className="container">
                <p>
                We serve our customers at every project phase,
     from strategy formulation and Business Analysis
      through design, project management and implementation 
      right through to support and upgrades. We are committed
       to best practices and professional integrity to ensure 
       we deliver quality. Customer satisfaction drives every
        aspect of our business. These time-honoured qualities
         are incorporated into every project.
                </p>
    
  </div>
  </div>

  <div className='about'>
            <div className="container">
                <h2>Our Services</h2>
                <p>Our mission , vision and values are your breakthroughs </p>
                <div className="card-container">
                    <div className="card" >
                        <AboutCard icon={<BsBullseye className='icon' />} heading='Software Development' 
                        text='Our mission is to maintain the highest levels of professionalism, integrity,
                            honesty and fairness.' />
                            <a href="/services" className="btn">Read More</a>
                    </div>
                    <div className="card" >
                        <AboutCard icon={<BsBullseye className='icon' />} heading='Website Development' 
                        text='Our mission is to maintain the highest levels of professionalism, integrity,
                            honesty and fairness .' />
                            <a href="/services" className="btn">Read More</a>
                    </div>
                    
                    <div className="card">
                        <AboutCard icon={<HiLightBulb className='icon' />} heading='Software Testing(Manual & Automation)'  
                        text='MUO investments is an IT company recognized for exceptional
              services.' />
              <a href="/services" className="btn">Read More</a>
                    </div>
                    <div className="card">
                        <AboutCard icon={<HiLightBulb className='icon' />} heading='Robotic Process Automation(RPA)'  
                        text='MUO investments is an IT company recognized for exceptional
              services.' />
              <a href="/services" className="btn">Read More</a>
                    </div>
                    <div className="card">
                        <AboutCard icon={<GiLaurelsTrophy className='icon' />} heading='IT Project Management' 
                        text='Our mission for high standards and quality and commitments towards
                         our client satisfaction is directly related to our Values'/>
                         <a href="/services" className="btn">Read More</a>
                    </div>

                    <div className="card">
                        <AboutCard icon={<GiLaurelsTrophy className='icon' />} heading='ERP Implementation' 
                        text='Our mission for high standards and quality and commitments towards
                         our client satisfaction is directly related to our Values'/>
                         <a href="/services" className="btn">Read More</a>
                    </div>

                    <div className="card">
                        <AboutCard icon={<GiLaurelsTrophy className='icon' />} heading='IT Audit' 
                        text='Our mission for high standards and quality and commitments towards
                         our client satisfaction is directly related to our Values'/>
                         <a href="/services" className="btn">Read More</a>
                    </div>


                    <div className="card">
                        <AboutCard icon={<GiLaurelsTrophy className='icon' />} heading='Data analytics' 
                        text='Our mission for high standards and quality and commitments towards
                         our client satisfaction is directly related to our Values'/>

<a href="/services" className="btn">Read More</a>
                    </div>


                   
                </div>
          
            </div>
        </div>


  </>


    
  )
}

export default Info
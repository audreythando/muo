import React from "react";
import avatarImage1 from "../../assets/team-01.png";
import avatarImage2 from "../../assets/team-03.png";
import avatarImage3 from "../../assets/team-04.png";
import avatarImage4 from "../../assets/team-02.png";
import avatarImage5 from "../../assets/woman3.jpg";
import avatarImage6 from "../../assets/Man3.jpg";
import avatarImage7 from "../../assets/woman4.jpg";
import avatarImage8 from "../../assets/Man4.jpg";
import { BsLinkedin, BsTwitter} from 'react-icons/bs';
import './Team.css'
// import TextBanner from "../textbanner/TextBanner";
const teamMembers =[{
    
    img: avatarImage4,
    name:'Natasha Lama',
    position: 'Senior Developer'
  },
  {
       
    img: avatarImage1,
    name:'Paul Stevens',
    position: 'CEO'
  },
  {
       
    img: avatarImage1,
    name:'Linda Mathoba',
    position: 'Front-End Developer'
  },
  {
       
    img: avatarImage4,
    name:'James Peters',
    position: 'Senior Developer'
  },
]

const Teams = () => {
  return (
    <>

<div className='about'>
            <div className="container">
                <p>
                Our Founder and director has accumulated vast 
  experience in the Information Technology domain 
  and is known for his proficient and uncompromising
   project implementation. He holds a BSc Honours in 
   Computer Science and is currently an MSc in Computer 
   Science & Information System candidate. Together with 
   his professional team, they have combined experience in
    Information Technology, Advisory, consulting and Project Management.
                </p>
    
  </div>
  </div>
   <section className="our-team">
    <div className="container">
        <div className="team-content">
            <h2>Meet with  <span> Our Team</span></h2>
        </div>
    </div>

    <div className="team-wrapper">
      {
        teamMembers.map((item, index)=>(
            <div className="team-item" key={index}>
            <div className="team-image">
                <img src={item.img} alt="woman" />
            </div>
            <div className="team-details">
                <h4>{item.name}</h4>
                <p className="description">
{item.position}
                </p>
                <div className="team-member-social">
                    <span>
                        <i><BsLinkedin/></i>
                    </span>
                    <span>
                        <i><BsTwitter/></i>
                    </span>
                </div>

            </div>
        </div>
        ))
    }
    </div>


   </section>
</>
  )}
export default Teams;
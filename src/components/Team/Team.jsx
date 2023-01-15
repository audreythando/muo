import React from "react";

import avatarImage1 from "../../assets/team-02.png";
import avatarImage4 from "../../assets/team-03.png";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import "./Team.css";

const teamMembers = [
  {
    img: avatarImage1,
    name: "Natasha Lama",
    position: "Senior Developer",
  },
  {
    img: avatarImage4,
    name: "Paul Stevens",
    position: "CEO",
  },
  {
    img: avatarImage1,
    name: "Linda Mathoba",
    position: "Front-End Developer",
  },
  {
    img: avatarImage4,
    name: "James Peters",
    position: "Senior Developer",
  },
];

const Teams = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <p>
            Our Founder and director has accumulated vast experience in the
            Information Technology domain and is known for his proficient and
            uncompromising project implementation. He holds a BSc Honours in
            Computer Science and is currently an MSc in Computer Science &
            Information System candidate. Together with his professional team,
            they have combined experience in Information Technology, Advisory,
            consulting and Project Management.
          </p>
        </div>
      </div>
      <section className="our-team">
        <div className="container">
          <div className="team-content">
            <h2>
              Meet with <span> Our Team</span>
            </h2>
          </div>
        </div>

        <div className="team-wrapper">
          {teamMembers.map((item, index) => (
            <div className="team-item" key={index}>
              <div className="team-image">
                <img src={item.img} alt="woman" />
              </div>
              <div className="team-details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team-member-social">
                  <span>
                    <i>
                      <BsLinkedin />
                    </i>
                  </span>
                  <span>
                    <i>
                      <BsTwitter />
                    </i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Teams;

import React from "react";
import {
  BsFacebook,
  BsTelephoneFill,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <div>
            <img className="footer-img" src={Logo} alt="logo" />
          </div>
          {/* <h4> MUO INVESTMENTS</h4> */}
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="col">
          <h4>QUICK NAVIGATION</h4>
          <p>
            <a href="/">
              {" "}
              {<AiOutlineArrowRight fontSize="small" />} Home
            </a>
          </p>
          <p>
            <a href="/about">
              {" "}
              {<AiOutlineArrowRight fontSize="small" />} About
            </a>
          </p>
          <p>
            {" "}
            <a href="/services">
              {" "}
              {<AiOutlineArrowRight fontSize="small" />}Services
            </a>
          </p>
          <p>
            <a href="/contact">
              {" "}
              {<AiOutlineArrowRight fontSize="small" />}Contact
            </a>
          </p>
        </div>
        <div className="col">
          <h4>GET IN TOUCH</h4>
          <p>
            {<MdLocationOn />} 16 Apiesdoring drive, Heuweloord, Centurion, 0157{" "}
          </p>
          <p>{<BsTelephoneFill />} 083 960 0349 </p>
          <p>{<MdMailOutline />} info@muoinvest.co.za </p>
        </div>
      </div>

      <div className="footer__copyright">
        <small>2022 MUO INVESTMENTS &copy; All Rights Reserved</small>
      </div>
    </div>
  );
};

export default Footer;


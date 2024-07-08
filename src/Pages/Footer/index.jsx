import React from "react";
import logo from "../../assets/assistailogo2.png";
import gmail from "../../assets/gmail.png";
import india from "../../assets/india.png";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";

import "./style.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-logo-section">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <img src={logo} className="logo" alt="AssistAI Labs logo" />
        </Link>
        <div className="footer-nav-section">
        <div>
          <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
        </div>
        <div>
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About us
          </Link>
        </div>
        <div>
          <Link
            to="ourTeam"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Our team
          </Link>
        </div>
        <div>
          <Link
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact us
          </Link>
        
        </div>
        </div>
      </div>
      <div className="footer-contact-section">
        <span>Get in Touch</span>
        <div>
          <MdMailOutline className="footer-icon" />
          <a href="mailto:assistailabs@gmail.com">assistailabs@gmail.com</a>
        </div>
        <div>
          <MdCall className="footer-icon" /> +91 8700510741
        </div>
        <div>
          <FaLocationDot className="footer-icon" /> New Delhi, India
        </div>
      </div>

      <div className="footer-links-section">
        <span>About the company</span>
        <div className="footer-text">
          Simplify your life and reclaim your time with AssistAI Labs. Explore
          our intelligent robots and discover a smarter way to manage your home.
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/assistailabs/" target="_blank">
            <FaInstagram className="footer-link-icons" />
          </a>
          <a href="https://x.com/AssistAILabs" target="_blank">
            <FaXTwitter className="footer-link-icons" />
          </a>
          <a
            href="https://www.linkedin.com/company/assistailabs/"
            target="_blank"
          >
            <FaLinkedinIn className="footer-link-icons" />
          </a>
          <a href="https://www.youtube.com/@AssistAILabs" target="_blank">
            <FaYoutube className="footer-link-icons" />
          </a>
        </div>
      </div>
      {/* <div className="extra-detail">
        <span>Get in Touch</span>
        <FontAwesomeIconmg src={gmail} alt="" className="icon" />
        Email : 
        <a href="mailto:assistailabs@gmail.com">assistailabs@gmail.com</a>
      </div>
      <div className="extra-detail lower-section">
        <FontAwesomeIconmg src={india} className="icon" alt="" />
        Phone: 
        +91 8700510741
      </div> */}
    </div>
  );
};

export default Footer;

import React from "react";
import logo from "../../assets/assistailogo2.png";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { Router, Link as RouterLink} from "react-router-dom";

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
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </div>
          <span>|</span>
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
          <span>|</span>
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
          <span>|</span>
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
        <span className="copyright-text">
        AssistAI Labs &copy; 2024
        </span>
        <hr className="divider"/>
      </div>
      <div className="footer-contact-section">
        <span>Get in Touch</span>
        <div>
          <MdMailOutline className="footer-icon" />
          <a href="mailto:assistailabs@gmail.com">assistailabs@gmail.com</a>
        </div>
        <div>
          <MdCall className="footer-icon" /><a href="tel:+91 8700510741"> +91 8700510741</a>
        </div>
        <div>
          <FaLocationDot className="footer-icon" /><a 
        href={`https://www.google.com/maps?q=NewDelhi`} 
        target="_blank" 
        rel="noopener noreferrer"
      > New Delhi, India</a>
        </div>
        <hr className="divider"/>
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
    </div>
  );
};

export default Footer;

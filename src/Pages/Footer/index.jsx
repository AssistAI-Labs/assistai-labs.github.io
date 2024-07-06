import React from "react";
import logo from "../../assets/assistailogo.jpg";
import gmail from "../../assets/gmail.png";
import india from "../../assets/india.png";
import "./style.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-section">
      <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
      <img src={logo} className="logo" alt="" /></Link>
      <div className="footer-text">
        Simplify your life and reclaim your time with AssistAI Labs. <br />
        Explore our intelligent robots and discover a smarter way to manage your
        home.
      </div>
      <div className="extra-detail">
        <img src={gmail} alt="" className="icon" />
        <a href="mailto:assistailabs@gmail.com">assistailabs@gmail.com</a>
      </div>
      <div className="extra-detail lower-section">
        <img src={india} className="icon" alt="" />
        +91 8700510741
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import robotimg from "../../assets/robo14.png";
import "./style.css";
import TypingEffect from "../../components/TypingEffect";
import { Link } from "react-scroll";

const Home = () => {
  const [firstPartDone, setFirstPartDone] = useState(true);
  const [secondPartDone, setSecondPartDone] = useState(true);

  const handleFirstPartComplete = () => {
    setFirstPartDone(true);
  };

  const handleSecondPartComplete = () => {
    setSecondPartDone(true);
  };
  return (
    <div className="home-section">
      <div className="home-content-container">
        <div className="main-heading">
          {/* <TypingEffect text={"Welcome to the future of"} callback={handleFirstPartComplete} />
      {firstPartDone && (
        <span className='highlight-text'>
          <TypingEffect text={" clean & carefree living!"} callback={handleSecondPartComplete}/>
        </span>
      )} */}
          Welcome to the future of&nbsp;
          <span className="highlight-text">clean & carefree living!</span>
        </div>
        <div className="sub-content">
          Get back to what matters most. Relax, recharge, and let your robots do
          the rest.
        </div>
      </div>

      <div className="home-buttons-container">
        <Link
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          activeClass="active"
        >
          <button className="home-button-explore">Explore</button>
        </Link>
        <Link
          to="contactUs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button className="home-button-contact">Contact us</button>
        </Link>
      </div>

      <div
        className={
          "home-image-container"
        }
      >
        <div className="home-image-background">
          <img src={robotimg} className="home-image" alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default Home;

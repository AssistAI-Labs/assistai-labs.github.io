import React, { useEffect} from "react";
import robotimg from "../../assets/robo.png";
import surveyimg from "../../assets/survey.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import features from "../../assets/FeaturesVideoMain.mp4";



import "./style.css";

const AboutUs = () => {
  useEffect(() => {
    const offerings = document.querySelectorAll(".offerings");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // observer.unobserve(entry.target);
          }
          if (!entry.isIntersecting) {
            entry.target.classList.remove("visible");
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (offerings.length) {
      offerings.forEach((offer) => {
        observer.observe(offer);
      });
    }

    return () => {
      if (offerings.length) {
        offerings.forEach((offer) => {
          observer.unobserve(offer);
        });
      }
    };
  }, []);

  const openForm = () => {
    window.open("https://tally.so/r/m6x2e5", "_blank");
  };

  return (
    <div className="about-section">
      <div className="about-main-heading-1">Who we are</div>
      <div className="about-part-1">
        <div className="about-part-1-image-container">
          <img src={robotimg} className="about-part-1-image" alt="" />
        </div>
        <div className="about-part-1-content">
          <div className="about-part-1-content-heading">
            Simplify your life. Free up your time.
          </div>
          <div className="about-part-1-content-text">
            Imagine robots handling everyday chores, letting you relax, spend
            time with family, or chase your dreams. That&apos;s assisted living,
            and AssistAI Labs is making it a reality.
          </div>
        </div>
      </div>
      <span className="image-context">**We do not own any of the images displayed on this website. They are used solely for the purpose of demonstrating our concept.</span>

      {/* part 2 of about page  */}

      <div className="about-main-heading-1">What we do</div>

      <br />
      <div className="about-part-2-content">
        Tired of repetitive chores stealing your precious time at home? <br />
        At AssistAI Labs, we&apos;re revolutionizing home life with intelligent
        robotic companions designed to tackle your everyday tasks. <br />
        Here&apos;s how our AI-powered robots become your helping hand:
      </div>

      <div className="newvideo">
        <video autoPlay
            loop
            muted
            disablePictureInPicture
            preload="auto"
             >
              <source src={features} type="video/mp4" />
            </video>
      </div>

      

      {/* part 3  */}

      <div className="survey-container">
        <div className="survey-content-part">
          <div className="survey-title">Help us make smarter Homes</div>
          <div className="survey-content">
            Your thoughts shape our robots. Take our quick survey (5 min) and
            share what matters in your home life.
            <br />
            <br />
            Click below to share your voice.
          </div>
          <div className="survey-button-part">
            <button className="survey-button" data-tally-open="m6x2e5" data-tally-layout="modal" data-tally-overlay="1" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" data-tally-auto-close="1000">
              Share
            </button>
          </div>
        </div>
        <div className="survey-image-part">
          <img src={surveyimg} className="survey-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

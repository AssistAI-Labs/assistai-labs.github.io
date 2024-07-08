import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurTeam from "./Pages/OurTeam";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Pages/Footer";
import Loading from "./components/Loading";
import { Element } from "react-scroll";
import Chatbot from "./components/Chatbot";
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);
  useEffect(() => {
    window.TallyConfig = {
      "formId": "m6x2e5",
      "popup": {
        "width": 200,
        "emoji": {
          "text": "👋",
          "animation": "wave"
        },
        "layout": "modal",
        "autoClose": 0,
        "open": {
          "trigger": "scroll",
          "scrollPercent": 57
        }
      }
    };
  }, []);
  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
      <>
        <NavBar />
        <Element name="home">
          <Home />
        </Element>
        <Element name="aboutUs">
          <AboutUs />
        </Element>
        <Element name="ourTeam">
          <OurTeam />
        </Element>
        <Element name="contactUs">
          <ContactUs />
        </Element>
        <Chatbot
        chatbotId="E4ACC61E-BACE-415C-8BFB-708DC7449A42"
        onboardingBot="true"
        apiHost="https://api-cf-ap-8.sendbird.com"/>
        <Footer />
      </>
    )}
  </>
  )
}

export default App

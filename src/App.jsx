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
    }, 7000); // Adjust the timeout as needed
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

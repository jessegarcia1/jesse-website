import React, { useRef } from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import TitleText from "./components/TitleText";
import AboutMe from "./components/AboutMe";
import SocialButtons from "./components/SolcialsButtons";
import Contact from "./components/Contact";
import EndBit from "./components/EndBit";

const App = () => {
  const aboutRef = useRef(null);
  const sliderRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <NavBar
        aboutRef={aboutRef}
        sliderRef={sliderRef}
        contactRef={contactRef}
      />
      <TitleText />
      <SocialButtons />
      <section ref={aboutRef}>
        <AboutMe />
      </section>
      <section ref={sliderRef}>
        <Slider />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <EndBit />
    </div>
  );
};

export default App;

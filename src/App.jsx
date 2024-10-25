import React from "react";
import NavBar from "./components/NavBar";
import Slider from "./components/Slider";
import TitleText from "./components/TitleText";
import SolcialsButtons from "./components/SolcialsButtons";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import EndBit from "./components/EndBit";

const App = () => {
  return (
    <div class="overflow-hidden">
      <NavBar />
      <TitleText />
      <SolcialsButtons />
      <AboutMe />
      <Slider />
      <Contact />
      <EndBit />
    </div>
  );
};

export default App;

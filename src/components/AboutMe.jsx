import React from "react";
import me from "../../images/IMG_7902.jpeg";

const AboutMe = () => {
  return (
    <div>
      <div class="bg-gradient-to-b from-white to-green-300 h-40 w-screen z-10"></div>

      <div className="sticky w-full bg-green-300 h-16 flex justify-center">
        <h1 className="relative top-5 text-3xl font-bold font-mono ">
          About Me!
        </h1>
      </div>

      <div className="relative w-full bg-green-300 py-8 px-4 overflow-hidden drop-shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="relative lg:left-20 left-0 flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-3/5 bg-white p-6 rounded-lg drop-shadow-lg mt-4 peer hover:z-30 z-10 transform transition-all duration-300 hover:-translate-y-2 ">
              <h2 className="text-xl font-bold mb-2">Who Am I?</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                What's up? I am an 18 year old computer science student studying
                at Northeastern University. I like cartoons, card games, and
                working out. Devious at magic the gathering. Catch me stomping
                your local FNM (Friday Night Magic). That's me on the right
                working at a boba shop. I think I look pretty fly in an apron.
                Recently started exploring my interest in computer science and I
                think it's sick! That's about it. Check out my projects below!
              </p>
            </div>
            <div className="static w-full lg:w-2/5 flex duration-300 transform peer-hover:opacity-50 z-20">
              <img
                src={me}
                alt="me!"
                className="relative rounded-lg shadow-lg h-64 sm:h-80 lg:h-96 lg:-left-4 lg:bottom-8 lg:right-6 left-32 bottom-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

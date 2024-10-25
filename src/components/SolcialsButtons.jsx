import React from "react";

const SolcialsButtons = () => {
  return (
    <div>
      <div class="flex flex-row justify-center lg:justify-end lg:mt-20 mt-10 lg:mr-52 space-x-5 lg:space-x-10">
        <a
          class="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="https://github.com/jessegarcia1"
          target="_blank"
        >
          <img
            src="../../images/GithubUnion.svg"
            alt="Github"
            class="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
        <a
          class="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="mailto:jessegarca5@gmail.com"
        >
          <img
            src="../../images/mailUnion.svg"
            alt="Mail"
            class="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
        <a
          class="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="https://www.instagram.com/jcgarcia256/"
          target="_blank"
        >
          <img
            src="../../images/InstagramUnion.svg"
            alt="Instagram"
            class="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
        <a
          class="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="https://www.linkedin.com/in/jesse-garcia-04b46928a/"
          target="_blank"
        >
          <img
            src="../../images/LinkedinUnion.svg"
            alt="Linkedin"
            class="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
      </div>

      <div class="flex justify-center lg:justify-end lg:mr-64">
        <div class="text-xl sm:text-2xl font-mono mt-4 mr-2 lg:mr-12 text-green-600 opacity-70">
          Peep the socials!
        </div>
      </div>

      <div class="bg-gradient-to-b from-white to-green-300 h-40 w-screen z-10"></div>

      
      <div className="sticky w-full bg-green-300 h-16 flex justify-center"> 
        <h1 className="relative top-5 text-3xl font-bold font-mono ">About Me!</h1>
      </div>

    </div>
  );
};
//TODO: Make about me sticky so nav bar switches to it
export default SolcialsButtons;

import React from "react";
import github from "../../images/GithubUnion.svg";
import instagram from "../../images/InstagramUnion.svg";
import mail from "../../images/mailUnion.svg";
import linked from "../../images/LinkedinUnion.svg";

const SolcialsButtons = () => {
  return (
    <div>
      <div className="flex flex-row justify-center lg:justify-end lg:mt-20 mt-10 lg:mr-52 space-x-5 lg:space-x-10">
        <a
          className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="https://github.com/jessegarcia1"
          target="_blank"
        >
          <img
            src={github}
            alt="Github"
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
        <a
          className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="mailto:jessegarca5@gmail.com"
        >
          <img
            src={mail}
            alt="Mail"
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
        <a
          className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="https://www.instagram.com/jcgarcia256/"
          target="_blank"
        >
          <img
            src={instagram}
            alt="Instagram"
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
        <a
          className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600 hover:bg-opacity-70 rounded-md"
          href="https://www.linkedin.com/in/jesse-garcia-04b46928a/"
          target="_blank"
        >
          <img
            src={linked}
            alt="Linkedin"
            className="w-14 h-14 lg:w-16 lg:h-16 rounded-md"
          />
        </a>
      </div>

      <div className="flex justify-center lg:justify-end lg:mr-64">
        <div className="text-xl sm:text-2xl font-mono mt-4 mr-2 lg:mr-12 text-green-600 opacity-70">
          Peep the socials!
        </div>
      </div>
    </div>
  );
};
//TODO: Make about me sticky so nav bar switches to it
export default SolcialsButtons;

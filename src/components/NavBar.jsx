import React from "react";

function NavBar({ aboutRef, sliderRef, contactRef }) {
  const handleJumpToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed z-50 h-16 w-full bg-green-200 drop-shadow-md flex items-center justify-center">
      <div className="flex space-x-16">
        <button
          onClick={() => handleJumpToSection(aboutRef)}
          className="text-lg sm:text-xl text-black hover:text-green-600 hover:underline"
        >
          about
        </button>
        <button
          onClick={() => handleJumpToSection(sliderRef)}
          className="text-lg sm:text-xl text-black hover:text-green-600 hover:underline"
        >
          projects
        </button>
        <button
          onClick={() => handleJumpToSection(contactRef)}
          className="text-lg sm:text-xl text-black hover:text-green-600 hover:underline"
        >
          contact
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed z-50 h-16 w-full bg-green-200 bg-opacity-90 drop-shadow-md justify-center flex">
    <div className="flex relative top-5 space-x-16">
      <a className="text-lg sm:text-xl text-black hover:text-green-600">
        about
      </a>
      <a className="text-lg sm:text-xl text-black hover:text-green-600">
        projects
      </a>
      <a className="text-lg sm:text-xl text-black hover:text-green-600">
        contact
      </a>
    </div>
  </nav>
  );
};

export default NavBar;

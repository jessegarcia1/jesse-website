import React from "react";

const TitleText = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col p-6 mt-28 w-full items-center">
        <div className="max-w-full">
          <p className="font-mono text-black mb-5">
            <span className="text-green-600">Hello Welcome!</span> I'm
          </p>
          <h1 className="text-7xl lg:text-9xl font-sans break-words">
            Jesse Garcia.
          </h1>
          <h2 className="text-4xl lg:text-5xl font-mono mt-5 break-words">
            I like <span className="text-green-600">software!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TitleText;

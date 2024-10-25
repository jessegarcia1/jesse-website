import React from "react";

const TitleText = () => {
  return (
    <div class="w-full overflow-x-hidden">
      <div class="flex flex-col p-6 mt-28 w-full items-center">
        <div class="max-w-full">
          <p class="font-mono text-black mb-5">
            <span class="text-green-600">Hello Welcome!</span> I'm
          </p>
          <h1 class="text-7xl lg:text-9xl font-sans break-words">
            Jesse Garcia.
          </h1>
          <h2 class="text-4xl lg:text-5xl font-mono mt-5 break-words">
            I am a <span class="text-green-600">programmer.</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TitleText;

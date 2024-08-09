import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Button from "./Button";
const HeroSection = () => {
  return (
    <>
      <div className="Hero mt-[10rem] h-[28rem] text-center py-5">
        {/* {spotlight} */}
        <Spotlight fill="white" />
        {/* {spotlight} */}

        <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-bold text-[5rem]">
          Master the Art of Music
        </h1>

        <p className="my-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Music is an art form that encompasses the organization of vocal or
          instrumental sounds to create beauty and emotional expression. It is a
          universal aspect of human culture.
        </p>

        <Button />
      </div>
    </>
  );
};

export default HeroSection;

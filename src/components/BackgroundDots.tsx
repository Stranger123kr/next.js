import { InfiniteMovingCardsDemo } from "./infiniteScroll";
import React from "react";

export function GridBackgroundDemo() {
  return (
    <>
      <div className="h-[40rem] w-full dark:bg-black bg-white overflow-hidden dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <h2 className="text-center mt-10 mb-0 text-[3rem] font-bold">
          Hear our Harmony: Voices of success
        </h2>
        <div className="w-full overflow-hidden flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </>
  );
}

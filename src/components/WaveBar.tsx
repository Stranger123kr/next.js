"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedTooltipPreview } from "./Tooltip";

export function WaveBar() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-[1.1rem] my-8 text-white font-semibold inter-var text-center">
          Discover the talented professional who will guide your musical journey
        </p>
        <AnimatedTooltipPreview />
      </WavyBackground>
    </div>
  );
}

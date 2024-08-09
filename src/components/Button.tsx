"use client";
import React from "react";
import { Buttons } from "@/components/ui/moving-border";
const Button = () => {
  return (
    <>
      <Buttons
        borderRadius="1.75rem"
        className="bg-white font-[400] text-[1rem] dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore courses
      </Buttons>
    </>
  );
};

export default Button;

"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import CourseData from "@/data/music_data.json";

export function Featuredcourse() {
  interface courses {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }

  const filterCourseData = CourseData.filter(
    (item: courses) => item.isFeatured === true
  );

  return (
    <>
      <div className="bg-gray-900 py-12">
        <div className="info text-center">
          <h4 className="text-teal-600 text-[1.3rem] font-bold uppercase">
            FEATURED COURSES
          </h4>
          <h2 className="sm:text-5xl mt-8 font-semibold">
            Learn With the Best
          </h2>
        </div>

        <div
          className="grid justify-center items-center gap-5 mt-11 p-[5rem]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {filterCourseData &&
            filterCourseData.map((item) => (
              <BackgroundGradient
                key={item.id}
                className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col h-full"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex flex-col flex-grow p-4">
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 truncate">
                    {item.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow overflow-hidden">
                    {item.description.slice(0, 60)}
                  </p>
                  <button
                    className="rounded-full pl-5 w-ma pr-8 py-5 text-white flex items-center space-x-1 bg-black mt-7 text-xs font-bold dark:bg-zinc-800"
                    style={{ width: "max-content" }}
                  >
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                      {item.price}
                    </span>
                  </button>
                </div>
              </BackgroundGradient>
            ))}
        </div>
        <div className="info">
          <>
            <button className="block m-auto cursor-pointer opacity-100 border-none transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
              <span className="w-full h-full flex items-center gap-2 px-8 py-4 bg-[#B931FC] font-bold text-white text-[1.2rem] rounded-lg bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
                View All courses
              </span>
            </button>
          </>
        </div>
      </div>
    </>
  );
}

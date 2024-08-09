import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
const UpcomingWebinar = () => {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h4 className="text-teal-600 text-[1.3rem] font-bold uppercase">
            FEATURED WEBINARS
          </h4>
          <h2 className="sm:text-5xl mt-8 font-semibold">
            Enhance Your Musical Journey
          </h2>
        </div>
        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="block m-auto cursor-pointer opacity-100 border-none transition-opacity p-[2px] bg-black rounded-lg bg-gradient-to-t from-[#8122b0] to-[#dc98fd] active:scale-95">
            <span className="w-full h-full flex items-center gap-2 px-8 py-4 bg-[#B931FC] font-bold text-white text-[1.2rem] rounded-lg bg-gradient-to-t from-[#a62ce2] to-[#c045fc]">
              View All webinars
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;

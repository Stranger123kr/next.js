"use client";
import { MovingCard } from "@/components/3DCard";
import CourseData from "@/data/music_data.json";
interface course {
  image: string;
  title: string;
  description: string;
}
const page = () => {
  console.log(CourseData.length);
  console.log("Hello");
  return (
    <>
      <div className="min-h-screen bg-black py-12 pt-36">
        <h1 className="text-center font-bold text-[4rem] my-8 text-white">
          All Courses ({CourseData.length || 10})
        </h1>
        <div
          className="grid justify-center items-center px-[5rem]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {CourseData &&
            CourseData.map((item: course, id) => (
              <MovingCard
                key={id}
                image={item.image}
                title={item.title}
                desc={item.description}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default page;

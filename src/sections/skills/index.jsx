import React from "react";
import { skillsData } from "./data";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-4  mx-auto lg:py-10 flex items-center justify-center px-[24px] md:px-[50px] lg:px-[80px] xl:px-[140px] 2xl:px-[130px]"
    >
      <div className="w-full flex flex-col justify-center gap-4 2xl:max-w-[1233px]">
        <h1 className="text-white text-center font-bold text-[20px] md:text-[32px] leading-[24px] md:leading-[40px] lg:pb-4">
          Software Skills
        </h1>
        <div className="flex flex-wrap items-center justify-between lg:justify-center gap-2 md:gap-12">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="w-[124px]  md:w-[180px] p-1 md:p-0 lg:w-[200px] md:h-[130px] flex flex-col justify-center items-center text-center md:gap-2 border rounded border-[#b2d932]"
            >
              <img
                src={skill.icon}
                alt={skill.title}
                className="w-[32px] h-[32px] md:w-[48px] md:h-[48px] lg:w-[60px] lg:h-[60px]"
              />

              <div>
                <span className="text-white text-xs md:text-base truncate w-[124px]">
                  {skill.title}
                </span>
                <p className="text-[#d3f85a] text-xs md:text-sm hidden md:block">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

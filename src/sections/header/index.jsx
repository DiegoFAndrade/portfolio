import React from "react";
import imageSectionHeader from "../../assets/image-section-header.svg";
import { Navbar } from "../../components/navbar";

export const Header = () => {
  return (
    <section
      id="home"
      className=" w-full flex flex-col mx-auto pt-6 lg:pt-8 2xl:pt-12  items-center h-auto 2xl:h-[648px] px-[24px] md:px-[50px] lg:px-[80px] xl:px-[140px] 2xl:px-[130px] "
    >
      <div className="w-full flex justify-between items-center 2xl:max-w-[1233px]">
        <div>
          <p className="text-white text-base md:text-lg xl:text-2xl font-semibold ">
            Diego <span className="text-[#b2d932]">Fernandes</span>
          </p>
        </div>
        <Navbar />
      </div>
      <div className="flex flex-col lg:flex-row h-full w-full 2xl:max-w-[1233px]">
        <div className="w-full flex justify-center items-center lg:hidden pt-6">
          <img
            src={imageSectionHeader}
            alt="man"
            className="w-auto h-[227px] md:h-[403px] lg:h-[340px] xl:h-[377px] 2xl:h-[503px] bg-cover"
          />
        </div>

        <div className=" flex flex-col items-center lg:block text-center lg:text-left h-full pt-4 lg:pt-12 2xl:pt-32">
          <h1 className=" w-full md:w-[520px] lg:w-[480px] xl:w-[528px] 2xl:w-[509px] font-bold text-[26px] md:text-[36px] xl:text-[46px] leading-[28px] md:leading-[38px] xl:leading-[47px] text-white">
            Olá, Eu sou um Desenvolvedor{" "}
            <span className="text-[#b2d932]">Front-End</span>
          </h1>

          <p className="text-gray-300 text-sm xl:text-base leading-[18px] md:leading-6 my-3 w-full md:w-[70%] lg:w-[420px] xl:w-[539px] ">
            Profissional formado na área de Sistemas de Informação, com
            experiência na área de desenvolvimento de Front-End para aplicações
            Web.
          </p>
          <button className="bg-[#b2d932] flex w-[160px] md:w-[164px] h-[34px] xl:w-[236px] xl:h-[48px] rounded  md:py-6 md:px-32 tracking-wide text-sm md:text-lg mt-2 md:mt-3 lg:mt-5  font-semibold justify-center items-center">
            <a href="#contact">Contato</a>
          </button>
        </div>
        <div className="w-full hidden lg:flex justify-center items-end">
          <img
            src={imageSectionHeader}
            alt="man"
            className="w-auto h-[227px] md:h-[403px] lg:h-[340px] xl:h-[377px] 2xl:h-[503px] bg-cover"
          />
        </div>
      </div>
    </section>
  );
};

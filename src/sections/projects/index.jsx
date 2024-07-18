import React from "react";
import imgRayBank from "../../assets/raybank.png";
import imgBeasBank from "../../assets/beasbank.png";
import imgTracktus from "../../assets/tracktus.png";

const portfolioData = [
  {
    title: "Ray Bank",
    description:
      "O Ray Bank é um banco digital, que disponibiliza controle financeiro, pagamentos eletrônicos, gestão de recebimentos e suporte especializado, trazendo eficiência e comodidade para o negócio.",
    image: imgRayBank,
    // url: "https://raybank.authbank.com.br/",
  },
  {
    title: "Be as a Bank",
    description:
      "O Be as a Bank é uma aplicação de gerenciamento e suporte para soluções administrativas integradas à plataforma, disponíveis para facilitar o acompanhamento das transações, realizadas em tempo real.",
    image: imgBeasBank,
    // url: "https://backoffice-dev.beasabank.com.br/",
  },
  {
    title: "Rastreamento veicular - Tracktus",
    description:
      "O rastreamento veicular é um serviço que permite monitorar a localização e o movimento de veículos por meio de dispositivos GPS instalados nos mesmos. ",
    image: imgTracktus,
    // url: "https://tech.tracktus.com.br/login",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-4  mx-auto lg:py-10 flex items-center justify-center px-[24px] md:px-[50px] lg:px-[80px] xl:px-[140px] 2xl:px-[130px]"
    >
      <div className="w-full flex flex-col justify-center gap-4 2xl:max-w-[1233px]">
        <h1 className="text-white text-left font-bold text-[20px] md:text-[32px] leading-[24px] md:leading-[40px] lg:pb-4">
          Projetos{" "}
        </h1>
        <div className="flex justify-between w-full flex-col lg:flex-row gap-8 md:gap-16 lg:gap-0">
          {portfolioData.map((project, index) => (
            // <a href={project.url} key={index} target="_blank">
            <div className="flex flex-col text-white w-full lg:w-[280px] xl:w-[300px]  2xl:w-[340px] text-sm md:text-base gap-1.5 lg:gap-0">
              <img
                alt={project.title}
                src={project.image}
                className="w-full h-auto rounded pb-1.5"
              />
              <p className="font-bold"> {project.title}</p>
              <p className="text-gray-300 ">{project.description}</p>
            </div>
            // </a>
          ))}
        </div>
      </div>
    </section>
  );
};

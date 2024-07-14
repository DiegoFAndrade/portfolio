import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full py-4 flex  px-[24px] md:px-[50px] lg:px-[80px] xl:px-[140px] 2xl:px-[130px] items-center mx-auto justify-center"
    >
      <div className="w-full 2xl:max-w-[1233px] flex flex-col justify-center items-center gap-4">
        <div className="flex gap-4 text-white">
          <a href={`https://wa.me/5593992030706?text=`} target="_blank">
            <FaWhatsapp className="w-[28.55px] h-auto" />
          </a>
          <a
            href={`https://www.linkedin.com/in/diego-fernandes-dev/`}
            target="_blank"
          >
            <FaLinkedin className="w-[28.55px] h-auto" />
          </a>
          <a href={`https://www.github.com/Diego-1D`} target="_blank">
            <FaGithub className="w-[28.55px] h-auto" />
          </a>
          <a href={`mailto:diegodfafernandes@gmail.com`} target="_blank">
            <MdOutlineEmail className="w-[28.55px] h-auto" />
          </a>
        </div>
        <p className="text-white text-[10px] md:text-xs text-center  flex gap-1">
          © {new Date().getFullYear()} Diego Fernandes Andrade{" "}
          <span className="hidden md:block">|</span>{" "}
          <br className="flex md:hidden" />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

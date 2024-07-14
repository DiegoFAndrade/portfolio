import { useState } from "react";

const menuOptions = [
  {
    id: 0,
    label: "Home",
    path: "#home",
  },
  {
    id: 1,
    label: "Sobre",
    path: "#about",
  },
  {
    id: 2,
    label: "Projetos",
    path: "#projects",
  },
  {
    id: 3,
    label: "Habilidades",
    path: "#skills",
  },
  {
    id: 4,
    label: "Contato",
    path: "#contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const responsivo = window.innerWidth < 600;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="rounded-ee-3xl rounded-ss-3xl z-40 md:bg-[#b2d932]">
      <div
        style={{
          backgroundColor: responsivo && isOpen ? "#b2d932" : "transparent",
        }}
        className={`bg-white max-w-screen-xl flex flex-col md:flex-wrap items-center md:justify-between mx-auto absolute top-3 md:top-0 right-1 md:right-0 md:relative md:bg-transparent rounded-ee-3xl rounded-ss-3xl pt-1 md:pt-0  w-[114px] md:w-auto h-auto`}
      >
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          style={{
            color: isOpen ? "#000" : "#b2d932",
          }}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-hidden focus:ring-2"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="hidden"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:block  h-full w-auto md:h-[36px] lg:h-[44px]  flex items-center justify-center  py-3 md:py-0`}
          id="navbar-default"
        >
          <ul
            className={`w-full h-full justify-center items-center flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-14 md:px-8 lg:px-10 xl:px-12
            `}
          >
            {menuOptions.map((option) => (
              <li key={option.id} className="w-max">
                <a
                  onClick={toggleMenu}
                  href={option.path}
                  className="text-black text-center text-sm xl:text-sm 2xl:text-base font-semibold leading-6 block rounded px-2 md:px-0"
                  aria-current="page"
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

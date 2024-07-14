import image from "../../assets/image-section-about.svg";
const options = [
  {
    id: 0,
    title: "Nome: ",
    description: "Diego Fernandes Andrade",
  },
  {
    id: 1,
    title: "Idade: ",
    description: "26 anos",
  },
  {
    id: 2,
    title: "Telefone: ",
    description: "(93) 99203-0706",
  },
  {
    id: 3,
    title: "E-mail: ",
    description: "diegodfafernandes@gmail.com",
  },
  {
    id: 4,
    title: "LinkedIn: ",
    description: "linkedin.com/in/diego-fernandes-dev",
  },
  {
    id: 5,
    title: "GitHub:",
    description: "github.com/Diego-1D",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="w-full py-4  mx-auto lg:py-10 flex items-center 2xl:justify-center px-[24px] md:px-[50px] lg:px-[80px] xl:px-[140px] 2xl:px-[130px]"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-2 2xl:max-w-[1233px]">
        <div className="flex-1 flex items-center">
          <img
            src={image}
            className="hidden lg:block w-[200px] md:w-[442px] lg:w-[326px] xl:w-[362px] 2xl:w-[504px] h-auto"
          />
        </div>
        <div className="flex-1 flex flex-col text-white ">
          <h1 className="text-white text-center lg:text-left font-bold text-[20px] md:text-[32px] leading-[24px] md:leading-[40px] lg:pb-4">
            Sobre mim
          </h1>
          <div className="flex-1 flex justify-center">
            <img
              src={image}
              className="block lg:hidden w-[200px] md:w-[442px] lg:w-[326px] xl:w-[362px] 2xl:w-[504px] h-auto my-8 lg:my-4"
            />
          </div>
          <p className="text-sm md:text-base leading-[20px] md:leading-[24px] ">
            Sou formado em Sistemas de Informação, atuando como desenvolvedor
            front-end com sólida experiência na construção de interfaces de
            usuário modernas, intuitivas e responsivas.
          </p>
          <p className="text-sm md:text-base leading-[20px] md:leading-[24px] pt-2">
            Durante minha trajetória, desenvolvi habilidades em criação e
            manutenção de interfaces de usuário, sempre focando em performance e
            usabilidade. Atualmente, trabalho na empresa GBX Desenvolvimento e
            Gerenciamento de Software ltda, desenvolvendo projetos em React e
            Next.js.
          </p>

          <div className="pt-2">
            {options.map((option) => (
              <div
                key={option.id}
                className="text-white  flex flex-col md:flex-row md:gap-2 mb-1 text-sm md:text-base "
              >
                <p className="font-semibold">{option.title}</p>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

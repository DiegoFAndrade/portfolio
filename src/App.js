import { About } from "./sections/about";
import { Footer } from "./sections/footer";
import { Header } from "./sections/header";
import { Projects } from "./sections/projects";
import { Skills } from "./sections/skills";

function App() {
  return (
    <div>
      <Header />
      <hr className="border-0 block h-[1px]  w-full bg-gray-800 my-6" />

      <About />
      <hr className="border-0 block h-[1px]  w-full bg-gray-800 my-6" />

      <Projects />
      <hr className="border-0 block h-[1px]  w-full bg-gray-800 my-6" />

      <Skills />
      <hr className="border-0 block h-[1px]  w-full bg-gray-800 my-6" />

      <Footer />
    </div>
  );
}

export default App;

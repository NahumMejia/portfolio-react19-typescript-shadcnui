import './App.css';
import Header from '@/Components/Header';
import imgProfile from '@/assets/your-photo.jpg';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdArrowDown } from "react-icons/io";
import { Separator } from './Components/Separator';
import Footer from './Components/Footer';
import { Button } from './Components/Button';
import Technologies from './Components/AboutMe';
import { useRef } from 'react';
import Experience from './Components/Experience';

function App() {
  const techStackRef = useRef<HTMLDivElement | null>(null);

  const scrollToTechStack = () => {
    if (techStackRef.current) {
      // Calculamos la posición correcta considerando el header fijo
      const headerOffset = 80; // Ajusta esto según la altura de tu header
      const elementPosition = techStackRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="bg-navy-blue pt-20 min-h-screen">
        <Header />
        <div className="flex md:flex-row flex-col justify-center items-center gap-x-20 gap-y-12 mx-auto px-6 sm:px-10 pt-12 max-w-screen-xl">
          <div className="relative w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96">
            <div className="absolute -inset-3 border-4 border-blue-900 rounded-full" />
            <img
              className="relative shadow-xl rounded-full w-full h-full object-cover"
              src={imgProfile}
              alt="Nahum Mejía"
            />
          </div>
          <div className="w-full md:w-[30rem] text-white md:text-left text-center">
            <h1 className="mb-2 font-mono text-xl">Hi 👋, I am</h1>
            <h1 className="mb-4 font-passion font-bold text-4xl sm:text-5xl leading-tight">
              Nahum Mejia Doniz
            </h1>
            <span className="block mt-2 font-mono text-blue-100 text-lg typewriter">
              Software Engineer - FullStack Web Developer
            </span>
            <Separator className="mt-5" />
            <div className="flex justify-center md:justify-start gap-6 mt-6 text-white text-2xl">
              <a
                href="https://github.com/NahumMejia"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com/nahum_mejiaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/nahúm-mejia-doniz-262a042b8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="flex justify-center md:justify-start">
              <Button
                variant={'ghost'}
                onClick={scrollToTechStack}
                className="flex justify-center items-center hover:shadow-[0_0_15px_2px_#1e3a8a] mt-6 border-2 border-blue-900 rounded-sm w-[250px] h-10 font-bold text-blue-100 transition-all duration-300"
              >
                <>
                  Who I Am
                  <IoMdArrowDown className="mt-1 ml-1" />
                </>
              </Button>
            </div>
          </div>
        </div>
        <div>
        <div id="tech-stack-anchor" ref={techStackRef} className="mt-16" />
        <section className="bg-black py-12">
          <Technologies />
        </section>
          <section>
            <Experience/>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
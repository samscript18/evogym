import { useEffect, useRef, RefObject, useState, EventHandler } from "react";
import { Logo } from "../assets/export";
import Button from "./Button";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [style, setStyle] = useState<string>("absolute");
  const navContainer = useRef<HTMLElement | null>(null);

  const handleScroll = () => {
    const scrollHeight: number = window.scrollY;
    const navHeight: any = navContainer.current?.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      return setStyle("fixed bg-primary-100 shadow-sm transition duration-300");
    } else {
      return setStyle("absolute");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full lg:px-[4rem] md:px-[3rem] sm:px-[2rem] xs:px-4 sm:py-3 xs:py-6 ${style} top-0 right-0 z-10`}
      ref={navContainer}
    >
      <div className="w-full flex justify-between items-center">
        <div className="w-[20%]">
          <img src={Logo} className="max-w-full" alt="logo" />
        </div>
        <div className="w-[80%] sm:flex xs:hidden justify-between items-center">
          <ul className="w-full flex justify-start items-center font-medium transition">
            <li className="md:mr-6 sm:mr-3">
              <a href="#home" className="hover:text-primary-500">
                Home
              </a>
            </li>
            <li className="md:mr-6 sm:mr-3">
              <a href="#benefits" className="hover:text-primary-500">
                Benefits
              </a>
            </li>
            <li className="md:mr-6 sm:mr-3">
              <a href="#classes" className="hover:text-primary-500">
                Our Classes
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-500">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="lg:w-[40%] md:w-[70%] sm:w-[80%] flex justify-between items-center">
            <a href="#home" className="hover:text-primary-500">
              Sign In
            </a>
            <div className="w-auto">
              <Button text="Become a Member" />
            </div>
          </div>
        </div>
        <div className="sm:hidden xs:block">
          {isNavbarOpen ? (
            <div className="w-[60vw] h-full flex flex-col bg-primary-100 fixed top-0 right-0 rounded-md shadow-md z-[20]">
              <div className="absolute top-[2%] left-[4%]">
                <RiCloseLine size={30} onClick={() => setIsNavbarOpen(false)} />
              </div>
              <div className="flex flex-col">
                <ul className="w-full absolute top-[15%] flex flex-col justify-start items-center font-medium transition">
                  <li className="mb-12">
                    <a
                      href="#home"
                      className="hover:text-primary-500"
                      onClick={() => setIsNavbarOpen(false)}
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-12">
                    <a
                      href="#benefits"
                      className="hover:text-primary-500"
                      onClick={() => setIsNavbarOpen(false)}
                    >
                      Benefits
                    </a>
                  </li>
                  <li className="mb-12">
                    <a
                      href="#classes"
                      className="hover:text-primary-500"
                      onClick={() => setIsNavbarOpen(false)}
                    >
                      Our Classes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-primary-500"
                      onClick={() => setIsNavbarOpen(false)}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <RiMenu3Line size={30} onClick={() => setIsNavbarOpen(true)} />
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

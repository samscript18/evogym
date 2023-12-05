import { HomeImg, HomeText, EvolveText } from "../assets/export";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      id="home"
      className="relative w-full h-auto lg:px-[4rem] md:px-[3rem] sm:px-[2rem] xs:px-4 sm:pt-[10rem] xs:pt-[7rem] pb-[6rem]"
    >
      <div className="w-full flex md:flex-row xs:flex-col justify-start items-center">
        <div>
          <div className="absolute md:top-[22%] sm:top-[10%] md:left-[4%] sm:left-[3%] sm:block xs:hidden">
            <img
              src={EvolveText}
              className="w-[500px] h-[90px]"
              alt="evolve-text"
            />
          </div>
          <motion.div
            className="lg:max-w-[700px] md:max-w-[500px] flex flex-col justify-start items-center mr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full z-[1]">
              <img src={HomeText} className="max-w-full" alt="home-text" />
            </div>
            <div className="w-full my-8">
              <p className="text-base">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
            </div>
            <div className="w-full flex justify-start items-center">
              <div className="lg:w-[25%] md:w-[40%] text-center">
                <Button text="Join Now" />
              </div>
              <a
                href="#contact"
                className="text-primary-300 hover:text-primary-500 transition ml-6 text-base underline cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
        <div className="flex-[0.75]">
          <img src={HomeImg} className="max--w-full" alt="home-img" />
        </div>
      </div>
    </header>
  );
};
export default Header;

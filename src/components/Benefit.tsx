import { BenefitType } from "../interfaces/types";
import { motion } from "framer-motion";

const Benefit = ({ icon, title, description }: BenefitType) => {
  return (
    <motion.div
      className="w-full h-auto rounded-md border-2 border-gray-100 px-5 py-8 flex flex-col justify-center items-center"
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <div className="w-6 h-6 p-6 bg-primary-100 hover:bg-primary-300 transition rounded-full flex justify-center items-center cursor-pointer">
        <div className="z-[1]">{icon}</div>
      </div>
      <h2 className="text-lg font-bold text-center my-4 cursor-pointer">
        {title}
      </h2>
      <p className="text-[15px] text-center mb-6">{description}</p>
      <a
        href="#contact"
        className="text-primary-300 hover:text-primary-500 transition text-base underline cursor-pointer"
      >
        Learn More
      </a>
    </motion.div>
  );
};
export default Benefit;

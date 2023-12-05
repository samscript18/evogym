import { motion } from "framer-motion";
import { Title, Benefit, Button } from "../components";
import { BenefitType } from "../interfaces/types";
import { HiHomeModern, HiUserGroup, HiAcademicCap } from "react-icons/hi2";
import { BenefitsImg, AbstractWaveImg, SparklesImg } from "../assets/export";

const BenefitsData: BenefitType[] = [
  {
    id: 1,
    icon: <HiHomeModern size={27} />,
    title: "State of the Art",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima eum labore incidunt tempora libero, laborum deserunt.",
  },
  {
    id: 2,
    icon: <HiUserGroup size={27} />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    id: 3,
    icon: <HiAcademicCap size={27} />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="relative w-full lg:px-[4rem] md:px-[3rem] sm:px-[2rem] xs:px-4 py-20"
    >
      <div className="w-full">
        <div className="w-full mb-8">
          <div className="w-[75%] flex flex-col">
            <motion.div
              className=""
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Title title="MORE THAN JUST A GYM." />
              <p className="text-[15px] mt-3">
                We provide world class fitness equipment, trainers and classes
                to get you to your ultimate fitness goals with ease. We provide
                true care into each and every member.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="w-full flex sm:flex-row xs:flex-col justify-between items-center mt-12 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {BenefitsData.map((benefit: BenefitType) => {
              return <Benefit key={benefit.id} {...benefit} />;
            })}
          </motion.div>
        </div>
        <div className="w-full flex justify-between items-center my-12">
          <div className="flex-[0.75]">
            <img src={BenefitsImg} className="max-w-full" alt="benefits-img" />
          </div>
          <div className="lg:max-w-[700px] md:max-w-[500px] flex flex-col mt-12 mb-6">
            <div className="absolute md:top-[50%] md:left-[37%] sm:top-[55%] sm:left-[3%] xs:top-[65%]">
              <img
                src={AbstractWaveImg}
                className="max-w-full"
                alt="abstract_waves-img"
              />
            </div>
            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="flex relative">
                <Title title="MILLIONS OF HAPPY MEMEBERS GETTING" />
                <h1 className="absolute lg:top-0 lg:right-[6%] md:top-[50%] md:right-[62%] sm:right-[19%] xs:top-[50%] xs:right-[6%] text-3xl pl-3 text-primary-500 font-montserrat font-bold">
                  FIT
                </h1>
              </div>
              <p className="text-[15px] mt-4">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="text-[15px] my-3">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
              <div className="lg:w-[25%] md:w-[40%] sm:w-[30%] xs:w-[40%] text-center mt-8">
                <Button text="Join Now" />
              </div>
            </motion.div>
            <div className="absolute md:bottom-[9%] sm:bottom-[6%] xs:bottom-[1%] right-[12%]">
              <img
                src={SparklesImg}
                className="max-w-full"
                alt="abstract_waves-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;

import { ContactImg } from "../assets/export";
import { Button, Title } from "../components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full lg:px-[4rem] md:px-[3rem] sm:px-[2rem] xs:px-4 py-16"
    >
      <div className="w-full mt-8 mb-8">
        <motion.div
          className="lg:max-w-[600px] md:max-w-[500px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="flex sm:flex-row xs:flex-col">
            <h1 className="text-3xl text-primary-500 font-bold mr-2">
              JOIN NOW
            </h1>
            <Title title="TO GET IN SHAPE" />
          </div>
          <p className="text-[15px] mt-4">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        <div className="flex md:flex-row xs:flex-col justify-between items-center mt-6">
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="NAME"
                className="w-full h-auto p-3 bg-primary-300 rounded-md outline-none"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                className="w-full h-auto p-3 my-3 bg-primary-300 rounded-md outline-none"
              />
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="MESSAGE"
                className="w-full h-auto p-3 mb-8 bg-primary-300 rounded-md outline-none"
              />
              <div className="sm:w-[25%] xs:w-[40%] text-center">
                <Button text="SUBMIT" />
              </div>
            </form>
          </motion.div>
          <div className="w-[80%] md:ml-16 md:mt-0 xs:mt-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="z-[1]">
                <img
                  src={ContactImg}
                  className="max-w-full"
                  alt="contact-img"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

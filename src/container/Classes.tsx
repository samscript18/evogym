import { Title, SingleClass } from "../components";
import { ClassData, sliderSettings } from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { ClassType } from "../interfaces/types";
import { motion } from "framer-motion";

const Classes = () => {
  return (
    <section
      id="classes"
      className="w-full bg-primary-100 lg:px-[4rem] md:px-[3rem] sm:px-[2rem] xs:px-4 py-12"
    >
      <div className="w-full py-8 flex flex-col">
        <motion.div
          className="max-w-[700px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Title title="OUR CLASSES" />
          <p className="text-[15px]  my-4">
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
            tellus quam porttitor. Mauris velit euismod elementum arcu neque
            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim
            mattis odio in risus nunc.
          </p>
        </motion.div>
        <div className="w-full my-8">
          <Swiper {...sliderSettings}>
            {ClassData.map((item: ClassType) => {
              return (
                <SwiperSlide key={item.id}>
                  <SingleClass {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Classes;

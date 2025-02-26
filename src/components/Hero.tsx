import resume from "../assets/resume.jpg";
import { HERO_CONTENT } from "../constants/constant";
import { motion } from "framer-motion";

const container = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  };
};
const containerRight = (delay: number) => {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  };
};

function Hero(): React.JSX.Element {
  return (
    <div className="border-b border-neutral-900 pb-4 lg-mb-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-[1px] lg:mt-16"
            >
              Nguyen Gia Khang
            </motion.h1>
            <motion.span
              variants={container(0.15)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Web Developer
            </motion.span>
            <motion.p
              variants={container(0.25)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <motion.a
          href="https://drive.google.com/file/d/19cSt5ZvWBLpzmlCQ7OEvA5WMV80l3s1o/view"
          variants={containerRight(0.25)}
          target="_blank"
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:p-8 rounded-md relative block"
        >
          <motion.a
            initial={{ y: 10 }}
            animate={{
              y: [10, -10],
              transition: {
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse",
                duration: 1.2,
              },
            }}
            href="https://drive.google.com/file/d/19cSt5ZvWBLpzmlCQ7OEvA5WMV80l3s1o/view"
            target="_blank"
            className="absolute z-5 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gray-300 py-2 px-5 rounded-md text-xl opacity-70 text-neutral-800 tracking-[1px] font-medium"
          >
            View my Resume
          </motion.a>
          <img src={resume} alt="" className="w-auto rounded-md blur-[3px]" />
        </motion.a>
      </div>
    </div>
  );
}

export default Hero;

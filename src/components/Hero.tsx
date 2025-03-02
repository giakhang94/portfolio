import resume from "../assets/resume.jpg";
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
    <div className="border-b border-neutral-900 pb-4 lg-mb-10 lg:mt-1 mt-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center  lg:items-start  xl:mt-2 h-full">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-3xl lg:text-5xl font-thin tracking-[2px] lg:mt-10 "
            >
              Nguyen Gia Khang
            </motion.h1>
            <div>
              <motion.span
                variants={container(0.15)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r tracking-[2px] from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl lg:text-4xl text-transparent"
              >
                Full Stack Web Developer
              </motion.span>
              <motion.p
                variants={container(0.25)}
                initial="hidden"
                animate="visible"
                className="my-5 max-w-xl  xl:leading-10 font-light xl:tracking-1 tracking-tighter text-justify leading-8"
              >
                Fullstack experience with{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  Node.js
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  React.js
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  Typescript
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  Express
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  NestJS
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  MySQL
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  MongoDB
                </span>{" "}
                and related packages such as{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  Redux
                </span>
                ,{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  reactQuery
                </span>
                ,... Design responsive website using{" "}
                <span className="bg-gray-300 text-gray-800  font-medium opacity-50 px-2 py-1 mx-[1px] rounded-sm">
                  TailwindCSS
                </span>
                . Be able to keep up with necessary updates. Proficient in
                English, can communicate effectively with colleagues and
                clients.
              </motion.p>
            </div>
          </div>
        </div>
        <motion.a
          href="https://drive.google.com/file/d/1KWImhTipphQQKcYHHgM9aQdLjJWy9hRP/view?usp=sharing"
          variants={containerRight(0.25)}
          target="_blank"
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:py-8 pl-8 rounded-md relative block  "
        >
          <motion.p
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
            className="absolute z-5 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gray-300 py-2 px-5 rounded-md text-xl opacity-70 text-neutral-800 tracking-[1px] font-medium"
          >
            View my Resume
          </motion.p>
          <img
            src={resume}
            alt=""
            className="w-auto rounded-md blur-[3px] h-full object-cover"
          />
        </motion.a>
      </div>
    </div>
  );
}

export default Hero;

import { DiMysql } from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";
import {
  RiGithubFill,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import websocket from "../assets/icons/websocket-svgrepo-com.svg";
import { SiNestjs, SiTypescript, SiMongodb, SiJest } from "react-icons/si";
import { motion } from "framer-motion";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-20" id="skills">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <h2 className="my-5 text-2xl">Good Practice:</h2>
      <div className="flex flex-wrap lg:flex-row items-center justify-center gap-4">
        <motion.div
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
          className="rounded-2xl border-4 border-neutral-600 p-4"
        >
          <RiNodejsLine className="lg:text-5xl md:text-xl sm:text-xl text-green-400" />
          <p className="lg:text-md md:text-sm">Node.js</p>
        </motion.div>
        <motion.div
          initial={{ y: 8 }}
          animate={{
            y: [11, -8],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <SiNestjs className="lg:text-5xl md:text-2xl sm:text-xl text-red-500" />
          <p className="lg:text-md md:text-sm">Nest.js</p>
        </motion.div>
        <motion.div
          initial={{ y: 6 }}
          animate={{
            y: [12, -8],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <RiReactjsLine className="lg:text-5xl md:text-xl sm:text-xl text-cyan-400" />
          <p className="lg:text-md md:text-sm">React.js</p>
        </motion.div>

        <motion.div
          initial={{ y: 2 }}
          animate={{
            y: [10, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <SiTypescript className="lg:text-5xl md:text-xl sm:text-xl text-blue-500" />
          <p className="lg:text-md md:text-sm">Typescript</p>
        </motion.div>
        <motion.div
          initial={{ y: 1 }}
          animate={{
            y: [12, -7],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <DiMysql className="lg:text-5xl md:text-xl sm:text-xl text-cyan-400" />
          <p className="lg:text-md md:text-sm">MySQL</p>
        </motion.div>
        <motion.div
          initial={{ y: -2 }}
          animate={{
            y: [5, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <SiMongodb className="lg:text-5xl md:text-xl sm:text-xl text-green-600" />
          <p className="lg:text-md md:text-sm">MongoDB</p>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{
            y: [20, -15],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <RiTailwindCssFill className="lg:text-5xl md:text-xl sm:text-xl text-teal-400" />
          <p className="lg:text-md md:text-sm">Tailwindcss</p>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{
            y: [20, -15],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <RiGithubFill className="lg:text-5xl md:text-xl sm:text-xl text-white" />
          <p className="lg:text-md md:text-sm">Github</p>
        </motion.div>
      </div>
      <h2 className="text-2xl mt-10">Familiar with: </h2>
      <div className="flex justify-center space-x-5">
        <motion.div
          initial={{ y: 4 }}
          animate={{
            y: [10, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <RiNextjsLine className="lg:text-5xl md:text-xl sm:text-xl text-gray-200" />
          <p className="lg:text-md md:text-sm">Next.js</p>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{
            y: [5, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-27  flex flex-col items-center justify-center"
        >
          <img
            className="lg:text-5xl md:text-xl sm:text-xl text-blue-600 "
            src={websocket}
          />
          <p className="lg:text-md md:text-sm">Websocket</p>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{
            y: [5, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-27  flex flex-col items-center justify-center"
        >
          <SiJest className="lg:text-5xl md:text-xl sm:text-xl text-red-600" />

          <p className="lg:text-md md:text-sm">Unit Test</p>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{
            y: [5, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-27  flex flex-col items-center justify-center"
        >
          <FaAws className="lg:text-5xl md:text-xl sm:text-xl text-orange-300" />

          <p className="lg:text-md md:text-sm">EC2</p>
        </motion.div>
        <motion.div
          initial={{ y: 10 }}
          animate={{
            y: [5, -10],
            transition: {
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: 1.2,
            },
          }}
          className="rounded-2xl border-4 border-neutral-600 p-4 w-25 h-auto flex flex-col items-center justify-center"
        >
          <FaDocker className="lg:text-5xl md:text-xl sm:text-xl text-blue-600" />
          <p className="lg:text-md md:text-sm">Docker</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;

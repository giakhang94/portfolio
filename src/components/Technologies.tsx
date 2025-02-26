import { DiMysql } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import {
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiNestjs, SiTypescript, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-20">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
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
          <RiNodejsLine className="text-5xl text-green-400" />
          <p className="text-md">Node.js</p>
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
          <SiNestjs className="text-5xl text-red-500" />
          <p className="text-md">Nest.js</p>
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
          <RiReactjsLine className="text-5xl text-cyan-400" />
          <p className="text-md">React.js</p>
        </motion.div>
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
          <RiNextjsLine className="text-5xl text-gray-200" />
          <p className="text-md">Next.js</p>
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
          <SiTypescript className="text-5xl text-blue-500" />
          <p className="text-md">Typescript</p>
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
          <DiMysql className="text-5xl text-cyan-400" />
          <p className="text-md">MySQL</p>
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
          <SiMongodb className="text-5xl text-green-600" />
          <p className="text-md">MongoDB</p>
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
          <FaDocker className="text-5xl text-blue-600" />
          <p className="text-md">Docker</p>
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
          <RiTailwindCssFill className="text-5xl text-teal-400" />
          <p className="text-md">Tailwindcss</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;

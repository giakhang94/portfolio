import { ABOUT_TEXT } from "../constants/constant";
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

function About(): React.JSX.Element {
  return (
    <div id="edu" className="border-b border-neutral-900 pb-10">
      <h1 className="mt-20 mb-5 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          variants={container(0)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 lg:p-8"
        >
          <p className="font-bold">Education: Banking University</p>
          <ol className="block list-disc pl-6 font-thin">
            <li className="text-md">Finance: Good degree</li>
            <li className="text-md">
              Management Information System: Good degree
            </li>
          </ol>
          <p className="pl-6">
            Graduation Thesis: Reversal Candlestick Pattern Detection System
            (Stock Market) using PHP, HTML, CSS - Score: 8.9
          </p>
          <p className="font-bold my-1">Other Certificates</p>
          <ol className="block list-disc pl-6 font-thin">
            <li className="text-md">
              <span className="font-medium">TOEIC 835</span> - Valid until
              10/2026
            </li>
          </ol>
        </motion.div>
        <motion.div
          variants={containerRight(0)}
          initial="hidden"
          whileInView="visible"
          className="lg:w-1/2 lg:p-8 w-full"
        >
          <div className="flex justify-center items-center lg:justify:start">
            <p className="my-2 max-w-xl text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

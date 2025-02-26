import { PROJECTS } from "../constants/constant";
import { motion } from "framer-motion";
interface ProjectItem {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

const container = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  };
};

function Projects() {
  return (
    <div
      className="mb-2 flex flex-col  lg:justify-center space-x-10 mx-5"
      id="projects"
    >
      <h1 className="my-15 text-center text-4xl">Recent Projects</h1>
      <div className="place-items-center grid lg:grid-cols-2 lg:gap-x-5 grid-cols-1 gap-5 lg:gap-y-5">
        {PROJECTS.map((project: ProjectItem, index: number) => {
          return (
            <motion.div
              variants={container(0.3)}
              initial="hidden"
              whileInView="visible"
              className="border-b border-neutral-600 pb-4"
              key={index + "projects"}
            >
              <div className="w-full max-w-[350px] ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 object-cover w-full lg:min-w-50 min-w-[300px] rounded-md"
                />
              </div>
              <div className="w-full max-w-[350px]">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-2 text-sm text-neutral-400 w-full lg:text-wrap">
                  {project.description}
                </p>
                <div className="flex flex-wrap w-full">
                  {project.technologies.map((tech: string, index: number) => {
                    return (
                      <span
                        key={index + project.title + tech}
                        className="mr-2 rounded-md bg-neutral-700 px-2 py-1 my-1 text-sm text-purple-400 font-medium"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

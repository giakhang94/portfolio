import { OTHER_PROJECTS } from "../constants/constant";
import { motion } from "framer-motion";
interface ProjectItem {
  title: string;
  image: string;
  description: string;
  git: string;
  demo: string;
  fullstack?: boolean;
  technologies: string[];
}

const container = (delay: number) => {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  };
};

function OtherProjects() {
  return (
    <div
      className="mb-8 flex flex-col  lg:justify-center space-x-10 mx-5"
      id="old-projects"
    >
      <h1 className="my-15 text-center text-4xl">Older Projects</h1>
      <div className="place-items-center grid lg:grid-cols-2 lg:gap-x-5 grid-cols-1 gap-5 lg:gap-y-5">
        {OTHER_PROJECTS.map((project: ProjectItem, index: number) => {
          return (
            <motion.div
              variants={container(0.1)}
              initial="hidden"
              whileInView="visible"
              className="border-b border-neutral-600 pb-4"
              key={index + "projects"}
            >
              <div className="w-full max-w-[350px] relative group ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-6 object-cover w-full lg:h-50 h-[250px] lg:min-w-50 min-w-[300px] rounded-md"
                />
                <div className="absolute hidden group-hover:block group-active:block top-0 right-0 z-5 w-full h-full rounded-md bg-gray-200 opacity-50"></div>
                <div className="absolute hidden hover:opacity-80 group-hover:flex group-active:flex active:opacity-80 items-center justify-center space-x-8 text-black font-medium text-xl top-0 right-0 z-10 w-full h-full rounded-md bg-transparent">
                  <a
                    className="hover:text-blue-700 active:text-blue-700"
                    href={project.demo}
                  >
                    Demo
                  </a>
                  <a
                    className="hover:text-blue-700 active:text-blue-700"
                    href={project.git}
                  >
                    Git Repo
                  </a>
                  {project.fullstack && (
                    <p className="absolute bottom-2 text-sm left-1">
                      Please allow about 1 minute for the page to finish loading
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full max-w-[350px]">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <div className="flex items-center space-x-8 lg:hidden mb-2">
                  <a
                    className="hover:text-blue-700 active:text-blue-700"
                    href={project.demo}
                  >
                    Demo Link
                  </a>
                  <a
                    className="hover:text-blue-700 active:text-blue-700"
                    href={project.git}
                  >
                    Git Repo Link
                  </a>
                </div>
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

export default OtherProjects;

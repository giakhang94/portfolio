import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import { LuSquareMenu } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-scroll";
function SmallMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="fixed top-1 left-1 lg:hidden block">
      <button
        onClick={() => {
          setShowNav(!showNav);
        }}
      >
        <LuSquareMenu size={30} />
      </button>
      {showNav && (
        <div className="flex flex-col items-start justify-center w-300px bg-white/80 p-3 text-black rounded-md">
          <Logo />
          <div className="flex  flex-col items-start space-y-8 my-5 justify-between   space-x-15 px-2 text-xl">
            <Link
              to="projects"
              className="cursor-pointer font-thin text-md hover:font-medium hover:scale-105"
              duration={500}
              smooth={true}
            >
              Projects
            </Link>
            <Link
              to="skills"
              className="cursor-pointer font-thin text-md hover:font-medium hover:scale-105"
              duration={500}
              smooth={true}
            >
              Technologies
            </Link>
            <Link
              to="contact"
              duration={500}
              smooth={true}
              className="font-thin text-md hover:font-medium hover:scale-105 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="edu"
              duration={500}
              smooth={true}
              className="font-thin text-md hover:font-medium hover:scale-105 cursor-pointer"
            >
              Education & Certificate
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-5 px-2 text-2xl">
            <a target="_blank" href="https://github.com/giakhang94/">
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gia-khang-nguy%E1%BB%85n-268b6826a/"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SmallMenu;

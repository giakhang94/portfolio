import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import { LuSquareMenu } from "react-icons/lu";
import { useState } from "react";
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
            <a className="font-medium text-md" href="#projects">
              Projects
            </a>
            <a className="font-medium text-md" href="#contact">
              Contact
            </a>
            <a className="font-medium text-md" href="#edu">
              Education & Certificate
            </a>
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

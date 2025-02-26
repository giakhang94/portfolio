import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "./Logo";

function Navbar(): React.JSX.Element {
  return (
    <nav className="hidden mb-8 bg-black lg:flex items-center justify-between py-6 sticky z-10 top-0 w-full px-1">
      <Logo />
      <div className="lg:flex items-center justify-between hidden  space-x-15 px-2 text-xl">
        <a className="font-thin text-md" href="#projects">
          Projects
        </a>
        <a className="font-thin text-md" href="#contact">
          Contact
        </a>
        <a className="font-thin text-md" href="#edu">
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
    </nav>
  );
}

export default Navbar;

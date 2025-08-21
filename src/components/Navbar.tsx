import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-scroll";

function Navbar(): React.JSX.Element {
  return (
    <nav className="hidden mb-8 bg-black/90 lg:flex items-center justify-between py-6 sticky z-10 top-0 w-full px-1">
      <Logo />
      <div className="lg:flex items-center justify-between hidden  space-x-15 px-2 text-xl">
        <Link
          to="projects"
          className="cursor-pointer font-thin text-md hover:text-white "
          duration={500}
          smooth={true}
        >
          Projects
        </Link>
        <Link
          to="skills"
          className="cursor-pointer font-thin text-md hover:text-white "
          duration={500}
          smooth={true}
        >
          Technologies
        </Link>
        <Link
          to="contact"
          duration={500}
          smooth={true}
          className="font-thin text-md hover:text-white  cursor-pointer"
        >
          Contact
        </Link>
        <Link
          to="edu"
          duration={500}
          smooth={true}
          className="font-thin text-md hover:text-white  cursor-pointer"
        >
          Education & Certifications
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
    </nav>
  );
}

export default Navbar;

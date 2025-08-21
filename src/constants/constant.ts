import project0 from "../assets/projects/project-0.png";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import shareVideo from "../assets/projects/shareVideo.jpg";
import realme from "../assets/projects/realme.jpg";
import foodCorner from "../assets/projects/foodCorner.jpg";
import musicPlayer from "../assets/projects/musicPlayer.jpg";
import chatApp from "../assets/projects/chatApp.jpg";
import cookingApp from "../assets/projects/cookingApp.jpg";

export const HERO_CONTENT = `Fullstack experience with Node.js, React.js/Typescript, Express, NestJS, MongoDB and related packages. Design responsive website using TailwindCSS. Able to keep up with necessary updates.
Proficient in English, with basic communication skills for interacting with colleagues and clients.
`;

export const ABOUT_TEXT = `I am passionate about web development and applications, which motivated me to transition from
a banking career to web development. I am determined to pursue this field for the long term. My
goal is to become a mid-level fullstack developer within 3 years and a senior fullstack developer
within 5–6 years.
I am also interested in mobile applications and games, so I plan to learn React Native and
Unity for 2D game development in the future.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const OTHER_PROJECTS = [
  {
    title: "Jobify - Fullstack",
    image: project2,
    description:
      "Jobify is a MERN stack job portal that allows users to create accounts, post job listings, and view analytics an so on..",
    technologies: ["Node.js", "TailwindCSS", "ReactJS", "MongoDB", "Express"],
    git: "https://github.com/giakhang94/mern-jobify-production",
    demo: "https://mern-jobify-nzoj.onrender.com/landing",
    fullstack: true,
  },

  {
    title: "Cooking App - MERN stack",
    image: cookingApp,
    description:
      "A recipe suggestion website that recommends a random dish based on user-provided ingredients. Features include full CRUD operations, authentication, and user management.",
    technologies: ["Node.js", "TailwindCSS", "ReactJS", "MongoDB", "Express"],
    git: "https://github.com/giakhang94/cooking-app",
    demo: "https://mern-cookingapp.onrender.com/",
    fullstack: true,
  },
  {
    title: "Real estate website - ReactJS",
    image: realme,
    description:
      "A real estate listing website built with React, TailwindCSS, and Firebase",
    technologies: ["ReactJS", "TailwindCSS", "firebase"],
    git: "https://github.com/giakhang94/real-me",
    demo: "https://real-me-sage.vercel.app/",
    fullstack: false,
  },
  {
    title: "Realtime Chat - NodeJS",
    image: chatApp,
    description:
      "A real-time chat application built with Node.js, React, and Socket.io.",
    technologies: ["NextJS", "ReactJS", "CSS", "socket.io"],
    demo: "https://chatapp2-socketio.onrender.com/",
    fullstack: true,
    git: "https://github.com/giakhang94/chatapp2",
  },
  {
    title: "Food Corner - ReactJS",
    image: foodCorner,
    description:
      "A simple website displaying various types of food using ReactJS. One of my first React projects",
    technologies: ["ReactJS", "CSS", "Flex-box"],
    git: "https://github.com/giakhang94/foodshop",
    demo: "https://foodshop-virid.vercel.app/",
    fullstack: false,
  },
  {
    title: "Music Player - Javascript",
    image: musicPlayer,
    description:
      "A simple music player using HTML CSS and JS. One of my first React projects",
    technologies: ["ReactJS", "CSS", "Flex-box"],
    git: "https://github.com/giakhang94/JSMusicPlayer",
    demo: "https://js-music-player-one.vercel.app/",
    fullstack: false,
  },
];
export const PROJECTS = [
  {
    title: "Blog RESTful API",
    image: project0,
    description:
      "API for a blog web application. Using Nestjs (RESTful API), Docker for running MySQL, Unit test for testing and swagger for API documentation.",
    technologies: [
      "Typescript",
      "NestJS",
      "Docker",
      "Unit test",
      "Swagger",
      "MySQL",
      "Prisma",
    ],
    git: "https://github.com/giakhang94/nestjs-reactjs-blog",
    fullstack: true,
  },
  {
    title: "ProTech Services - Fullstack",
    image: project1,
    description:
      "A booking platform for home services where customers can schedule, manage, and cancel appointments. Admins can add new services and manage orders.",
    technologies: ["Typescript", "TailwindCSS", "React", "Node.js", "MongoDB"],
    git: "https://github.com/giakhang94/maylanh",
    demo: "https://maylanh.onrender.com/",
    fullstack: true,
  },

  {
    title: "Find Videos - MERN Stack",
    image: shareVideo,
    description:
      "A web platform for creating video cards with tags and categories. Users can search by tags and categories to find relevant videos. Role-based access control for users, authenticated members, and admins",
    technologies: ["Typescript", "TailwindCSS", "React", "Node.js", "MongoDB"],
    git: "https://github.com/giakhang94/mern-share-videos",
    demo: "https://mern-share-videos.onrender.com/",
    fullstack: true,
  },
  {
    title: "Furniture Showroom - Fullstack NextJS",
    image: project3,
    description:
      "A full-stack e-commerce platform for furniture, built with NestJS, Clerk, and related packages",
    technologies: [
      "NextJS",
      "ReactJS",
      "Typescript",
      "Shadcn",
      "TailwindCSS",
      "MongoDB",
    ],
    git: "https://github.com/giakhang94/next-store-mongodb",
    demo: "https://next-store-mongodb.vercel.app/",
    fullstack: true,
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["ReactJS", "TailwindCSS", "framer-motion"],
    git: "https://github.com/giakhang94/portfolio",
    demo: "https://portfolio-woad-two-34.vercel.app/",
    fullstack: false,
  },
];

export const CONTACT = {
  address: "Phu Nhuan District, Ho Chi Minh City",
  phoneNo: "0987 2 77774",
  email: "khangvcsc@gmail..com",
};

import img1 from "../assets/images/projects-1.jpg";
import img2 from "../assets/images/projects-2.jpg";
import img3 from "../assets/images/projects-3.jpg";

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    img: img1,
    details:
      "A Single Page React App built with react-router-dom for navigation on other pages.The Portfolio is completely responsive and looks good on all screen sizes. All the data is dynamically loaded in each component using Javascript imports!",
    technologies: ["CSS", "Javascript", "React JS"],
    sourceCode: "https://github.com/mitul-garg/portfolio",
    link: "https://mitul-garg.netlify.app",
  },
  {
    id: 2,
    title: "MGames",
    img: img2,
    details:
      "A React App having some basic games and a fun game along with Log In system using Google OAuth 2.0 provided by Firebase. The main purpose of this app was to perform CRUD operations in Database using React JS. All games are completely responsive as well as the users can see their overall rankings and specific game ranking as well",
    technologies: ["CSS", "Javascript", "React JS", "Firebase"],
    sourceCode: "https://github.com/mitul-garg/mgames",
    link: "https://mgames.netlify.app",
  },
  {
    id: 3,
    title: "TODO Sync App",
    img: img3,
    details:
      "Login Sign-up system using Email and Password authentication provided by Firebase. The app is completely responsive and syncs the todos to the Firestore. Todos can be added, edited and deleted in single clicks",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
    sourceCode: "https://github.com/mitul-garg/todo-app-firebase",
    link: "https://mitul-garg.github.io/todo-app-firebase",
  },
  {
    id: 4,
    title: "Kalaamanch Website",
    img: img1,
    details:
      "A basic landing page for our Organization with all our details. All our competitions are organised smoothly on this website",
    technologies: ["HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/mitul-garg/kalaamanch",
    link: "https://kalaamanch.netlify.app",
  },
  {
    id: 5,
    title: "React Practice Projects",
    img: img2,
    details:
      "These projects were made by me to practice React JS. The styles and designs belong to John Smilga",
    technologies: ["Javascript", "React JS"],
    sourceCode: "https://github.com/mitul-garg/react-practice-projects",
    link: "https://mitul-garg.github.io/react-practice-projects",
  },
  {
    id: 6,
    title: "Mini Web Projects",
    img: img3,
    details:
      "These projects were made by me to practice Vanilla JS. The ideas were taken from various courses provided by Edyoda and Freecodecamp",
    technologies: ["HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/mitul-garg/Mini-Web-Projects",
    link: "https://mitul-garg.github.io/Mini-Web-Projects",
  },
];

import { v4 as uuidv4 } from "uuid";

// main images
import portfolio from "../assets/images/portfolio.png";
import springtodo from "../assets/images/springtodo.png";
import locationblog from "../assets/images/locationblog.png";
import toralabs from "../assets/images/toralabs.png";
import mgames from "../assets/images/mgames.png";
import ecommerce from "../assets/images/ecommerce.png";
import oldtodo from "../assets/images/oldtodo.png";
import kalaamanch from "../assets/images/kalaamanch.png";
import reactprojects from "../assets/images/reactprojects.png";
import jsprojects from "../assets/images/jsprojects.png";
import movienext from "../assets/images/movienext.png";
import stutter from "../assets/images/stutter.png";

// placeholder images
import portfolioPlaceholder from "../assets/placeholder-images/portfolio.jpg";
import springtodoPlaceholder from "../assets/placeholder-images/springtodo.jpg";
import locationblogPlaceholder from "../assets/placeholder-images/locationblog.jpg";
import toralabsPlaceholder from "../assets/placeholder-images/toralabs.jpg";
import mgamesPlaceholder from "../assets/placeholder-images/mgames.jpg";
import ecommercePlaceholder from "../assets/placeholder-images/ecommerce.jpg";
import oldtodoPlaceholder from "../assets/placeholder-images/oldtodo.png";
import kalaamanchPlaceholder from "../assets/placeholder-images/kalaamanch.jpg";
import reactprojectsPlaceholder from "../assets/placeholder-images/reactprojects.jpg";
import jsprojectsPlaceholder from "../assets/placeholder-images/jsprojects.jpg";
import movienextPlaceholder from "../assets/placeholder-images/movienext.jpg";
import stutterPlaceholder from "../assets/placeholder-images/stutter.jpg";

// https://www.freecodecamp.org/news/how-to-lazy-load-images-in-react/

export const projects = [
  {
    id: uuidv4(),
    title: "Stutter Classification",
    img: stutter,
    placeholderImg: stutterPlaceholder,
    details:
      "A stutter classification method developed using Machine Learning and MFCC features",
    technologies: ["Python", "Librosa", "Scikit-learn"],
    sourceCode: "https://github.com/mitul-garg/stutter-classification",
    link: "https://www.kaggle.com/datasets/mitulgargsam/sep28kmfcc",
  },
  {
    id: uuidv4(),
    title: "Location Blog",
    img: locationblog,
    placeholderImg: locationblogPlaceholder,
    details:
      "Location Blog is a MERN App where everyone can share images of the places they visit and also see other people's places.",
    technologies: ["MERN Stack"],
    sourceCode: "https://github.com/mitul-garg/location-blog",
    link: "https://mitul-garg-location-blog.netlify.app",
  },
  {
    id: uuidv4(),
    title: "ToraLabs (Freelance)",
    img: toralabs,
    placeholderImg: toralabsPlaceholder,
    details:
      "Revamped the UI of the landing page and created a product page (Device Info) from scratch, Created UI elements like Sliders(using Swiper), Animated Cards, Navbar using plain CSS, Used Email JS to send the contact form responses directly to the client’s email",
    technologies: ["React JS", "CSS", "Email JS", "Swiper"],
    sourceCode: "https://github.com/mitul-garg/toralabs",
    link: "https://www.toralabs.in",
  },
  {
    id: uuidv4(),
    title: "IMDB Clone",
    img: movienext,
    placeholderImg: movienextPlaceholder,
    details:
      "A Next app built using TMDB API and Tailwind CSS. User can view trending and top rated movies as well as search for movies",
    technologies: ["Next JS", "Tailwind CSS"],
    sourceCode: "https://github.com/mitul-garg/movie-next",
    link: "https://movie-next-mg.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "MGames",
    img: mgames,
    placeholderImg: mgamesPlaceholder,
    details:
      "A React App having some basic games and a fun game along with Log In system using Google OAuth 2.0 provided by Firebase. The main purpose of this app was to perform CRUD operations in Database using React JS. All games are completely responsive as well as the users can see their overall rankings and specific game ranking as well",
    technologies: ["CSS", "Javascript", "React JS", "Firebase"],
    sourceCode: "https://github.com/mitul-garg/mgames",
    link: "https://mgames.netlify.app",
  },

  {
    id: uuidv4(),
    title: "Portfolio",
    img: portfolio,
    placeholderImg: portfolioPlaceholder,
    details:
      "A Single Page React App built with react-router-dom for navigation on other pages.The Portfolio is completely responsive and looks good on all screen sizes. All the data is dynamically loaded in each component using Javascript imports!",
    technologies: ["CSS", "Javascript", "React JS"],
    sourceCode: "https://github.com/mitul-garg/portfolio",
    link: "https://mitulgarg.netlify.app",
  },
  {
    id: uuidv4(),
    title: "Courses API",
    img: springtodo,
    placeholderImg: springtodoPlaceholder,
    details:
      "Courses API is a basic CRUD API for seeing, adding, deleting and updating courses. The courses can be listed altogether as well as specifically",
    technologies: ["Spring Boot", "SQL", "OOPS", "Maven"],
    sourceCode: "https://github.com/mitul-garg/courses-api-spring-boot",
    link: "https://drive.google.com/file/d/152tZrIjaE8eQWW0h2_o5CXwCLI3Mo6b1/view",
  },
  {
    id: uuidv4(),
    title: "E-Commerce Website",
    img: ecommerce,
    placeholderImg: ecommercePlaceholder,
    details:
      "A fully-functional E-Commerce website with the ability to receive payments and place orders using Commerce JS and Stripe",
    technologies: ["React JS", "Commerce JS", "Stripe", "Material UI"],
    sourceCode: "https://github.com/mitul-garg/e-commerce",
    link: "https://mg-ecommerce.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "TODO Sync App",
    img: oldtodo,
    placeholderImg: oldtodoPlaceholder,
    details:
      "Login Sign-up system using Email and Password authentication provided by Firebase. The app is completely responsive and syncs the todos to the Firestore. Todos can be added, edited and deleted in single clicks",
    technologies: ["HTML", "CSS", "Javascript", "Firebase"],
    sourceCode: "https://github.com/mitul-garg/todo-app-firebase",
    link: "https://mitul-garg.github.io/todo-app-firebase",
  },
  {
    id: uuidv4(),
    title: "Kalaamanch Website",
    img: kalaamanch,
    placeholderImg: kalaamanchPlaceholder,
    details:
      "A basic landing page for our Organization with all our details. All our competitions are organised smoothly on this website",
    technologies: ["HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/mitul-garg/kalaamanch",
    link: "https://kalaamanch.netlify.app",
  },
  {
    id: uuidv4(),
    title: "React Practice Projects",
    img: reactprojects,
    placeholderImg: reactprojectsPlaceholder,
    details:
      "These projects were made by me to practice React JS. The styles and designs belong to John Smilga",
    technologies: ["Javascript", "React JS"],
    sourceCode: "https://github.com/mitul-garg/react-practice-projects",
    link: "https://mitul-garg.github.io/react-practice-projects",
  },
  {
    id: uuidv4(),
    title: "Mini Web Projects",
    placeholderImg: jsprojectsPlaceholder,
    img: jsprojects,
    details:
      "These projects were made by me to practice Vanilla JS. The ideas were taken from various courses provided by Edyoda and Freecodecamp",
    technologies: ["HTML", "CSS", "Javascript"],
    sourceCode: "https://github.com/mitul-garg/Mini-Web-Projects",
    link: "https://mitul-garg.github.io/Mini-Web-Projects",
  },
];

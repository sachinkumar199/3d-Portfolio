import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    RGB,
    PetMe,
  } from "../assets";

  import ProgressBar from "../components/progress";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js",
      icon: reactjs,
      iconBg: "#383E56",
      progress: "90",
    },
    {
      title: "Python",
      icon: python,
      iconBg: "#E6DEDD",
      progress: "75"
    },
    {
      title: "HTML",
      icon: html,
      iconBg: "#383E56",
      progress: "95"
    },
    {
      title: "CSS",
      icon: css,
      iconBg: "#E6DEDD",
      progress:"90"
    },
    {
      title: "Java Script",
      icon: javascript,
      iconBg: "#E6DEDD",
      progress:"87"
    },
    {
      title: "MongoDb",
      icon: mongodb,
      iconBg: "#E6DEDD",
      progress:"73"
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pet Me",
      description:
        "PetMe is a modern MERN Stack web application for pet adoption, helping users find their perfect furry friend. With a user-friendly interface and tailored questionnaire, PetMe makes it easy for prospective adopters to find and adopt the pet of their dreams.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
       
      ],
      image: PetMe,
      source_code_link: "https://github.com/sachinkumar199/Project_petme",
      webLink:"https://ppetme.netlify.app/",
    },
    {
      name: "RGB Color Game",
      description:
        "RGB Color Game is a fun and challenging HTML, CSS, and JavaScript game where you must choose the correct color based on the given RGB numbers. Test your color matching skills in Easy or Hard mode and see how high you can score!",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: RGB,
      source_code_link: "https://github.com/sachinkumar199/RGB_Game",
      webLink:"https://sachinkumar199.github.io/RGB_Game/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
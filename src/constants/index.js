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
    socialapp,
    holberton,
    appgym,
    carrent,
    jobit,
    freecodecamp,
    evently,
    appmusic,
    hostmeapp,
    titay,
    web3,
    hostmeMobile,
  } from "../assets";
  
export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Formation",
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
      title: "DevOps Engineer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
];
  
const formations = [
  {
    title: "Software engineer",
    company_name: "Software engineering Holberton School (Programme Alx)",
    icon: holberton,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2024",
    points: [
      "Backend Proficiency: Explore server-side technologies and databases. Acquire skills in backend frameworks such as Node.js (Express.js). Dive into database management systems like MongoDB or SQL to store and retrieve data efficiently.",
      "Full Stack Synergy: Integrate frontend and backend technologies seamlessly. Understand the architecture of full stack applications, ensuring smooth communication between client and server, and creating dynamic, data-driven websites and web applications.",
      "Version Control & Collaboration: Master tools like Git and GitHub for version control and collaborative coding. Learn the best practices of team development, enabling you to work effectively in a collaborative software development environment."
    ],
  },
    {
      title: "Front end Developer",
      company_name: "FreecodeCamp",
      icon: freecodecamp,
      iconBg: "#383E56",
      date: "March 2022 - Aout 2022",
      points: [
        "As a Front End Developer, I mastered essential technologies including CSS, HTML, JavaScript, and ReactJS:",
        "I learned to design visually appealing and responsive websites", 
        "Enhance user experience through interactive elements, and build dynamic web applications",
        "By the end of the course, I acquired the skills to craft elegant interfaces, optimize user journeys, and prepare for diverse roles in web development", 
        "ranging from UI/UX design to frontend engineering."
      ],
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
    name: "HOSTME Mobile(Android & iOS)",
    description:
      "HostMe-Mobile, a cutting-edge platform transforming how we host and stay in residential spaces. Whether you're a host or a guest, HostMe-Mobile offers a seamless experience for connecting and managing stays.",
    tags: [
      {
        name: "TailwindCss",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "REACT-NATIVE",
        color: "pink-text-gradient",
      },
      {
        name: "MondoDB",
        color: "green-text-gradient",
      },{
        name: "AWS S3",
        color: "pink-text-gradient",
      },
      {
        name: "Google Maps API",
        color: "pink-text-gradient",
      },
    ],
    image: hostmeMobile,
    source_code_link: "https://github.com/Zaim211/HOSTME-Mobile-Android-iOS",
    source_code_linked: "https://github.com/Zaim211/HOSTME-Mobile-Android-iOS",
  },
    {
      name: "HOSTME App",
      description:
        "HOSTME is an innovative platform that reimagines the concept of hosting guests in residential spaces, specifically tailored for hostels. Whether you are running a small, cozy hostel or a large, bustling one, HOSTME provides intuitive tools for managing reservations, promoting your hostel, and enhancing the guest experience.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "Vite.js",
          color: "pink-text-gradient",
        },
        {
          name: "MondoDB",
          color: "green-text-gradient",
        },{
          name: "AWS S3",
          color: "pink-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "blue-text-gradient",
        },
      ],
      image: hostmeapp,
      source_code_link: "https://github.com/Zaim211/HOSTME-Application",
      source_code_linked: "https://hostme-application.vercel.app/",
    },
    {
      name: "Evently App",
      description:
        "Full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. \
        Featuring seamless payment processing through Stripe, \
        you have the capability to purchase tickets for any event or even initiate and manage your own events.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "pink-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        }
      ],
      image: evently,
      source_code_link: "https://github.com/Zaim211/Event-platform",
      source_code_linked: "https://evently9.me/",
    },
    {
      name: "Social Media App",
      description:
        "Experience the next level of social connectivity with my Full Stack Social Media App. Built using cutting-edge technologies including React JS for dynamic user interfaces, Appwrite for backend simplicity, and Tailwind CSS for sleek design, our app delivers a seamless and responsive social experience.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "RestApi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: socialapp,
      source_code_link: "https://github.com/Zaim211/Titay-App-social-media",
      source_code_linked: "https://titay-app-social-media.vercel.app/",
    },
    {
      name: "Web3 Send Ether",
      description:
        "Send Crypto is a decentralized application (dApp) that allows users to send Ethereum to their friends via the Sepolia testnet. The app provides a user-friendly interface to connect a MetaMask wallet, send transactions, and view transaction history.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Solidity",
          color: "green-text-gradient",
        },
        {
          name: "Metamask",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: web3,
      source_code_link: "https://github.com/Zaim211/web3",
      source_code_linked: "https://web3-crypto-send.vercel.app/",
    },
    {
      name: "Titay",
      description:
        "Titay is a mobile application that allows users to upload, view, and interact with videos. The app offers a seamless user experience with features like video liking, saving, and more.",
      tags: [
        {
          name: "React-Native",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: titay,
      source_code_link: "https://github.com/Zaim211/Titay",
      source_code_linked: "https://github.com/Zaim211/Titay",
    },
    {
      name: "Music App",
      description:
        "Music-App it's application, inspired by  YouTube and created with React JS. This platform offers users the freedom to explore and engage with a diverse range of content seamlessly. A project developed with a passion for user-centric design and free accessibility, it stands as a testament to my skills in creating engaging and dynamic web applications.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: appmusic,
      source_code_link: "https://github.com/Zaim211/Music-App",
      source_code_linked: "https://6560d9936234c40579e42467--spiffy-mousse-c59935.netlify.app/",
    },
    {
      name: "Gym App",
      description:
        "Modern React 18 Fitness Exercises App With APIs. Introducing my state-of-the-art Fitness Exercises App built on Modern React 18! Elevate your workout routine with cutting-edge features and a seamless user experience. Craft personalized exercise plans, explore a vast library of fitness routines",
      tags: [
        {
          name: "Vuejs",
          color: "blue-text-gradient",
        },
        {
          name: "RestFullApi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: appgym,
      source_code_link: "https://github.com/Zaim211/gym_exercises",
      source_code_linked: "https://app-gym-titay.netlify.app/",
    },
   
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location, saving you time and effort in your job search.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "RestfullApi",
          color: "green-text-gradient",
        },
        {
          name: "Expo Go",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Zaim211/project_react_native_jobs",
      source_code_linked: "https://scann-application.vercel.app/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Zaim211/cars_showcase",
      source_code_linked: "https://cars-showcase-mu-beige.vercel.app/",

    },
];
  
  export { services, technologies, formations, testimonials, projects };
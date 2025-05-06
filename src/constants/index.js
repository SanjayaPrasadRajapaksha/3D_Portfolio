import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  csharp,
  reactjs,
  bootstrap,
  nodejs,
  mongodb,
  git,
  express,
  spring,
  meta,
  starbucks,
  tesla,
  shopify,
  chatApp,
  pos,
  bookApp,
  mysql,
  shoppingApp,
  sms,
  lms
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Frontend Developer",
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
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Backend Developer - Intern",
    company_name: "Hasthiya IT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sept 2024 – Mar 2025",
    points: [
      "Developed and maintained backend services using Node.js, Express.js, and Sequelize ORM.",
      "Implemented RESTful APIs and integrated them with MySQL databases for seamless data flow.",
      "Collaborated closely with frontend developers to support full-stack application development.",
      "Managed tasks and project progress using Jira, ensuring on-time delivery and client satisfaction.",
      "Handled client communication, requirement gathering, and post-delivery support.",
      "Participated in team code reviews and provided development support throughout the lifecycle.",
      "Deployed and managed backend services, including hosting via cPanel and debugging in production.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Shopping App",
    description:
      "Developed a full-stack online shopping platform for Dressbay, a leading Sri Lankan clothing brand. Key features include user authentication, product browsing, cart, secure Stripe payments, and an admin panel for inventory and order management. Built with MERN stack, JWT, MongoDB Atlas, and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: shoppingApp,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Shopping-App",
  },
  {
    name: "Chat App",
    description:
      "Built a real-time chat app using MongoDB, Express, React, Node.js, and Socket.IO. Features include JWT authentication, instant messaging, responsive design with TailwindCSS, and real-time notifications with React Hot Toast. Demonstrates full-stack development and real-time communication skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Chat-App-MERN",
  },
  {
    name: "POS System",
    description:
      "Developed a robust Point of Sale system using React for the frontend and Spring Boot for the backend. Key features include JWT authentication, Hibernate for data persistence, and Cloudinary for image management. The system is designed with Bootstrap for responsive UI styling, ensuring a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "spring boot",
        color: "pink-text-gradient",
      },
    ],
    image: pos,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Point_Of_Sale_System-SpringBoot-React",
  },
  {
    name: "Book Store App",
    description:
      "Developed a full-stack web app using the MERN stack. The frontend features React, Tailwind CSS, and Firebase for authentication, while the backend uses Express.js, MongoDB, and Node.js. Key functionalities include routing with React Router, local storage with LocalForage, and dynamic components with Swiper and React Icons.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: bookApp,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Book-Store-App-MERN",
  },
  {
    name: "SMS",
    description:
      "Developed a full-featured Supermarket Mgt System using Java with MVC architecture. Key features include inventory control, billing, user management, exception handling, and transaction safety. Implemented design patterns for efficient service management. Built with Java Swing for the UI and MySQL for data storage using JDBC.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "java swing",
        color: "pink-text-gradient",
      },
    ],
    image: sms,
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/Supermarket_MVC_CRUD",
  },
  {
    name: "LMS",
    description:
      "Developed a full-stack Learning Management System using React, Node.js, Express, and MongoDB. Implemented user authentication with Clerk, payments with Stripe, and file uploads via Cloudinary. The platform features course creation, progress tracking, and a responsive UI built with Tailwind CSS and Vite.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "orange-text-gradient",
      },
    ],
    image: lms, // Replace with actual image variable or URL
    source_code_link: "https://github.com/SanjayaPrasadRajapaksha/LMS", // Update with correct repo link
  }

];

export { services, technologies, experiences, projects };

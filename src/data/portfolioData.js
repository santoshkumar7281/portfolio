// ============================================================
// portfolioData.js
// Controls all content, text, links, and sections across the portfolio.
// ============================================================

export const personalInfo = {
  name: "SANTOSH KUMAR ",
  firstName: "SANTOSH KUMAR",
  brandName: "SANTOSH KUMAR",
  title: "Java Full Stack Developer",
  location: "Bengaluru, India",
  phone: "6303410628",
  emails: {
    primary: "santoshkumarsantoshkumar25182@gmail.com",
    secondary: "",
  },
  summary:
    "I am a Computer Science and Engineering student with specilaization Artificial Intelligence at CBIT PRODDATUR, currently pursuing a Java Full Stack Development internship at TAP Academy, where I am developing my technical skills and building my career in software development.",
  resumeUrl: "/Santosh_Kumar_Resume.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/santoshkumar7281",
  linkedin: "https://www.linkedin.com/in/c-k-santosh-kumar-02368b303/",
  instagram: "https://www.instagram.com/santosh_kumar7012/",
};

export const heroContent = {
  greeting: "Hi, Santosh Kumar here!",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate Computer Science student building clean, responsive web applications and robust full-stack software solutions.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:santoshkumarsantoshkumar25182@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Santosh_Kumar_Resume.pdf" },
};


export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Santosh Kumar</span>, a passionate Computer Science and Engineering (Artificial Intelligence) student pursuing my B.Tech degree. I am a Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, and Python. I have completed an internship at TAP Academy, where I gained practical exposure to software development and improved my technical skills. I enjoy building responsive web applications, developing REST APIs, working with databases, and solving real-world problems. My goal is to become a skilled Software Engineer and build innovative solutions that make a meaningful impact.`,
  techStack: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Hibernate",
    "React.js",
    "Python",
    "JavaScript",
    "MySQL",
    "REST APIs"
  ],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A methodical approach to engineering clean, reliable, and user-friendly software applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing system requirements, data workflows, and user expectations before writing code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting relational database schemas, wireframes, and intuitive user interfaces.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Writing clean, modular code with strong OOP principles in Java, Python, and frontend technologies.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Testing endpoints, validating cross-device responsiveness, and delivering maintainable builds.",
    },
  ],
  endText: "Ready to ship!",
};


export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java" },
        { name: "Python" },
        { name: "JavaScript" },
        { name: "SQL" }
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "React.js" },
        { name: "React Hooks" },
        { name: "Responsive Design" }
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot" },
        { name: "Spring Core" },
        { name: "Spring MVC" },
        { name: "Spring ORM" },
        { name: "Hibernate" },
        { name: "Java Servlets" },
        { name: "JSP" },
        { name: "JDBC" },
        { name: "REST APIs" }
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "Oracle" },
        { name: "DBMS" }
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
        { name: "Eclipse" },
        { name: "Postman" },
        { name: "MySQL Workbench" },
        { name: "Vite" }
      ],
    },
  ],
};


export const leadershipList = [
  {
    title: "Hackathons & Technical Competitions",
    description:
      "Participated in hackathons and technical competitions, strengthening problem-solving, teamwork, and communication skills.",
    role: "Participant & Team Collaborator",
    badge: "Hackathons",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy, Bengaluru",
    role: "Java Full Stack Development Intern",
    duration: "Ongoing",
    skills: [
      "Core Java",
      "Object-Oriented Programming (OOP)",
      "Problem-Solving",
      "Database Management",
      "Frontend Development",
      "Backend Development",
    ],
    tech: ["Java", "HTML", "CSS", "JavaScript", "SQL", "MySQL", "Spring Boot", "REST APIs", "Git & GitHub","Hibernate"],
  },
];

export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Breaking down complex programming problems into modular, efficient solutions.",
  },
  {
    name: "Communication",
    icon: "💬",
    desc: "Articulating technical concepts clearly and collaborating transparently across teams.",
  },
  {
    name: "Leadership",
    icon: "👑",
    desc: "Stepping up during collaborative hackathons and guiding group project goals.",
  },
  {
    name: "Creativity",
    icon: "💡",
    desc: "Designing engaging user interfaces and exploring innovative technical approaches.",
  },
];


export const projects = [
  {
    id: "project-01",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Netflix Clone",
    description:
      "Developed a responsive Netflix-inspired movie streaming application using React.js. Integrated movie APIs to fetch and display dynamic movie information. Implemented reusable components, movie browsing, search functionality, and responsive layouts for desktop and mobile devices.",
    techTags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "TMDB / OMDB API"
    ],
    links: {
      github: "",
      demo: "https://netflix-clone-re1v.vercel.app",
    },
    isFlagship: true,
  },

  {
    id: "project-02",
    number: "02",
    badge: "☕ Backend Development",
    title: "Book Management CRUD Application",
    description:
      "Developed a full-stack Book Management Application using Java, Spring Boot, React.js, and MySQL. Implemented REST APIs to perform Create, Read, Update, and Delete (CRUD) operations. Integrated frontend and backend to manage book details such as book name, author, and price.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Core",
      "Spring MVC",
      "Spring ORM",
      "Hibernate",
      "React.js",
      "MySQL",
      "REST APIs"
    ],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },

  {
    id: "project-03",
    number: "03",
    badge: "🍔 Full Stack Project",
    title: "Food Delivery Web Application",
    description:
      "Designed and developed a full-stack food delivery web application using Java, Servlets, JSP, JDBC, and MySQL. Implemented user authentication, restaurant browsing, menu management, shopping cart, and order placement functionality. Applied object-oriented programming principles and database integration.",
    techTags: [
      "Java",
      "Servlets",
      "JSP",
      "JDBC",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    links: {
      github: "",
      demo: "",
    },
    isFlagship: false,
  },

  {
    id: "project-04",
    number: "04",
    badge: "🛒 Frontend Project",
    title: "Tech Store Website",
    description:
      "Built a responsive e-commerce frontend using React.js for browsing technology products. Developed reusable product card components and category-based product listing views. Focused on responsive design and cross-device user experience.",
    techTags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3"
    ],
    links: {
      github: "",
      demo: "https://tap-project-two.vercel.app",
    },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/c-k-santosh-kumar-02368b303/",
};

export const education = {
  degree: "B.Tech Computer Science and Engineering (AI)",
  institution: "CBIT PRODDATUR",
  cgpa: "7.25/10",
  graduation: "2027",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Java · Python · MySQL · Web Dev",
    "Building innovative solutions that make a difference",
  ],
  credential: "B.Tech Computer Science and Engineering (AI)",
  copyright: `© ${new Date().getFullYear()} Santosh Kumar | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};


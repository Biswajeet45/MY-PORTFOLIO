// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitlabLogo from './assets/tech_logo/gitlab.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import cavissonLogo from './assets/company_logo/cavisson.png';
import ineuronLogo from './assets/company_logo/ineuron.jpeg';

// Education Section Logo's
import gietLogo from './assets/education_logo/giet.png';
import giet1Logo from './assets/education_logo/giet1.png';
import gpsLogo from './assets/education_logo/gps.jpeg';
import schoolLogo from './assets/education_logo/school.jpeg';

// Project Section Logo's
import qsLogo from './assets/work_logo/qs.png';
import sepLogo from './assets/work_logo/sep.png';
import iplLogo from './assets/work_logo/tata-ipl-logo.png';
import linkedinLogo from './assets/work_logo/LINKEDIN.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'ReactJS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'TailCSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'NodeJS', logo: nodejsLogo },
      { name: 'ExpressJS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JS', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitLab', logo: gitlabLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: cavissonLogo,
      role: "Fullstack Java Developer",
      company: "Cavisson Systems Inc.",
      date: "April 2025 - Aug 2025",
      desc: "Developed and maintained enterprise-level web applications using Angular for frontend and Java (Spring Boot) for backend, ensuring scalable and efficient solutions. ",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "TypeScript",
        "Node JS",
        "Spring Boot",
        "MongoDb",
      ],
    },
    {
      id: 1,
      img: ineuronLogo,
      role: "Full Stack Data Analytics Intern",
      company: "Inueron(Now PWSkills)",
      date: "Nov 2022 - July 2023",
      desc: " Identified key correlations between positive cases and ground truth values, providing data-driven insights to support informed decision-making. ",
      skills: [
        "Python",
        "Excel",
        "SQL",
        "PowerBI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: gietLogo,
      school: "GIET University, Gunupur",
      date: "Aug 2023 - May 2025",
      grade: "9.45 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GIET University, Mathura. During my time at GIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at GIET University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: giet1Logo,
      school: "GIET University, Gunupur",
      date: "Nov 2020 - May 2023",
      grade: "9.47 CGPA",
      desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from GIET University, Mathura. During my time at GIET, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. My experience at GIET University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Computer Applications - BCA",
    },
    {
      id: 2,
      img: gpsLogo,
      school: "Gandhi Public School, Gunupur",
      date: "April 2019 - July 2020",
      grade: "83.6%",
      desc: "I completed my class 12 education from Gandhi Public School, Gunupur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: schoolLogo,
      school: "ST.Xavier Senior Secondary High School, Rayagada",
      date: "March 2017 - May 2018",
      grade: "66.8%",
      desc: "I completed my class 10 education from ST.Xavier Senior Secondary High School, Rayagada, under the CBSE board, where I studied Science.",
      degree: "CBSE(X), Science",
    },
  ];
  
  export const projects = [

    {
      id: 0,
      title: "QuickShow",
      description:
        "A MERN stack project where users can sign up with Clerk, explore movies, choose seats, and book tickets with multi-session account switching, along with Stripe Payment Integration ",
      image: qsLogo,
      tags: ["MongoDB","Express.js","React.js","Node.js"],
      github: "https://github.com/Biswajeet45/QuickShow",
      live: "https://quick-show-ak73.vercel.app/",
    },
    {
      id: 1,
      title: "Smart Education Platform",
      description:
        "Designed and developed a multi-platform education platform with Angular as the frontend framework and Firebase as the backend. ",
      image: sepLogo,
      tags: ["HTML", "CSS", "TypeScript", "Angular", "Firebase"],
      github: "https://github.com/Biswajeet45/EDU-NOVA",
      live: "https://edu-nova-sep.vercel.app/",
    },
    {
      id: 2,
      title: "IPL Analysis Dashboard",
      description:
        "Developed an interactive dashboard for analyzing IPL match data using Python (Pandas, Matplotlib) and SQL for data storage and querying.",
      image: iplLogo,
      tags: ["Python","SQL","PowerBI"],
      github: "https://github.com/Biswajeet45/PBI_DASHBOARD/blob/main/IPL_ANALYSIS_2008_2022.pbix",
      live: "https://github.com/Biswajeet45/PBI_DASHBOARD/blob/main/IPL_ANALYSIS_2008_2022.pbix",
    },
    {
      id: 3,
      title: "LinkedIn Analysis Dashboard",
      description:
        " Built an analytics dashboard to extract and analyze LinkedIn profile and activity data using Python and SQL.",
      image: linkedinLogo,
      tags: ["Python","SQL","PowerBI"],
      github: "https://github.com/Biswajeet45/PBI_DASHBOARD/blob/main/LINKEDIN_ANALYSIS_DASHBOARD/LINKEDIN_DB.pbix",
      live: "https://github.com/Biswajeet45/PBI_DASHBOARD/blob/main/LINKEDIN_ANALYSIS_DASHBOARD/LINKEDIN_DB.pbix",
    },
  ];
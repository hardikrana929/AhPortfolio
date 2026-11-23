// ✏️ Edit this file to update your portfolio content.
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export const profile = {
  name: "Hardik Asavala",
  title: "Full-stack Web Developer",
  photo:
    "https://res.cloudinary.com/dxz5ta03h/image/upload/v1768740682/profesonal_image_w7xve2.jpg",
  email: "hstudy575@gmail.com",
  phone: "+91 63551 07551",
  phoneLink: "tel:+916355107551",
  whatsapp: "https://wa.me/916355107551",
  linkedin: "https://www.linkedin.com/in/hardik-asavala/",
  twitter: "https://x.com/Hardik_Asavala",
  address: "Shingadiya shri, Porbandar - 360575",
  about: [
    "My name is Hardik Asavala. I hold a Bachelor of Computer Application (BCA Hons.) and I am a MERN stack developer, currently working as an intern at BrainyBeam Pvt. Ltd. in Ahmedabad and looking for my first full-time role in Web Development.",
    "I am a dedicated person who enjoys solving coding problems. Reading and teaching have strengthened my communication and presentation skills.",
  ],
};

export const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss, color: "#1572B6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#888888" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwindcss", icon: SiTailwindcss, color: "#4479A1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#F05032" },
];

export const projects = [
  {
    title: "AuctionPro",
    subtitle: "Smart Cricket Auction System",
    description:
      "AuctionPro brings cricket auctions into one powerful platform. Manage players, teams, budgets, registrations, live bidding and auction results with complete control.",
    image:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1795369536/Screenshot_2026-11-18_162606_xqpsl3.png",
    link: "https://auction-frontend-eosin.vercel.app/",
    linkLabel: "Live Demo",
    tags: ["Smart Auction", "Smart Bidding"],
  },
  {
    title: "JanSahay",
    subtitle: "Government benefits discovery",
    description:
      "Helping every citizen discover the government benefits they deserve.",
    image:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1784434860/JanSahay_yyi7ap.png",
    link: "https://jansahay-frontend.vercel.app",
    linkLabel: "Live Demo",
    tags: [],
  },
  {
    title: "EduVault",
    subtitle: "MERN Stack",
    description: "Academic Resource Management Platform.",
    image:
      "https://res.cloudinary.com/ddn203hk8/image/upload/v1780594084/home_ikqisj.png",
    link: "https://eduvalut-frontend.vercel.app",
    linkLabel: "Live Demo",
    tags: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "IMS – React + Spring Boot",
    subtitle: "Full Stack",
    description: "Modern full stack Inventory Management System.",
    image:
      "https://res.cloudinary.com/dxz5ta03h/image/upload/v1772108997/imsdashboard_tdseq8.png",
    link: "https://imsproject-liard.vercel.app/login",
    linkLabel: "Live Demo",
    tags: ["React", "Spring Boot"],
  },
  {
    title: "E-Commerce Website",
    subtitle: "Responsive UI",
    description: "Responsive shopping website with modern UI.",
    image:
      "https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg",
    link: "https://ecommy.ccbp.tech/",
    linkLabel: "Live Demo",
    tags: [],
  },
  {
    title: "Electricity Billing System",
    subtitle: "Billing & payments",
    description: "Manage customer bills and payments.",
    points: ["Manage Customers", "Generate Bills", "Track Payments"],
    image:
      "https://loanjagat-appven.s3.ap-south-1.amazonaws.com/1753272672669_blob",
    link: "https://github.com/hardikrana929/electricity_billing_system",
    linkLabel: "View on GitHub",
    tags: [],
  },
  {
    title: "Inventory Management System",
    subtitle: "Digital inventory",
    description: "Reduce paperwork and manage inventory digitally.",
    points: ["Manage Products", "Manage Employees", "Low Stock Alert"],
    image: "https://miro.medium.com/1*U-G1yCK7UI3JESd1OJqMCw.gif",
    link: "https://github.com/hardikrana929/imsProject",
    linkLabel: "View on GitHub",
    tags: [],
  },
];

export const experiences = [
  {
    role: "Intern",
    company: "BrainyBeam Pvt. Ltd.",
    location: "Ahmedabad",
    period: "Present",
    current: true,
    description:
      "Currently working as an intern at BrainyBeam Pvt. Ltd., Ahmedabad, gaining hands-on experience on real-world web development projects.",
  },
  {
    role: "Web Development Intern",
    company: "XCEPTIVE SOLUTIONS LLP",
    location: "",
    period: "26 Dec 2025 – 25 Jan 2026",
    current: false,
    description:
      "Completed a 120-hour Web Development internship at XCEPTIVE SOLUTIONS LLP, gaining practical experience in web development and successfully achieving an A grade.",
  },
];

// Add more certificates here.
// image : put the certificate image in /public/certificates/ and use "/certificates/name.jpg"
//         (or any image URL). Leave "" to show a styled placeholder preview.
// link  : optional URL to the original certificate / verification page.
export const certifications = [
  {
    title: "Introduction to Data Science",
    issuer: "CISCO Networking Academy",
    date: "Mar 2026",
    description:
      "Completed a Introduction to Data Science course from CISCO Networking Academy.",
    credentialId: "",
    highlights: ["Data Science", "CISCO"],
    image: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367474/CISCO-Data_Science_e3cidy.png",
    link: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367474/CISCO-Data_Science_e3cidy.png",
  },
  {
    title: "Getting Started with Cybersecurity",
    issuer: "IBM SkillBuild",
    date: "Oct 2026",
    description:
      "Completed a Getting Started with Cybersecurity from IBM.",
    credentialId: "fad13df1-0b8b-45ec-38032a9b7d06",
    highlights: ["Cybersecurity", "IBM"],
    image: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367962/IBM-Certificate_tdynzy.png",
    link: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367962/IBM-Certificate_tdynzy.png",
  },
  {
    title: "GEET",
    issuer: "Infosys Foundation",
    date: "Aug 2026",
    description:
      "Completed a GEET(Graduate Employability Enhancement Training) course from Learnet.",
    credentialId: "",
    highlights: ["Infosys Foundatin", "Learnet", "Yuva Unstoppable"],
    image: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367473/Infosys_ngu4om.jpg",
    link: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367473/Infosys_ngu4om.jpg",
  },

  {
    title: "TCS ION Career Edge - AI Foundation",
    issuer: "TCS ION",
    date: "Sep 2026",
    description:
      "Completed TCS ION Career Edge - AI Foundation course that covers Introduction to AI | Generative AI Essentials | Prompt Engineering Basics | AI Tools | Responsible AI.",
    credentialId: "279243-28570705-1016",
    highlights: ["TCS", "TCS ION", "Career Edge Tech", "AI"],
    image: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367474/TCS-AI_Foundation_lyrnok.png",
    link: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367474/TCS-AI_Foundation_lyrnok.png",
  },
  {
    title: "CCBP 4.0 Intensive",
    issuer: "nasscom",
    date: "Nov 2026",
    description:
      "Aligned to Competency Standards developed by IT-ITeS Sector Skills Council Nasscom in collaboration with Industry and approved by Govemment.",
    credentialId: "",
    highlights: ["nasscom", "CCBP 4.0", "NxtWave"],
    image: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367473/nasscom_naczdl.png",
    link: "https://res.cloudinary.com/ddn203hk8/image/upload/v1795367473/nasscom_naczdl.png",
  }
];
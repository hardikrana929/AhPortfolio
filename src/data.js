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
  SiSpringboot,
  SiGit,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

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
  { name: "Java", icon: FaJava, color: "#E76F00" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export const projects = [
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
    title: "Web Development Internship – A Grade",
    issuer: "XCEPTIVE SOLUTIONS LLP",
    date: "Jan 2026",
    description:
      "Completed a 120-hour Web Development internship, gaining practical experience in web development and achieving an A grade.",
    credentialId: "",
    highlights: ["120 hours", "Grade A", "Web Development"],
    image: "",
    link: "",
  },
  // {
  //   title: "Your certificate name",
  //   issuer: "Issuer",
  //   date: "Mon YYYY",
  //   description: "Short description",
  //   credentialId: "ABC-12345",
  //   highlights: ["React", "Node.js"],
  //   image: "/certificates/my-cert.jpg",
  //   link: "https://...",
  // },
];

import project from "@/assets/project.png";
import project3 from "@/assets/project3.png";
import project2 from "@/assets/project2.png";
import project1 from "@/assets/project1.png";
import css from "@/assets/css.png";
import docker from "@/assets/docker.png";
import figma from "@/assets/figma.png";
import git from "@/assets/git.png";
import java from "@/assets/java.png";
import php from "@/assets/php.png";
import python from "@/assets/python.png";
import html from "@/assets/html.png";
import js from "@/assets/javascript.png";
import mongo from "@/assets/mongodb.png";
import node from "@/assets/nodejs.png";
import react from "@/assets/reactjs.png";
import redux from "@/assets/redux.png";
import tailwind from "@/assets/tailwind.png";
import typescript from "@/assets/typescript.png";
import CallToAction from "@/assets/calltoaction.png";

export const projects = [
  {
    img: project1,
    name: "Ecommerce",
    desc: "The application offers a seamless platform for customers to explore and purchase a diverse range of branded shoes, combining style and quality. With an intuitive user interface, users can effortlessly browse through an extensive collection of shoes.",
    link: 'https://shopperslide.netlify.app/'
  },
  {
    img: project2,
    name: "Movie Application",
    desc: " The web application serves as a comprehensive platform for users to explore the latest movies and shows effortlessly. Integrates various databases and APIs to fetch latest data and update the user interface accordingly.",
    link: 'https://moviesdiscovery.netlify.app/'
  },
  {
    img: project3,
    name: "Inventory Management System",
    desc: " Designed and implemented an inventory management system for a retail client. Streamlined operations by automating inventory tracking, order processing, and generating real-time reports for better decision-making.",
    link: 'https://jeilo.netlify.app/'
  },
  {
    img: project,
    name: "Health Monitoring App",
    desc: "Created a mobile application for health monitoring, enabling users to track their fitness goals, nutrition intake, and physical activities. Integrated wearable device data for a seamless and personalized user experience.",
    link: ''
  },
  {
    img: project,
    name: "Financial Analytics Dashboard",
    desc: " Developed a customizable analytics dashboard for a financial institution, providing insights into key performance indicators, market trends, and risk analysis. Enhanced decision-making capabilities through data visualization.",
    link: ''
  },
  {
    img: project,
    name: "Smart Home Automation System",
    desc: "Engineered a smart home automation system, integrating IoT devices for centralized control of lighting, security, and energy consumption. Enhanced user convenience, energy efficiency, and security through remote monitoring and automation.",
    link: ''
  },
];

export const languages = {
  title: "Our Proficient Programming Languages",
  desc: "We are well-versed in a diverse set of programming languages, enabling us to deliver versatile and high-quality solutions",
  languages: [css, docker, python, figma, java, php, git, html, js, , mongo, node, react, redux, tailwind, typescript],
};
export const calltoAction = {
  text: "Uncertain about the tech solutions that best suit your business? Partner with Vigilux Corp for strategic consultations",
  img: CallToAction,
};
export const stats = [
  {
    number: "99%",
    title: "Customer Satisfaction",
  },
  {
    number: "32",
    title: "Engaged Users Monthly",
  },
  {
    number: "90+",
    title: "Successful Projects Delivered",
  },
  {
    number: "200%",
    title: "Business Growth Achieved",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Kwame Osei",
    title: "Intuitive Website Design",
    review:
      "Navigating this website is a pleasure! The user interface is beautifully designed, and I appreciate the seamless experience. It's my preferred platform for exploring the digital world.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nia Abimbola",
    title: "Exceptional User Experience",
    review:
      "I had an outstanding experience using this website. The design is modern, and I could effortlessly explore different features. The attention to detail helped me engage effortlessly.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sekou Diop",
    title: "Innovative Design Solutions",
    review:
      "Whether I'm browsing on my phone or desktop, this website offers innovative design solutions. The creative approach ensures a visually appealing and user-friendly experience.",
    rating: 5,
  },
  {
    id: 4,
    name: "Aisha Kamara",
    title: "Responsive Web Development",
    review:
      "I reached out with a development query, and the team was quick to respond. Their expertise and collaboration made me confident in choosing this platform for my projects.",
    rating: 4,
  },
  {
    id: 5,
    name: "Chijioke Nwachukwu",
    title: "Dependable Design Platform",
    review:
      "In my experience with design tools, this platform stands out for its reliability. The features are robust, and the design process is smooth. Highly recommended for fellow creatives.",
    rating: 5,
  },
  {
    id: 6,
    name: "Fatou Traoré",
    title: "Efficient UX Planning",
    review:
      "Planning user experiences has become much more efficient with this platform. The thoughtful interfaces and detailed design descriptions make it easy to create engaging digital products.",
    rating: 4,
  },
];

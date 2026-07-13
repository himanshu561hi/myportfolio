import React from 'react';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaRobot, FaMicrophone, FaLinkedin, FaEnvelope, FaInstagram 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSupabase, SiPostman, SiVercel, SiNetlify, SiRender, SiOpenai, SiGoogle, SiLeetcode, SiWakatime, SiGeeksforgeeks 
} from 'react-icons/si';

import project1Img from '../assets/project 1.png';
import project2 from "../assets/project 2.png";
import project3 from "../assets/project 3.png";

import achievement1_1 from "../assets/achievement1_1.jpg";
import achievement1_2 from "../assets/achievement1_2.jpg";
import achievement1_3 from "../assets/achievement1_3.jpg";
import achievement2_1 from "../assets/achievement2_1.jpg";
import achievement2_2 from "../assets/achievement2_2.jpg";
import achievement3_1 from "../assets/achievement3_1.jpg";
import achievement3_2 from "../assets/achievement3_2.jpg";

export const socialLinks = [
  { icon: <FaGithub size={22} />, href: 'https://github.com/himanshu561hi', label: 'GitHub' },
  { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/himanshu561hi/', label: 'LinkedIn' },
  { icon: <SiWakatime size={22} />, href: 'https://wakatime.com/@himanshu561hi', label: 'WakaTime' },
  { icon: <FaInstagram size={22} />, href: 'https://www.instagram.com/_oye_himanshu/', label: 'Instagram' },
  { icon: <FaEnvelope size={22} />, href: 'mailto:himanshu561hi@gmail.com', label: 'Email' },
  { icon: <SiLeetcode size={22} />, href: 'https://leetcode.com/u/himanshu561hi/', label: 'LeetCode' },
];

export const technologies = [
  { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
  { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900" /> },
  { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black" /> },
  { name: 'Netlify', icon: <SiNetlify className="text-[#00C7B7]" /> },
  { name: 'Render', icon: <SiRender className="text-black" /> },
  { name: 'OpenAI API', icon: <SiOpenai className="text-black" /> },
  { name: 'Gemini API', icon: <SiGoogle className="text-[#4285F4]" /> },
  { name: 'Groq API', icon: <FaRobot className="text-orange-500" /> },
  { name: 'Vapi AI', icon: <FaMicrophone className="text-purple-500" /> },
];

export const experiences = [
  
  {
    company: "Mirai School of Technology",
    role: "Artificial Intelligence Intern",
    duration: "Jul 2026 – Present (8 Weeks)",
    description: [
      "Currently participating in an industry-focused software development program.",
      "Building production-ready projects with modern web technologies.",
      "Learning scalable application architecture and industry best practices.",
      "Collaborating on real-world development tasks and technical assignments."
    ],
    technologies: [
      "React.js",
      "Python",
      "Artificial Intelligence",
      "Generative AI",
      "Machine Learning",
      "LLMs"
    ]
  },
  {
    company: "Edunet Foundation",
    role: "Artificial Intelligence Intern",
    duration: "May 2026 – Jun 2026 (6 Weeks)",
    description: [
      "Completed an intensive AI internship focused on real-world applications.",
      "Worked with Generative AI, LLMs, and prompt engineering concepts.",
      "Built AI-powered solutions and explored machine learning workflows.",
      "Strengthened practical AI development and problem-solving skills."
    ],
    technologies: [
      "Python",
      "Artificial Intelligence",
      "Generative AI",
      "Machine Learning",
      "LLMs"
    ]
  },
  {
    company: "The SkyBrisk",
    role: "Full Stack Developer Intern",
    duration: "Dec 2025 – May 2026 (6 Months)",
    description: [
      "Developed and maintained full-stack web applications using the MERN stack.",
      "Built responsive user interfaces and integrated REST APIs.",
      "Collaborated with the development team to deliver scalable features.",
      "Worked with Git, code reviews, and agile development practices."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Git"
    ]
  }
];
export const projects = [
  {
   title: "AI Interview Platform",
description:
  "An AI-powered recruitment platform built for recruiters to automate candidate screening at scale. Conduct 100+ AI voice interviews simultaneously, analyze resumes, generate detailed interview reports, track candidate performance, and make data-driven hiring decisions from a centralized dashboard.",

tech: [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Gemini API",
  "Groq API",
  "Vapi AI"
],

features: [
  "Bulk AI Voice Interviews",
  "Resume Analysis",
  "AI Candidate Scoring",
  "Detailed Interview Reports",
  "Recruiter Dashboard",
  "Hiring Decision Management"
],

image: project1Img,

github: "https://github.com/himanshu561hi/Interviewerr",
demo: "https://interviewerr.vercel.app/",
  },
  {
    title: "School ERP System",
    description:
      "Designed a scalable multi-tenant School ERP frontend featuring role-based access, student and teacher management, enterprise dashboards, and a modern admin experience. Backend APIs and authentication are planned for future development.",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],

    features: [
      "Multi-Tenant Architecture",
      "Role-Based Access",
      "Student & Teacher Management",
      "Analytics Dashboard",
      "Responsive UI",
    ],

    image: project2, // Local asset

    github: "https://github.com/himanshu561hi/DigiSchool/",
    demo: "https://digischool-2f3o.onrender.com/",
  },
  {
    title: "Event Finder Platform",
  description:
    "A location-based event discovery platform that helps users find nearby events, explore by category, view venues on interactive maps, and book tickets through a seamless, user-friendly interface.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Google Maps API"
  ],

  features: [
    "Location-Based Discovery",
    "Interactive Maps",
    "Category Filtering",
    "Event Booking",
    "User Authentication"
  ],

  image: project3,

  github: "#",
  demo: "#",
  }
];

export const achievements = [
  {
    icon: "🏆",
    title: "Top 75 Teams",
    description: "Hacknovate 7.0 – International Hackathon",
    location: "ABESIT, Ghaziabad",
    details:
      "Selected among the Top 75 teams out of 10,000+ participants in Hacknovate 7.0, a 30-hour International Hybrid Hackathon. Collaborated with the team to design and build an innovative solution under strict time constraints while presenting the final prototype to industry experts.",
    images: [achievement2_1, achievement2_2]
  },
  {
    icon: "🥇",
    title: "1st Place",
    description: "SCROLLS'25 – National Technical Paper Presentation",
    location: "AKGEC, Ghaziabad",
    details:
      "Won 1st Place in the National-Level Technical Paper Writing Competition (SCROLLS'25). Presented a research paper demonstrating technical knowledge, innovation, and presentation skills before an expert evaluation panel.",
    images: [achievement1_1, achievement1_2, achievement1_3]
  },
  {
    icon: "🥉",
    title: "3rd Place",
    description: "TechnoHack 3.0 – Project Exhibition",
    location: "INMANTEC, Ghaziabad",
    details:
      "Secured 3rd Position in TechnoHack 3.0 – Innovation Ignite Project Exhibition by presenting an innovative software solution and demonstrating its technical implementation, usability, and real-world impact.",
    images: [achievement3_1, achievement3_2]
  }
];

export const profiles = [
  {
    platform: "GitHub",
    description: "Explore my open-source projects, contributions, and daily commits.",
    link: "https://github.com/himanshu561hi",
    icon: <FaGithub />,
    iconColor: "text-gray-900",
  },
  {
    platform: "LinkedIn",
    description: "Connect with me for professional updates and collaborations.",
    link: "https://www.linkedin.com/in/himanshu561hi/",
    icon: <FaLinkedin />,
    iconColor: "text-blue-700",
  },
  {
    platform: "LeetCode",
    description: "Check out my progress on Data Structures and Algorithms.",
    link: "https://leetcode.com/u/HimanshuGupta_561/",
    icon: <SiLeetcode />,
    iconColor: "text-yellow-600",
  },
  {
    platform: "Instagram",
    description: "Follow me for behind-the-scenes tech updates and personal projects.",
    link: "https://instagram.com/himanshu561hi",
    icon: <FaInstagram />,
    iconColor: "text-pink-600",
  }
];

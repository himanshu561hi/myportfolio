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
    company: "Anethix Labs Private Limited",
    role: "Software Development Intern",
    duration: "Sep 2026 – Present",
    description: [
      "Contributing to the backend development of a CRM software as part of the startup's software development team.",
      "Developing and maintaining RESTful APIs and server-side business logic for CRM features.",
      "Working with database operations, data models, validation, authentication, and API integrations based on project requirements.",
      "Debugging, testing, and optimizing backend functionality to ensure reliable and scalable application performance.",
      "Collaborating with the development team throughout the Software Development Lifecycle (SDLC) on a live startup product."
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
      "SDLC"
    ]
  },
  {
    company: "Mirai School of Technology",
    role: "Artificial Intelligence Intern",
    duration: "July 2026 – August 2026",
    description: [
      "Currently participating in an industry-focused software development program.",
      "Built 5+ AI-powered web applications using React.js, Node.js, and LLM APIs.",
      "Contributed to scalable application architecture and followed industry best practices for frontend development.",
      "Developed AI-powered applications by integrating LLM APIs, implementing prompt engineering techniques, and building production-ready frontend features."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "LLM APIs",
      "Prompt Engineering",
      "Generative AI"
    ]
  }
];
export const projects = [
  {
    title: "AI Interview Platform (AI Recruiter)",
    description:
      "A real-time AI voice interview platform using Next.js, Gemini API, Vapi AI, and Supabase. Enables AI-powered speech-based interview interactions, dynamic question generation with low latency, and secure session management.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Supabase",
      "Gemini API",
      "Vapi AI"
    ],
    features: [
      "Real-time AI Voice Interviews",
      "Dynamic Question Generation",
      "Speech-Based Interactions",
      "Secure RBAC Authentication",
      "Interview Session Management",
      "Low Latency Communication"
    ],
    image: project1Img,
    github: "https://github.com/himanshu561hi/Interviewerr",
    demo: "https://interviewerr.vercel.app/",
  },
  {
    title: "School ERP Management System",
    description:
      "Engineered a multi-tenant School ERP application using React.js, Vite, and Tailwind CSS with secure RBAC-based authentication. Features modular data tables, dashboards, search filtering, pagination, REST API integration, and complete CRUD functionality.",
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Multi-Tenant Architecture",
      "RBAC Authentication & Authorization",
      "Modular Data Tables & Modals",
      "REST API Integration & CRUD",
      "State & Performance Optimization",
    ],
    image: project2,
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
    github: "https://github.com/himanshu561hi/Event-Finder",
    demo: "https://eventsyncc.vercel.app/",
  }
];

export const achievements = [
  {
    icon: "📜",
    title: "2nd Position (Track II)",
    description: "NEXUS 2026 – Pre Conference Paper Writing Competition",
    location: "Hi-Tech Institute of Eng. & Tech., Ghaziabad",
    details:
      "Secured 2nd Position in Track II at NEXUS 2026, a Pre-Conference Paper Writing Competition organized by Hi-Tech Institute of Engineering & Technology in September 2026.",
    images: []
  },
  {
    icon: "🇮🇳",
    title: "3rd Position",
    description: "Har Ghar Tiranga Quiz Competition",
    location: "Hi-Tech Institute of Eng. & Tech., Ghaziabad",
    details:
      "Secured 3rd Position in the Quiz Competition held on 17 August 2026 as part of the Har Ghar Tiranga celebrations at Hi-Tech Institute of Engineering & Technology, Ghaziabad.",
    images: []
  },
  {
    icon: "🥉",
    title: "3rd Position",
    description: "VARCHASVA 2026",
    location: "BITS&BYTES, Noida",
    details:
      "Secured 3rd Position at VARCHASVA 2026, an inter-college technical competition organized by BITS&BYTES Noida in August 2026.",
    images: []
  },
  {
    icon: "🏆",
    title: "Top 75 Teams",
    description: "Hacknovate 7.0 – International Hackathon",
    location: "ABESIT, Ghaziabad",
    details:
      "Secured selection among Top 75 teams out of 10,000+ participants in Hacknovate 7.0, a 30-hour International Hybrid Hackathon organized by ABESIT Ghaziabad in April 2026.",
    images: [achievement2_1, achievement2_2]
  },
  {
    icon: "🥉",
    title: "3rd Position",
    description: "TechnoHack 3.0 – Project Exhibition",
    location: "INMANTEC, Ghaziabad",
    details:
      "Secured 3rd Position in TechnoHack 3.0 – Innovation Ignite project exhibition organized by INMANTEC Institutions Ghaziabad in April 2026.",
    images: [achievement3_1, achievement3_2]
  },
  {
    icon: "🥇",
    title: "1st Place",
    description: "SCROLLS'25 – National Technical Paper Presentation",
    location: "AKGEC, Ghaziabad",
    details:
      "Secured 1st Place in National-Level Technical Paper Writing Competition (SCROLLS'25) organized by AKGEC Ghaziabad in October 2025.",
    images: [achievement1_1, achievement1_2, achievement1_3]
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
    link: "https://leetcode.com/u/himanshu561hi/",
    icon: <SiLeetcode />,
    iconColor: "text-yellow-600",
  },
  {
    platform: "Instagram",
    description: "Follow me for behind-the-scenes tech updates and personal projects.",
    link: "https://instagram.com/_oye_himanshu",
    icon: <FaInstagram />,
    iconColor: "text-pink-600",
  }
];

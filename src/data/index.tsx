import React from 'react';
import { 
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaRobot, FaMicrophone, FaLinkedin, FaEnvelope, FaInstagram 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiSupabase, SiPostman, SiVercel, SiNetlify, SiRender, SiOpenai, SiGoogle, SiLeetcode, SiWakatime, SiGeeksforgeeks 
} from 'react-icons/si';

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
    company: "Code-A-Nova",
    role: "Full Stack Developer Intern",
    duration: "2026 – Present",
    description: [
      "Developed scalable MERN Stack applications.",
      "Built responsive user interfaces using React and Tailwind CSS.",
      "Integrated REST APIs and AI services.",
      "Worked with GitHub-based development workflow.",
      "Collaborated with team members on real-world projects."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"]
  },
  {
    company: "Freelance / Personal Projects",
    role: "Full Stack Developer",
    duration: "2025 – Present",
    description: [
      "Built multiple production-ready web applications.",
      "Developed AI-powered projects using OpenAI, Gemini and Groq APIs.",
      "Created responsive dashboards and management systems.",
      "Focused on performance and clean UI/UX."
    ],
    technologies: ["React.js", "TypeScript", "OpenAI API", "Gemini API", "MongoDB", "Vercel"]
  },
  {
    company: "Self Learning & Open Source",
    role: "Software Development",
    duration: "2024 – Present",
    description: [
      "Solved DSA problems regularly.",
      "Built personal portfolio and full-stack projects.",
      "Learned modern web technologies.",
      "Improved problem-solving and development skills."
    ],
    technologies: ["JavaScript", "React", "Node.js", "GitHub", "DSA"]
  }
];

export const projects = [
  {
    title: "AI Mock Interview Coach",
    description: "An AI-powered interview preparation platform featuring voice interaction, resume analysis, AI feedback, authentication, and interview history.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Groq API", "Vapi AI"],
    features: ["AI Voice Interview", "Authentication", "Interview Reports", "Resume Analysis", "Performance Dashboard"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop", 
    github: "#",
    demo: "#",
  },
  {
    title: "School ERP System",
    description: "A modern multi-tenant ERP platform with role-based access, student management, teacher management, dashboards, and analytics.",
    tech: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB"],
    features: ["Role-based Access", "Student Management", "Teacher Portal", "Analytics Dashboard"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", 
    github: "#",
    demo: "#",
  },
  {
    title: "AI Career Coach",
    description: "Career guidance platform powered by AI that helps users generate resumes, roadmaps, interview preparation, and personalized learning.",
    tech: ["React", "Node", "MongoDB", "OpenAI API"],
    features: ["Resume Generation", "Career Roadmaps", "Interview Prep", "Personalized Learning"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop", 
    github: "#",
    demo: "#",
  },
  {
    title: "Event Finder Platform",
    description: "Location-based event discovery platform with authentication, search, categories, maps, and booking features.",
    tech: ["React", "Express", "MongoDB", "Google Maps API"],
    features: ["Location Search", "Interactive Maps", "Event Booking", "User Authentication"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop", 
    github: "#",
    demo: "#",
  }
];

export const achievements = [
  {
    icon: "🏆",
    title: "Top 75",
    description: "Hacknovate 7.0",
    location: "ABESIT, Ghaziabad",
    details: "Ranked among the top 75 teams in Hacknovate 7.0 out of hundreds of participants. Built a complete web application within 24 hours addressing real-world problems. The experience involved intense brainstorming, rapid prototyping, and delivering a functional product.",
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
    ]
  },
  {
    icon: "🥇",
    title: "1st Place",
    description: "National Level Technical Paper Presentation",
    location: "AKGEC, Ghaziabad",
    details: "Secured 1st place for writing and presenting a comprehensive technical research paper on modern AI advancements and system architectures. Evaluated by a panel of industry experts on technical accuracy, originality, and presentation skills.",
    images: [
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    ]
  },
  {
    icon: "🥉",
    title: "3rd Place",
    description: "TechnoHack 3.0",
    location: "INMANTAC, Ghaziabad",
    details: "Achieved 3rd place overall in TechnoHack 3.0 by developing an innovative solution using React, Node.js, and integrating AI APIs. Focused heavily on creating a seamless user experience and a highly scalable backend architecture.",
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    ]
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
    platform: "GeeksforGeeks",
    description: "Practicing coding challenges and computer science concepts.",
    link: "https://www.geeksforgeeks.org/user/himanshuguqp9i/",
    icon: <SiGeeksforgeeks />,
    iconColor: "text-green-600",
  }
];

import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"
import { motion } from "framer-motion"

import ide from "../assets/images/ide.png"
import aiwebsite from "../assets/images/aiwebsite.png"
import codereview from "../assets/images/codereview.png"
import kota from "../assets/images/kota.png"
import imageenhancer from "../assets/images/imageenhancer.png"
import collegelibrary from "../assets/images/collegelibrary.png"
import snapmood from "../assets/images/snapmood.png"
import memory from "../assets/images/memory.png"
import spotify from "../assets/images/spotify.png"
import leaderboard from "../assets/images/leaderboard.png"
import rejouice from "../assets/images/rejuice.png"
import quiz from "../assets/images/quiz.png"
import imgslider from "../assets/images/img-slide.png"
import ecommerce from "../assets/images/e-commerce.png"
import fanta from "../assets/images/fanta.png"
import magma from "../assets/images/magma.png"
import travel from "../assets/images/travel-image.png"
import earphone from "../assets/images/earphone.png"
import weather from "../assets/images/weather.png"
import golf from "../assets/images/golf.png"
import tracker from "../assets/images/tracker.png"
import prompthub from "../assets/images/prompthub.png"
import jewellery from "../assets/images/jewellery.png"

const projectsData = [
{
  id: 1,
  title: "Multi-Code IDE",
  category: "fullstack",
  image: ide,
  desc: "A cloud-based multi-language code editor that enables users to write, execute, and manage code projects directly in the browser. Built with a VS Code-like Monaco Editor, it supports multiple programming languages, secure authentication, and real-time execution using external APIs.",
  tech: "React (Vite), Node.js, Express, MongoDB, Tailwind CSS, Monaco Editor, Clerk Auth, Glot API",
  github: "https://github.com/Bhumika-Sahu-bit/Multi-code-IDE",
  live: "https://multi-code-ide-gray.vercel.app",
  features: [
    "Multi-language code execution (Python, JS, C, C++, Java, Bash)",
    "Monaco Editor (VS Code-like)",
    "Authentication with Clerk",
    "Project CRUD system",
    "Real-time code execution"
  ]
},
{
  id: 2,
  title: "Ganesh Jewellery - Full Stack E-commerce Platform",
  category: "freelancing",
  image: jewellery,
  desc: "A complete full-stack e-commerce web application developed for a jewellery business with both user and admin panels. The platform enables product browsing, cart and wishlist management, secure online payments using Cashfree, and real-time notifications using Socket.IO, providing a seamless shopping experience.",
  tech: "React, Node.js, Express, MongoDB, Tailwind CSS, Cashfree API, Nodemailer, Socket.IO",
  github: "https://github.com/Bhumika-Sahu-bit/ganesh-jewellery",
  live: "https://ganesh-jewellery.vercel.app", 
  features: [
    "Full-stack MERN e-commerce platform with admin & user panel",
    "Secure online payments integration using Cashfree (with COD option)",
    "Add to cart and wishlist functionality",
    "Real-time notifications using Socket.IO",
    "User authentication and profile management",
    "Order placement with Buy Now and cart system",
    "Admin dashboard for product and order management",
    "Email notifications using Nodemailer",
    "Product enquiry and contact with seller feature",
    "Fully responsive UI built with Tailwind CSS",
    "Optimized performance and smooth user experience"
  ]
},

{
  id: 3,
  title: "AI Website Builder",
  category: "fullstack",
  image: aiwebsite,
  desc: "An AI-powered full-stack application that generates complete websites from user prompts using Groq AI. It dynamically creates frontend code and provides an instant live preview, simplifying the web development process.",
  tech: "React, Tailwind, Node.js, MongoDB, Groq API",
  github: "https://github.com/Bhumika-Sahu-bit/AI-website-builder",
  live: "https://ai-website-builder-seven-chi.vercel.app/",
  features: [
    "Generate websites using AI prompts",
    "Dynamic frontend code generation",
    "Live preview system",
    "Backend AI processing"
  ]
},

{
  id: 4,
  title: "AI Code Reviewer",
  category: "fullstack",
  image: codereview,
  desc: "A full-stack AI-powered code analysis tool that evaluates code and provides intelligent suggestions using OpenRouter AI, helping developers improve code quality and follow best practices.",
  tech: "React, Node.js, MongoDB, OpenRouter API",
  github: "https://github.com/Bhumika-Sahu-bit/code-reviewer",
  live: "https://code-reviewer-alpha-sandy.vercel.app",
  features: [
    "AI-based code analysis",
    "Error detection & suggestions",
    "Real-time feedback",
    "Improves code quality"
  ]
},

{
  id: 5,
  title: "Kota Refrigeration Website",
  category: "freelancing",
  image: kota,
  desc: "A freelance frontend project developed for a refrigeration service business with a modern responsive design and integrated EmailJS contact system for seamless communication.",
  tech: "React, Tailwind CSS, EmailJS",
  github: "https://github.com/Bhumika-Sahu-bit/Kota-refrigreator",
  live: "https://kota-refrigeration.vercel.app/",
  features: [
    "Responsive business UI",
    "Service showcase",
    "EmailJS contact form",
    "Client-ready deployment"
  ]
},

{
  id: 6,
  title: "AI Image Enhancer",
  category: "frontend",
  image: imageenhancer,
  desc: "A React-based AI application that enhances image quality using Gemini AI, allowing users to upload, process, and download improved images in an interactive UI.",
  tech: "React, Tailwind CSS, Gemini API",
  github: "https://github.com/Bhumika-Sahu-bit/AI-image-enhancer",
  live: "https://ai-image-enhancer-mocha.vercel.app/",
  features: [
    "AI image enhancement",
    "Upload & download images",
    "Animated UI",
    "Fast API processing"
  ]
},
{
  id: 7,
  title: "Prompt Hub - AI Prompt Sharing Platform",
  category: "fullstack",
  image: prompthub, // apni image import kar lena
  desc: "A full-stack MERN application that provides a centralized platform for discovering, managing, and sharing high-quality AI prompts. It helps developers, creators, and learners improve responses from AI tools like ChatGPT and Gemini through structured and optimized prompt collections.",
  tech: "React, Node.js, Express, MongoDB, Tailwind CSS",
  github: "https://github.com/Bhumika-Sahu-bit/Prompt-Hub",
  live: "https://prompt-hub-xi-umber.vercel.app/",
  features: [
    "Full-stack MERN application with structured prompt management",
    "Create, store, and organize AI prompts in a centralized system",
    "Categorized prompts for coding, content creation, and productivity",
    "User-friendly interface with responsive design",
    "Optimized prompt structure for better AI responses",
    "Easy access and reusable prompt system",
    "Designed for developers, creators, and learners",
    "Improves prompt engineering and AI productivity"
  ]
}

{
  id: 8,
  title: "College Library System",
  category: "fullstack",
  image: collegelibrary,
  desc: "A full-stack library management system integrated with Google Drive for storing and accessing PDFs, providing a centralized platform for academic resources.",
  tech: "Node.js, Express, EJS, MongoDB, Google Drive",
  github: "https://github.com/Bhumika-Sahu-bit/college-library",
  live: "https://college-library.onrender.com/home",
  features: [
    "PDF upload & management",
    "Google Drive integration",
    "EJS rendering",
    "Centralized study access"
  ]
},

{
  id: 9,
  title: "SnapMood",
  category: "fullstack",
  image: snapmood,
  desc: "A full-stack social media application that allows users to create accounts, share posts, like, save, and follow others, replicating core social media features.",
  tech: "Node.js, Express, MongoDB",
  github: "https://github.com/Bhumika-Sahu-bit/snapmood-website",
  live: "https://snapmood.onrender.com/",
  features: [
    "User authentication",
    "Post sharing",
    "Like & follow system",
    "Dynamic feed"
  ]
},

{
  id: 10,
  title: "Quiz Web",
  category: "frontend",
  image: quiz,
  desc: "A timer-based quiz application supporting MCQs and integer-based questions with IndexedDB storage for history and leaderboard tracking.",
  tech: "React, Tailwind, IndexedDB",
  github: "https://github.com/Bhumika-Sahu-bit/quiz-web",
  live: "https://quiz-web-drab.vercel.app",
  features: [
    "Timer-based quizzes",
    "Multiple question types",
    "Quiz history",
    "Leaderboard system"
  ]
},

{
  id: 11,
  title: "Leaderboard App",
  category: "frontend",
  image: leaderboard,
  desc: "A React-based application displaying ranked user data dynamically with sorting and UI rendering logic.",
  tech: "React, JavaScript",
  github: "https://github.com/Bhumika-Sahu-bit/leaderboard",
  live: "https://leaderboard-nu-opal.vercel.app",
  features: [
    "Dynamic ranking",
    "Sorting system",
    "Clean UI"
  ]
},

{
  id: 12,
  title: "Rejouice Clone",
  category: "clones",
  image: rejouice,
  desc: "A visually rich animated website clone built using GSAP, focusing on smooth transitions and creative UI interactions.",
  tech: "HTML, CSS, JS, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/Rejouice-website",
  live: "https://bhumika-sahu-bit.github.io/Rejouice-website/",
  features: [
    "GSAP animations",
    "Modern UI",
    "Interactive design"
  ]
},

{
  id: 13,
  title: "Animated Fanta Website",
  category: "frontend",
  image: fanta,
  desc: "A modern frontend project showcasing smooth animations and transitions using GSAP.",
  tech: "HTML, CSS, JS, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/animated-website",
  live: "https://bhumika-sahu-bit.github.io/animated-website/",
  features: [
    "Smooth animations",
    "Interactive UI",
    "Modern design"
  ]
},

{
  id: 14,
  title: "Magma Clone",
  category: "clones",
  image: magma,
  desc: "An animated website clone using Locomotive JS and GSAP, featuring smooth scrolling and advanced animation effects.",
  tech: "HTML, CSS, JS, GSAP, Locomotive",
  github: "https://github.com/Bhumika-Sahu-bit/magma.com",
  live: "https://bhumika-sahu-bit.github.io/magma.com/",
  features: [
    "Smooth scroll",
    "GSAP animations",
    "Creative UI"
  ]
},

{
  id: 15,
  title: "Hotel Booking Website",
  category: "frontend",
  image: travel,
  desc: "A responsive hotel booking UI allowing users to explore rooms and simulate booking functionality.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/Bhumika-Sahu-bit/responsive-hotel-booking-website",
  live: "https://bhumika-sahu-bit.github.io/responsive-hotel-booking-website/",
  features: [
    "Responsive design",
    "Room listing",
    "Booking UI"
  ]
},

{
  id: 16,
  title: "Weather App",
  category: "frontend",
  image: weather,
  desc: "A weather application that fetches real-time data using API integration and displays it in a user-friendly interface.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/Bhumika-Sahu-bit/weather-app",
  live: "https://bhumika-sahu-bit.github.io/weather-app",
  features: [
    "Real-time weather",
    "City search",
    "API integration"
  ]
},

{
  id: 17,
  title: "E-commerce Website",
  category: "frontend",
  image: ecommerce,
  desc: "A frontend e-commerce platform showcasing products and shopping cart UI with responsive design.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/Bhumika-Sahu-bit/e-commerce-website",
  live: "https://bhumika-sahu-bit.github.io/e-commerce-website/",
  features: [
    "Product listing",
    "Cart UI",
    "Responsive design"
  ]
},

{
  id: 18,
  title: "Earphone Website",
  category: "frontend",
  image: earphone,
  desc: "A product showcase website highlighting earphones with a modern UI and interactive design.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/Bhumika-Sahu-bit/earphone-project",
  live: "https://bhumika-sahu-bit.github.io/earphone-project/",
  features: [
    "Product showcase",
    "Modern UI",
    "Interactive design"
  ]
},

{
  id: 19,
  title: "Memory Game",
  category: "frontend",
  image: memory,
  desc: "A browser-based memory game where users match cards, improving logic and engagement.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/Bhumika-Sahu-bit/game",
  live: "https://bhumika-sahu-bit.github.io/game/",
  features: [
    "Card matching logic",
    "Interactive gameplay",
    "Fun UI"
  ]
},

{
  id: 20,
  title: "Image Slider",
  category: "frontend",
  image: imgslider,
  desc: "A responsive image slider with smooth transitions and navigation controls.",
  tech: "HTML, CSS, JS",
  github: "https://github.com/Bhumika-Sahu-bit/image-slider",
  live: "https://bhumika-sahu-bit.github.io/image-slider/",
  features: [
    "Smooth transitions",
    "Navigation controls",
    "Responsive UI"
  ]
},

{
  id: 21,
  title: "Golf Website",
  category: "clones",
  image: golf,
  desc: "A modern animated golf-themed website built with GSAP focusing on interactive design.",
  tech: "HTML, CSS, JS, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/Golf-website",
  live: "https://bhumika-sahu-bit.github.io/Golf-website/",
  features: [
    "GSAP animations",
    "Modern UI",
    "Interactive sections"
  ]
},

{
  id: 22,
  title: "Spotify Clone",
  category: "clones",
  image: spotify,
  desc: "A frontend clone of Spotify built using HTML and CSS, replicating its layout and UI design.",
  tech: "HTML, CSS",
  github: "https://github.com/Bhumika-Sahu-bit/spotify-clone",
  live: "https://bhumika-sahu-bit.github.io/spotify-clone/",
  features: [
    "UI replication",
    "Clean layout",
    "Responsive design"
  ]
},
{
  id: 23,
  title: "Real-Time Location Tracker",
  category: "fullstack",
  image: tracker, 
  desc: "A full-stack real-time location tracking web application that allows users to share and view live locations on an interactive map. Built using WebSockets for instant updates, it provides a seamless experience for tracking friends, teams, or devices in real time.",
  tech: "Node.js, Express.js, Socket.IO, EJS, Leaflet.js, HTML, CSS",
  github: "https://github.com/Bhumika-Sahu-bit/Realtime-tracker",
  live: "https://real-time-location-tracker-c3kd.onrender.com/",
  features: [
    "Real-time location tracking using Socket.IO",
    "Live location updates with WebSockets",
    "Interactive map integration using Leaflet.js",
    "Display multiple users' locations dynamically",
    "Browser-based geolocation support",
    "Responsive and clean user interface",
    "Fast and efficient real-time communication"
  ]
}
]

const filters = ["all", "freelancing", "fullstack", "frontend", "clones"]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4">

      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(f)}
            className={`px-5 py-2 rounded-full border transition capitalize
              ${
                activeFilter === f
                  ? "bg-purple-500 text-white"
                  : "border-gray-500 text-gray-300 hover:bg-purple-500/20"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects
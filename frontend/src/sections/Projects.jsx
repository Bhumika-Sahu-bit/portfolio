import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"
import { motion } from "framer-motion"
import ide from "../assets/images/ide.png"
import aiwebsite  from "../assets/images/aiwebsite.png"
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

const projectsData = [
{
  id: 1,
  title: "Multi-Code IDE",
  category: "fullstack",
  image: ide,
  desc: "A cloud-based multi-language code editor that allows users to write and run code directly in the browser. It supports Python, JavaScript, C, C++, Java, and Bash, and features a Monaco Editor (VS Code-like experience) with authentication and real-time code execution.",
  tech: "React (Vite), Node.js, Express, MongoDB, Tailwind CSS, Monaco Editor, Clerk Auth, Glot API, Framer Motion",
  github: "https://github.com/Bhumika-Sahu-bit/Multi-code-IDE",
  live: "https://multi-code-ide-gray.vercel.app"
},
{
  id: 2,
  title: "AI Website Builder",
  category: "fullstack",
  image: aiwebsite,
  desc: "An AI-powered full-stack web app that generates complete websites from user prompts using Groq AI. It automatically creates frontend code and provides a live preview for users.",
  tech: "React, Tailwind, Node.js, Express, MongoDB, Groq API",
  github: "https://github.com/Bhumika-Sahu-bit/AI-website-builder",
  live: "https://ai-website-builder-seven-chi.vercel.app/"
},
{
  id: 3,
  title: "AI Code Reviewer",
  category: "fullstack",
  image: codereview,
  desc: "A full-stack AI-powered code reviewer that analyzes code and provides smart suggestions using OpenRouter AI.",
  tech: "React, Node.js, Express, MongoDB, Tailwind CSS, OpenRouter API",
  github: "https://github.com/Bhumika-Sahu-bit/code-reviewer",
  live: "https://code-reviewer-alpha-sandy.vercel.app"
},
{
  id: 4,
  title: "Kota Refrigeration Website",
  category: "freelancing",
  image: kota,
  desc: "A freelance frontend project for a refrigeration service business with EmailJS contact functionality.",
  tech: "React, Tailwind CSS, EmailJS",
  github: "https://github.com/Bhumika-Sahu-bit/Kota-refrigreator",
  live: "https://kota-refrigeration.vercel.app/"
},
{
  id: 5,
  title: "AI Image Enhancer",
  category: "frontend",
  image: imageenhancer,
  desc: "A React-based AI image enhancer that improves image quality using Gemini AI with upload and download functionality.",
  tech: "React, Tailwind CSS, Gemini API",
  github: "https://github.com/Bhumika-Sahu-bit/AI-image-enhancer",
  live: "https://ai-image-enhancer-mocha.vercel.app/"
},
{
  id: 6,
  title: "College Library System",
  category: "fullstack",
  image: collegelibrary,
  desc: "A full-stack library system with Google Drive integration for storing and retrieving PDFs.",
  tech: "Node.js, Express.js, EJS, MongoDB, Google Drive",
  github: "https://github.com/Bhumika-Sahu-bit/college-library",
  live: "https://college-library.onrender.com/home"
},
{
  id: 7,
  title: "SnapMood - Social Media website",
  category: "fullstack",
  image: snapmood,
  desc: "A full-stack social media app with features like posting, liking, saving, and following users.",
  tech: "Node.js, Express.js, EJS, MongoDB",
  github: "https://github.com/Bhumika-Sahu-bit/snapmood-website",
  live: "https://snapmood.onrender.com/"
},
{
  id: 8,
  title: "Quiz Web",
  category: "frontend",
  image: quiz,
  desc: "A timer-based quiz app with MCQs and integer questions using IndexedDB for storage.",
  tech: "React (Vite), Tailwind CSS, IndexedDB",
  github: "https://github.com/Bhumika-Sahu-bit/quiz-web",
  live: "https://quiz-web-drab.vercel.app"
},
{
  id: 9,
  title: "Leaderboard App",
  category: "frontend",
  image: leaderboard,
  desc: "A React app displaying ranked users with dynamic data and sorting logic.",
  tech: "React, JavaScript, CSS",
  github: "https://github.com/Bhumika-Sahu-bit/leaderboard",
  live: "https://leaderboard-nu-opal.vercel.app"
},
{
  id: 10,
  title: "Rejouice Website Clone",
  category: "clones",
  image: rejouice,
  desc: "A visually rich animated website clone with GSAP and modern UI design.",
  tech: "HTML, CSS, JavaScript, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/Rejouice-website",
  live: "https://bhumika-sahu-bit.github.io/Rejouice-website/"
},
{
  id: 11,
  title: "Animated Website",
  category: "frontend",
  image: fanta,
  desc: "A modern animated website with smooth transitions using GSAP.",
  tech: "HTML, CSS, JavaScript, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/animated-website",
  live: "https://bhumika-sahu-bit.github.io/animated-website/"
},
{
  id: 12,
  title: "Magma Website Clone",
  category: "clones",
  image: magma,
  desc: "An animated website with smooth scrolling using Locomotive JS and GSAP.",
  tech: "HTML, CSS, JavaScript, GSAP, Locomotive JS",
  github: "https://github.com/Bhumika-Sahu-bit/magma.com",
  live: "https://bhumika-sahu-bit.github.io/magma.com/"
},
{
  id: 13,
  title: "Responsive Hotel Booking Website",
  category: "frontend",
  image: travel,
  desc: "A responsive hotel booking UI with room listings and booking interface.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/Bhumika-Sahu-bit/responsive-hotel-booking-website",
  live: "https://bhumika-sahu-bit.github.io/responsive-hotel-booking-website/"
},
{
  id: 14,
  title: "Weather App",
  category: "frontend",
  image: weather,
  desc: "A weather app that fetches real-time data using API integration.",
  tech: "HTML, CSS, JavaScript, Weather API",
  github: "https://github.com/Bhumika-Sahu-bit/weather-app",
  live: "https://bhumika-sahu-bit.github.io/weather-app/"
},
{
  id: 15,
  title: "E-commerce Website",
  category: "frontend",
  image: ecommerce,
  desc: "A frontend e-commerce site with product listing and cart UI.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/Bhumika-Sahu-bit/e-commerce-website",
  live: "https://bhumika-sahu-bit.github.io/e-commerce-website/"
},
{
  id: 16,
  title: "Earphone Product Website",
  category: "frontend",
  image: earphone,
  desc: "A product showcase website for earphones with modern UI.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/Bhumika-Sahu-bit/earphone-project",
  live: "https://bhumika-sahu-bit.github.io/earphone-project/"
},
{
  id: 17,
  title: "Memory Game",
  category: "frontend",
  image: memory,
  desc: "A card matching memory game built using JavaScript.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/Bhumika-Sahu-bit/game",
  live: "https://bhumika-sahu-bit.github.io/game/"
},
{
  id: 18,
  title: "Image Slider",
  category: "frontend",
  image: imgslider,
  desc: "A responsive image slider with smooth transitions.",
  tech: "HTML, CSS, JavaScript",
  github: "https://github.com/Bhumika-Sahu-bit/image-slider",
  live: "https://bhumika-sahu-bit.github.io/image-slider/"
},
{
  id: 19,
  title: "Golf Website",
  category: "clones",
  image: golf,
  desc: "A modern animated golf-themed website with GSAP animations.",
  tech: "HTML, CSS, JavaScript, GSAP",
  github: "https://github.com/Bhumika-Sahu-bit/Golf-website",
  live: "https://bhumika-sahu-bit.github.io/Golf-website/"
},
{
  id: 20,
  title: "Spotify Clone",
  category: "clones",
  image: spotify,
  desc: "A Spotify UI clone built using HTML and CSS.",
  tech: "HTML, CSS",
  github: "https://github.com/Bhumika-Sahu-bit/spotify-clone",
  live: "https://bhumika-sahu-bit.github.io/spotify-clone/"
}
];

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

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Projects
      </h2>

      {/* Filters */}
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

      {/* Project Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </motion.div>

      {/* Modal */}
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

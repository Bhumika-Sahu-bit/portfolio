import ExperienceCard from "../components/ExperienceCard"
import certificate from "../assets/icons/certificate-bhumi.jpeg"

const experiences = [
  {
    date: "Feb 2025 - Mar 2025",
    role: "Web Development Intern",
    company: "TechnoML",
    desc: "Completed a Web Development internship where I worked on real-world projects under professional guidance. Built responsive UI, improved performance, and followed clean coding practices.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    certificate: certificate, 
  },
  {
    date: "2025",
  role: "Freelance",
  company: "Ganesh Art Jewellery",
  desc: "Developed a premium jewellery e-commerce website using modern technologies with a focus on performance and user experience. Built a fully responsive UI with product showcase, category navigation, and smooth interactions. Integrated EmailJS for contact functionality and optimized the application for fast loading and scalability.",
  tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Cashfree API", "Nodemailer", "Socket.IO"],
  live: "https://ganesh-jewellery.vercel.app"
  },
 {
  date: "2025",
  role: "Freelance",
  company: "Kota Refrigeration",
  desc: "Developed a responsive business website for a refrigeration service client. Implemented modern UI design, service showcase, and a functional contact system using EmailJS for real-time communication.",
  tech: ["React", "Tailwind CSS", "EmailJS"],
  live: "https://kota-refrigeration.vercel.app/"
},
  {
  date: "2025",
  role: "Full Stack Developer",
  company: "Multi-Code IDE",
  desc: "Developed a cloud-based multi-language code editor that allows users to write and execute code directly in the browser. Integrated Monaco Editor for a VS Code-like experience, implemented authentication, and enabled real-time code execution using external APIs.",
  tech: ["React (Vite)", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Monaco Editor", "Clerk Auth", "Glot API", "Framer Motion"],
  live: "https://multi-code-ide-gray.vercel.app"
}, 
{
  date: "2025",
  role: "Full Stack AI Developer",
  company: "AI Website Builder",
  desc: "Built an AI-powered full-stack application that generates complete websites from user prompts using Groq AI. Implemented dynamic code generation, backend processing, and live preview functionality to enhance user experience.",
  tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Groq API"],
  live: "https://ai-website-builder-seven-chi.vercel.app/"
}
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0b0b12]">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Experience
        </h2>
        <p className="text-gray-400 mt-3">
          My journey & real-world work
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto space-y-16">

        {/* Line */}
        <div className="
          hidden md:block
          absolute left-1/2 top-0 bottom-0
          w-[2px]
          bg-gradient-to-b
          from-transparent via-purple-500/40 to-transparent
          -translate-x-1/2
        " />

        {/* Cards */}
        {experiences.map((item, index) => (
          <ExperienceCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Experience
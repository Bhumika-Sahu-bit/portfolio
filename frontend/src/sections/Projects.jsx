import { useState } from "react"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"
import { motion } from "framer-motion" // eslint-disable-line no-unused-vars

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Store",
    category: "fullstack",
    image: "https://imgs.search.brave.com/WHB7Vw8ce1F9joOGdkKL421bSfyDxWRjlD_qi85U_cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvamVjdHNpbmlu/ZGlhLmNvbS9hc3Nl/dHMvaW1nL3NlYXJj/aC1wcm9qZWN0cy1o/b21lNC5qcGc",
    desc: "Full stack MERN ecommerce website",
    tech: "React, Node, MongoDB",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Shop Website (Client)",
    category: "freelancing",
    image: "https://imgs.search.brave.com/5wtoqGUOa_RyEpQsGY7WY_7y0sIu0VWR5xpF6BXu65o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcm9q/ZWN0cy1jb25jZXB0/LWJsYWNrLWNoYWxr/Ym9hcmQtZC1yZW5k/ZXJpbmctaGFuZHdy/aXR0ZW4tdG9wLXZp/ZXctb2ZmaWNlLWRl/c2stbG90LWJ1c2lu/ZXNzLW9mZmljZS1z/dXBwbGllcy03OTkw/NjczNC5qcGc",
    desc: "Freelancing project for local shop",
    tech: "React + Tailwind",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Netflix Clone",
    category: "clones",
    image: "https://imgs.search.brave.com/1r-aPDDdIP671hkdO82nE0auy6pZ7cFVBZCbP8enuME/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/Mjc3NzY5MDQ5LzRk/YWVlZDgwLWNjNmUt/MTFlYS05OWU0LTJh/NGI4NWU3NWQwNA",
    desc: "Netflix UI Clone",
    tech: "React",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Ecommerce Store",
    category: "fullstack",
    image: "https://imgs.search.brave.com/WHB7Vw8ce1F9joOGdkKL421bSfyDxWRjlD_qi85U_cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvamVjdHNpbmlu/ZGlhLmNvbS9hc3Nl/dHMvaW1nL3NlYXJj/aC1wcm9qZWN0cy1o/b21lNC5qcGc",
    desc: "Full stack MERN ecommerce website",
    tech: "React, Node, MongoDB",
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Shop Website (Client)",
    category: "freelancing",
    image: "https://imgs.search.brave.com/5wtoqGUOa_RyEpQsGY7WY_7y0sIu0VWR5xpF6BXu65o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcm9q/ZWN0cy1jb25jZXB0/LWJsYWNrLWNoYWxr/Ym9hcmQtZC1yZW5k/ZXJpbmctaGFuZHdy/aXR0ZW4tdG9wLXZp/ZXctb2ZmaWNlLWRl/c2stbG90LWJ1c2lu/ZXNzLW9mZmljZS1z/dXBwbGllcy03OTkw/NjczNC5qcGc",
    desc: "Freelancing project for local shop",
    tech: "React + Tailwind",
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "Netflix Clone",
    category: "clones",
    image: "https://imgs.search.brave.com/1r-aPDDdIP671hkdO82nE0auy6pZ7cFVBZCbP8enuME/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/Mjc3NzY5MDQ5LzRk/YWVlZDgwLWNjNmUt/MTFlYS05OWU0LTJh/NGI4NWU3NWQwNA",
    desc: "Netflix UI Clone",
    tech: "React",
    github: "#",
    live: "#",
  },{
    id: 7,
    title: "Ecommerce Store",
    category: "fullstack",
    image: "https://imgs.search.brave.com/WHB7Vw8ce1F9joOGdkKL421bSfyDxWRjlD_qi85U_cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvamVjdHNpbmlu/ZGlhLmNvbS9hc3Nl/dHMvaW1nL3NlYXJj/aC1wcm9qZWN0cy1o/b21lNC5qcGc",
    desc: "Full stack MERN ecommerce website",
    tech: "React, Node, MongoDB",
    github: "#",
    live: "#",
  },
  {
    id: 8,
    title: "Shop Website (Client)",
    category: "freelancing",
    image: "https://imgs.search.brave.com/5wtoqGUOa_RyEpQsGY7WY_7y0sIu0VWR5xpF6BXu65o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcm9q/ZWN0cy1jb25jZXB0/LWJsYWNrLWNoYWxr/Ym9hcmQtZC1yZW5k/ZXJpbmctaGFuZHdy/aXR0ZW4tdG9wLXZp/ZXctb2ZmaWNlLWRl/c2stbG90LWJ1c2lu/ZXNzLW9mZmljZS1z/dXBwbGllcy03OTkw/NjczNC5qcGc",
    desc: "Freelancing project for local shop",
    tech: "React + Tailwind",
    github: "#",
    live: "#",
  },
  {
    id: 9,
    title: "Netflix Clone",
    category: "clones",
    image: "https://imgs.search.brave.com/1r-aPDDdIP671hkdO82nE0auy6pZ7cFVBZCbP8enuME/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/Mjc3NzY5MDQ5LzRk/YWVlZDgwLWNjNmUt/MTFlYS05OWU0LTJh/NGI4NWU3NWQwNA",
    desc: "Netflix UI Clone",
    tech: "React",
    github: "#",
    live: "#",
  },
  {
    id: 10,
    title: "Ecommerce Store",
    category: "frontend",
    image: "https://imgs.search.brave.com/WHB7Vw8ce1F9joOGdkKL421bSfyDxWRjlD_qi85U_cE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvamVjdHNpbmlu/ZGlhLmNvbS9hc3Nl/dHMvaW1nL3NlYXJj/aC1wcm9qZWN0cy1o/b21lNC5qcGc",
    desc: "Full stack MERN ecommerce website",
    tech: "React, Node, MongoDB",
    github: "#",
    live: "#",
  },
  {
    id: 11,
    title: "Shop Website (Client)",
    category: "frontend",
    image: "https://imgs.search.brave.com/5wtoqGUOa_RyEpQsGY7WY_7y0sIu0VWR5xpF6BXu65o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wcm9q/ZWN0cy1jb25jZXB0/LWJsYWNrLWNoYWxr/Ym9hcmQtZC1yZW5k/ZXJpbmctaGFuZHdy/aXR0ZW4tdG9wLXZp/ZXctb2ZmaWNlLWRl/c2stbG90LWJ1c2lu/ZXNzLW9mZmljZS1z/dXBwbGllcy03OTkw/NjczNC5qcGc",
    desc: "Freelancing project for local shop",
    tech: "React + Tailwind",
    github: "#",
    live: "#",
  },
  {
    id: 12,
    title: "Netflix Clone",
    category: "frontend",
    image: "https://imgs.search.brave.com/1r-aPDDdIP671hkdO82nE0auy6pZ7cFVBZCbP8enuME/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXBv/c2l0b3J5LWltYWdl/cy5naXRodWJ1c2Vy/Y29udGVudC5jb20v/Mjc3NzY5MDQ5LzRk/YWVlZDgwLWNjNmUt/MTFlYS05OWU0LTJh/NGI4NWU3NWQwNA",
    desc: "Netflix UI Clone",
    tech: "React",
    github: "#",
    live: "#",
  },
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

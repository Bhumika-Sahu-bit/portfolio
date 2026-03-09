import ExperienceCard from "../components/ExperienceCard"

const experiences = [
  {
    date: "2025",
    role: "Frontend Developer Intern",
    company: "XYZ Company",
    desc: "Built responsive UI components and improved website performance.",
    tech: ["React", "Tailwind", "JS"],
  },
  {
    date: "2024 - Present",
    role: "Freelance Developer",
    company: "Local Clients",
    desc: "Created e-commerce and business websites for clients.",
    tech: ["MERN", "MongoDB", "Node"],
  },
  {
    date: "2024",
    role: "Full Stack Developer",
    company: "AICodeGen",
    desc: "Developed AI-based website generator using Gemini API.",
    tech: ["React", "AI", "Express"],
  },
  {
    date: "Personal",
    role: "DSA & Problem Solving",
    company: "LeetCode Practice",
    desc: "Solved 200+ problems and strengthened algorithms skills.",
    tech: ["C++", "DSA", "Binary Search"],
  },
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

      {/* Timeline wrapper */}
      <div className="relative max-w-6xl mx-auto space-y-16">

        {/* Vertical line */}
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

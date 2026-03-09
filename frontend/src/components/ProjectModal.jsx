import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa"

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Dark Blur Background */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="
          relative
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          rounded-3xl
          bg-gradient-to-br
          from-gray-900/95
          to-gray-800/90
          backdrop-blur-xl
          border border-white/10
          shadow-2xl
          p-6 sm:p-10
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="
            absolute top-5 right-5
            text-gray-400
            hover:text-white
            text-xl
          "
        >
          <FaTimes />
        </button>

        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden mb-8">
          <img
            src={project.image}
            alt=""
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-4 text-center max-w-2xl mx-auto leading-relaxed">
          {project.desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {project.tech.split(",").map((tech, i) => (
            <span
              key={i}
              className="
                px-4 py-1.5
                rounded-full
                text-sm
                bg-purple-500/10
                text-purple-300
                border border-purple-500/20
              "
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href={project.github}
            target="_blank"
            className="
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-xl
              bg-gray-700
              hover:bg-gray-600
              transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="
              flex items-center justify-center gap-2
              px-6 py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              hover:scale-105
              transition
            "
          >
            <FaExternalLinkAlt />
            Visit Live
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectModal

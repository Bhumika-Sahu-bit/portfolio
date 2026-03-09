import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get in Touch
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          I’m always open to new opportunities, freelance work, or collaboration.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-semibold text-white">Let's Connect ✨</h3>
          <p className="text-gray-400 leading-relaxed">
            I’m open for discussions, projects, and collaborations. Feel free to reach out via the form or my social handles.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 text-gray-300 text-lg">
            <FaEnvelope className="text-purple-400 text-xl" />
            <span>bhumi@email.com</span>
          </div>

          {/* Social */}
          <div className="flex gap-5 pt-4 text-2xl">
            <a href="#" className="hover:text-purple-400 transition transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-purple-400 transition transform hover:scale-110">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="
            bg-gradient-to-br from-white/5 via-white/10 to-white/5
            backdrop-blur-xl
            border border-white/20
            rounded-3xl
            p-8 sm:p-10
            flex flex-col gap-5
            shadow-lg
          "
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              p-4
              rounded-xl
              bg-gray-900/60
              border border-gray-700
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              transition
            "
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full
              p-4
              rounded-xl
              bg-gray-900/60
              border border-gray-700
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              transition
            "
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="
              w-full
              p-4
              rounded-xl
              bg-gray-900/60
              border border-gray-700
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-purple-500
              transition
            "
          />

          {/* Send Button */}
          <button
            type="submit"
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r from-purple-500 to-pink-500
              hover:scale-105
              transform
              transition
              text-white
              font-semibold
              shadow-lg
            "
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

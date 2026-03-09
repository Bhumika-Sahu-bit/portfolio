// import { motion } from "framer-motion"
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
// } from "react-icons/fa"
// import {
//   SiTailwindcss,
//   SiFramer,
//   SiExpress,
//   SiMongodb,
//   SiMysql,
//   SiPostman,
//   SiFigma,
//   SiVercel,
// } from "react-icons/si"

// const skills = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
//       { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
//       { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//       { name: "React", icon: <FaReact className="text-cyan-400" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
//       { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//       { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
//     ],
//   },
//   {
//     title: "Database",
//     skills: [
//       { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//       { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
//     ],
//   },
//   {
//     title: "Tools",
//     skills: [
//       { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//       { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
//       { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//       { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
//       { name: "Vercel", icon: <SiVercel className="text-white" /> },
//     ],
//   },
// ]

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
//     >
//       {/* Heading */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-center mb-16"
//       >
//         <p className="text-purple-400 uppercase tracking-widest text-sm">
//           Skills
//         </p>
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3">
//           Technologies I Use
//         </h2>
//       </motion.div>

//       {/* Categories */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {skills.map((category, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.15 }}
//             viewport={{ once: true }}
//             className="
//               rounded-2xl
//               p-6
//               bg-gradient-to-b from-white/10 to-white/5
//               backdrop-blur-xl
//               border border-white/10
//               hover:border-purple-400/40
//               transition
//             "
//           >
//             <h3 className="text-xl font-semibold mb-6 text-white text-center">
//               {category.title}
//             </h3>

//             {/* Skill Items */}
//             <div className="space-y-4">
//               {category.skills.map((skill, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ x: 6 }}
//                   className="
//                     flex items-center gap-4
//                     px-4 py-3
//                     rounded-xl
//                     bg-black/30
//                     border border-white/5
//                     hover:bg-purple-500/10
//                     transition
//                   "
//                 >
//                   <span className="text-2xl">{skill.icon}</span>
//                   <span className="text-gray-200 text-sm sm:text-base">
//                     {skill.name}
//                   </span>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Skills

import { motion } from "framer-motion"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si"

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Framer", icon: <SiFramer className="text-pink-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-purple-400 uppercase tracking-widest text-sm">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
          My Tech Stack
        </h2>
      </motion.div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-lg transition"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-white text-center mb-6">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-6 place-items-center">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-5xl">{skill.icon}</span>
                  <span className="text-sm text-gray-200 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills


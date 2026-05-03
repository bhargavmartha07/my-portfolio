import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Python", "C++", "Node.js", "FastAPI",
    "PostgreSQL", "Docker", "Git", "React",
    "System Design", "Distributed Systems"
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-blue-500 hover:scale-105 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
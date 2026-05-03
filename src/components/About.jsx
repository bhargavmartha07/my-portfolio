import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-400 leading-relaxed">
        I am a 3rd-year B.Tech student specializing in backend development and AI research.
        I enjoy building scalable systems, APIs, and intelligent AI applications.
      </p>

      <p className="text-gray-400 leading-relaxed mt-4">
        My focus is on system design, clean code, and building production-ready solutions.
      </p>
    </motion.section>
  );
}

export default About;
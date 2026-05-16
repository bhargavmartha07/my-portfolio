import { motion } from "framer-motion";
import { HiAcademicCap, HiCode, HiStar } from "react-icons/hi";

function About() {
  const highlights = [
    { icon: <HiAcademicCap />, label: "B.Tech AIML", value: "GPA 8.89/10" },
    { icon: <HiCode />, label: "DSA Problems", value: "400+ Solved" },
    { icon: <HiStar />, label: "ML Intern", value: "OneStop.ai" },
  ];

  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-500 text-center mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A brief introduction about who I am and what I do
        </motion.p>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a 3rd-year B.Tech student at <span className="text-white font-medium">Aditya University</span>,
              specializing in Artificial Intelligence & Machine Learning with a strong GPA of 8.89/10.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm passionate about building scalable backend systems, crafting intelligent AI applications,
              and solving complex problems through clean, production-ready code. My experience spans
              full-stack development, machine learning, and system design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Previously, I completed a Machine Learning internship at <span className="text-white font-medium">OneStop.ai</span>,
              where I developed a diabetes prediction model achieving 85% accuracy. I've also solved over
              400+ DSA problems across platforms like CodeChef and LeetCode.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Currently, I'm deepening my knowledge of distributed systems, AI research, and production-grade
              backend architecture.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-2 grid gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="text-blue-400 text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;

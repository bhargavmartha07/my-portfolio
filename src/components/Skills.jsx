import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiFastapi, SiSpringboot, SiBootstrap,
  SiPostgresql, SiDocker, SiGit, SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <SiPython />, level: 90 },
      { name: "C++", icon: <SiCplusplus />, level: 85 },
      { name: "Java", icon: <FaJava />, level: 80 },
      { name: "JavaScript", icon: <SiJavascript />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 75 },
      { name: "SQL", icon: null, level: 80 },
    ],
  },
  {
    title: "Frameworks & Technologies",
    skills: [
      { name: "React", icon: <SiReact />, level: 85 },
      { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
      { name: "FastAPI", icon: <SiFastapi />, level: 80 },
      { name: "Spring Boot", icon: <SiSpringboot />, level: 75 },
      { name: "Bootstrap", icon: <SiBootstrap />, level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
      { name: "Docker", icon: <SiDocker />, level: 75 },
      { name: "Git", icon: <SiGit />, level: 85 },
      { name: "Linux", icon: <SiLinux />, level: 75 },
    ],
  },
];

function SkillBar({ name, icon, level, index }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="flex items-center gap-2 text-sm text-gray-300">
          {icon && <span className="text-lg">{icon}</span>}
          {name}
        </span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          className="text-gray-500 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Technologies I work with on a daily basis
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-blue-400">{cat.title}</h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} {...skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

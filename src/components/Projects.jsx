import { motion } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";

const projects = [
  {
    title: "LLM Observability Platform",
    desc: "A containerized LLM proxy gateway with safety guardrails (PII redaction, prompt injection detection), real-time observability dashboard, and async analytics pipeline using ClickHouse and Redis.",
    tech: ["Python", "FastAPI", "React", "ClickHouse", "Redis", "Docker"],
    github: "https://github.com/bhargavmartha07/llm-observability-platform",
    demo: "",
  },
  {
    title: "Real-Time Auction Platform",
    desc: "WebSocket-based real-time bidding system enabling live auction experiences with concurrent user support, bid validation, and instant updates.",
    tech: ["Node.js", "WebSockets", "Docker", "PostgreSQL"],
    github: "https://github.com/bhargavmartha07/auction-platform",
    demo: "",
  },
  {
    title: "Payment Gateway (Async Architecture)",
    desc: "Asynchronous payment processing backend with webhook handling, idempotency keys, and transaction logging for reliable payment flows.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/bhargavmartha07/Payment_Gateway_async",
    demo: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="text-gray-500 text-center mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Some of the things I've built
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-blue-400 text-lg">
                  <HiCode />
                </span>
                <h3 className="text-lg font-semibold">{proj.title}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed flex-1">{proj.desc}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-800">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <HiCode />
                  Source Code
                </a>
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    <HiExternalLink />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

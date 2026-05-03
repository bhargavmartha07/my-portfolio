import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Real-Time Auction Platform",
      desc: "WebSocket-based real-time bidding system",
      tech: ["Node.js", "WebSockets", "Docker"],
      github: "https://github.com/bhargavmartha07/auction-platform",
      demo: "",
    },
    {
      title: "Payment Gateway System",
      desc: "Async backend with webhook processing",
      tech: ["Node.js", "PostgreSQL"],
      github: "https://github.com/bhargavmartha07/Payment_Gateway_async",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl 
                       hover:border-blue-500 
                       hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] 
                       hover:-translate-y-2 
                       transition duration-300"
          >
            <h3 className="text-xl font-semibold">{proj.title}</h3>

            <p className="text-gray-400 mt-2">{proj.desc}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {proj.tech.map((t, i) => (
                <span key={i} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-5">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                <button className="text-blue-400 hover:underline">GitHub</button>
              </a>

              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <button className="text-green-400 hover:underline">Live Demo</button>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
import { motion } from "framer-motion";
import { HiMail, HiBadgeCheck } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-12 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind or just want to say hi? I'm always open to new opportunities.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="mailto:bhargavmartha07@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            <HiMail className="text-lg" />
            bhargavmartha07@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://github.com/bhargavmartha07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <FiGithub className="text-xl" />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/bhargav-martha-784a1b383"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="https://leetcode.com/u/bhargavmartha07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-yellow-500 hover:text-yellow-400 transition-all"
          >
            <HiBadgeCheck className="text-xl" />
            <span className="text-sm">LeetCode</span>
          </a>
        </motion.div>

        <motion.p
          className="mt-12 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Phone: +91 9182572317
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;

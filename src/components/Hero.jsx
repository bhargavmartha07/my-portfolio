import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Bhargav Martha
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Backend Developer",
          1500,
          "Full Stack Developer",
          1500,
          "AI Researcher",
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="mt-4 text-lg md:text-xl text-gray-400"
      />

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
      >
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg">
          View Projects
        </button>
      </motion.a>

    </section>
  );
}

export default Hero;
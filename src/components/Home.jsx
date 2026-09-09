
import RotatingRole from "./RotatingRole";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const entrance = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Home = () => {
  return (
    <section id="home" tabIndex={-1} className="relative bg-[#090a0f] min-h-[calc(100svh-72px)] flex items-center py-14 md:py-20 px-6 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left Info Column */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-7 text-center md:text-left"
        >
          {/* Welcome Tag Pill */}
          <motion.div variants={entrance} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-400 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-white "></span>
            Software Engineer Portfolio
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={entrance} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Raahin Suhail S
            </span>
          </motion.h1>

          {/* Stable rotating role line */}
          <motion.div variants={entrance} className="space-y-1 text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-300">
            <span className="block">I architect</span>
            <span className="block text-white">
              <RotatingRole />
            </span>
          </motion.div>

          {/* Bio Text */}
          <motion.p variants={entrance} className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Computer Science graduate specializing in Python backend architecture, high-throughput REST APIs, automated workflows, and scalable cloud solutions.
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div variants={entrance} className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href="/Raahin_Suhail_Resume.pdf"
              download
              className="inline-flex items-center gap-2.5 bg-white text-zinc-950 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-[0.98] transition-[background-color,border-color,box-shadow,transform] duration-200 shadow-lg"
            >
              <FaDownload className="text-sm" /> Download Resume
            </a>

            <a
              href="#project"
              className="inline-flex items-center gap-2.5 border border-zinc-700 bg-zinc-900/60 text-zinc-200 px-7 py-3.5 rounded-xl font-bold text-sm cursor-pointer hover:border-white hover:text-white hover:bg-zinc-800/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-[0.98] transition-[background-color,border-color,box-shadow,transform] duration-200 backdrop-blur-md"
            >
              View Projects <FaArrowRight className="text-xs" />
            </a>
          </motion.div>

          {/* Location & Email Badges */}
          <motion.div variants={entrance} className="flex flex-wrap gap-4 justify-center md:justify-start text-xs font-medium text-zinc-400 pt-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80">
              <FaLocationDot className="text-white" /> Coimbatore, India
            </span>
            <a
              href="mailto:raahinsuhail5@gmail.com"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-600 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-white" /> raahinsuhail5@gmail.com
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={entrance} className="flex gap-3 justify-center md:justify-start pt-2">
            <a
              href="https://github.com/Raahin-SUhail"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/raahinsuhail"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/Raahinsuhail/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
              aria-label="LeetCode"
            >
              <SiLeetcode size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.16 }}
          className="flex justify-center"
        >
          <div className="relative group portrait-frame max-w-md w-full">
            {/* Outer Subtle Glow Border Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-800 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>

            <div className="relative rounded-3xl bg-zinc-900 p-2.5 border border-zinc-800 shadow-2xl overflow-hidden">
              <img
                src="/profile.png"
                alt="Raahin Suhail"
                width="800"
                height="800"
                className="w-full aspect-square max-w-md rounded-2xl object-cover object-top filter grayscale contrast-105 portrait-image transition-all duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/80 backdrop-blur-md p-4 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">Full Stack Engineer</p>
                  <p className="text-xs text-zinc-400">Available for Opportunities</p>
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] availability-pulse"></span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;


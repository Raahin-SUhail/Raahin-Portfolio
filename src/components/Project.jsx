import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      title: "THE YIELDER",
      subtitle: "Multi-Role Agricultural Commerce & Logistics Platform",
      description:
        "Built a role-based agricultural platform connecting farmers, buyers, wholesalers, service providers, and transporters through produce trading, farm services, equipment rental, auctions, recommendations, and freight logistics using a FastAPI gateway and Django microservices.",
      techStack: ["Python", "Django", "FastAPI", "React", "Vite", "JWT"],
      github: "https://github.com/Raahin-SUhail/the-yielder",
      demo: null,
    },
    {
      title: "SchemeForge",
      subtitle: "AI-Powered Government Scheme Discovery Platform",
      description:
        "Developed an AI-powered platform that helps Indian citizens discover relevant government welfare schemes using natural-language search, Google Gemini, grounded scheme data, and a deterministic eligibility engine for reliable matching.",
      techStack: ["React", "Vite", "Flask", "SQLite", "Gemini AI", "RAG"],
      github: "https://github.com/Raahin-SUhail/Scheme-Forge",
      demo: null,
    },
    {
      title: "EduClip AI",
      subtitle: "AI-Powered Educational Video Processing Platform",
      description:
        "Developed an AI-powered learning platform that transforms YouTube videos into concise educational materials through transcript extraction, Google Gemini summarization, and automated explainer video generation with FastAPI and MoviePy.",
      techStack: ["Python", "FastAPI", "Gemini AI", "MoviePy", "yt-dlp", "JWT"],
      github: "https://github.com/Raahin-SUhail/edu_clip-",
      demo: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="project" tabIndex={-1} className="relative bg-[#090a0f] text-zinc-100 py-20 md:py-24 px-6 overflow-hidden">
      {/* Ambient background blur light */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 font-inter">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4 shadow-inner">
            <FaFolderOpen className="text-white" /> Portfolio Showcase
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 rounded-full mx-auto mt-4 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed text-base">
            A selection of production-ready backend architectures, AI systems, and full-stack applications engineered for performance and scalability.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 lg:p-7 flex flex-col justify-between hover:border-zinc-500/80 hover:shadow-[0_0_30px_rgba(255,255,255,0.07)] transition-[border-color,background-color,box-shadow,color] duration-200 group"
            >
              <div>
                {/* Top Badge & Code link icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800">
                    <FaCodeBranch className="text-zinc-300" /> Featured System
                  </span>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-zinc-800/60 text-zinc-300 hover:text-white hover:bg-zinc-700/80 border border-zinc-700/50 hover:border-zinc-500 transition-[border-color,background-color,box-shadow,color] duration-200 shadow-sm"
                    aria-label={`View ${proj.title} on GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1 mb-4">
                  {proj.subtitle}
                </p>

                {/* Description */}
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Footer Tech Stack & Links */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/80">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-950/80 text-zinc-300 rounded-lg text-xs font-mono border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 flex items-center justify-between">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:underline underline-offset-4 tracking-wide"
                  >
                    Source Code <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Project;

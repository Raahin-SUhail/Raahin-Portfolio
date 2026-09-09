import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
  FaBrain,
  FaCode,
  FaServer,
  FaLaptopCode,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiN8N,
  SiAmazonwebservices,
  SiFigma,
} from "react-icons/si";

const About = () => {
  const languages = [
    {
      name: "Python",
      icon: <FaPython className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
  ];

  const frameworks = [
    {
      name: "React",
      icon: <FaReact className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Flask",
      icon: <SiFlask className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Django",
      icon: <SiDjango className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "FastAPI",
      icon: <SiFastapi className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
  ];

  const databases = [
    {
      name: "MySQL",
      icon: <SiMysql className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
  ];

  const aiTools = [
    {
      name: "n8n",
      icon: <SiN8N className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "REST APIs",
      icon: <FaServer className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Prompt Engineering",
      icon: <FaBrain className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Automation",
      icon: <FaLaptopCode className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "AWS",
      icon: <SiAmazonwebservices className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-3xl text-zinc-200 group-hover:text-white transition-colors" />,
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Leadership",
    "Adaptability",
    "Critical Thinking",
    "Quick Learner",
    "Time Management",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about" tabIndex={-1}
      className="relative min-h-screen bg-[#090a0f] text-zinc-100 py-20 md:py-24 px-6 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4 shadow-inner">
            <FaUserTie className="text-zinc-200" /> Professional Profile
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 rounded-full mx-auto mt-4 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            I'm <span className="text-white font-semibold underline decoration-zinc-600 underline-offset-4">Raahin Suhail S</span>,
            a software engineer and Full Stack Developer focused on building high-performance web applications, resilient backend architectures, and AI-driven automation systems. Driven by clean code design, speed, and continuous technology exploration.
          </p>
        </motion.div>

        {/* Education & Experience Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 rounded-3xl p-8 border border-zinc-800/80 hover:border-zinc-600/80 transition-[border-color,background-color,box-shadow,color] duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 bg-zinc-800/80 rounded-2xl border border-zinc-700/60 group-hover:border-zinc-500 transition-colors">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
                <p className="text-xs text-zinc-400">Academic Background</p>
              </div>
            </div>

            <div className="bg-zinc-950/60 rounded-2xl p-6 border border-zinc-800/60">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-semibold text-white">
                  Bachelor of Engineering
                </h4>
                <span className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full font-medium border border-zinc-700">
                  Graduated
                </span>
              </div>

              <p className="text-zinc-300 font-medium text-sm">
                Computer Science and Engineering
              </p>

              <p className="text-zinc-400 text-xs mt-1">
                SNS College of Technology
              </p>

              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Specialized in core software engineering, data structures & algorithms, web architectures, cloud services, and AI solutions.
              </p>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900/40 rounded-3xl p-8 border border-zinc-800/80 hover:border-zinc-600/80 transition-[border-color,background-color,box-shadow,color] duration-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)] group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 bg-zinc-800/80 rounded-2xl border border-zinc-700/60 group-hover:border-zinc-500 transition-colors">
                <FaBriefcase className="text-2xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Experience</h3>
                <p className="text-xs text-zinc-400">Industry History</p>
              </div>
            </div>

            <div className="bg-zinc-950/60 rounded-2xl p-6 border border-zinc-800/60">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-lg font-semibold text-white">
                  Python Developer Intern
                </h4>
                <span className="text-xs px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full font-medium border border-zinc-700">
                  Internship
                </span>
              </div>

              <p className="text-zinc-300 font-medium text-sm">
                Ascentz Technologies
              </p>

              <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                Engineered robust backend systems using Python, built high-performance RESTful APIs, optimized database operations, and streamlined team Git workflows in a fast-paced environment.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Technical Skills Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">Stack & Capabilities</span>
          </h3>
          <p className="text-zinc-400 text-sm mt-2">Tools, frameworks, and technologies I work with</p>
        </motion.div>

        {/* Skills Grids */}
        <div className="space-y-10">
          {/* Programming Languages */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-zinc-400 text-xl" />
              <h4 className="text-xl font-semibold text-zinc-200">Programming Languages</h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {languages.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}

                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-zinc-500  transition-[border-color,background-color,box-shadow,color] duration-200 group"
                >
                  {skill.icon}
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks & Libraries */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaReact className="text-zinc-400 text-xl" />
              <h4 className="text-xl font-semibold text-zinc-200">Frameworks & Libraries</h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {frameworks.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}

                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-zinc-500  transition-[border-color,background-color,box-shadow,color] duration-200 group"
                >
                  {item.icon}
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases & Storage */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaDatabase className="text-zinc-400 text-xl" />
              <h4 className="text-xl font-semibold text-zinc-200">Databases</h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {databases.map((db, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}

                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-zinc-500  transition-[border-color,background-color,box-shadow,color] duration-200 group"
                >
                  {db.icon}
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{db.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI & Automation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBrain className="text-zinc-400 text-xl" />
              <h4 className="text-xl font-semibold text-zinc-200">AI & Automation</h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}

                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-zinc-500  transition-[border-color,background-color,box-shadow,color] duration-200 group"
                >
                  {tool.icon}
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Infrastructure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaTools className="text-zinc-400 text-xl" />
              <h4 className="text-xl font-semibold text-zinc-200">Tools & Platforms</h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}

                  className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-zinc-500  transition-[border-color,background-color,box-shadow,color] duration-200 group"
                >
                  {tool.icon}
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 pt-12 border-t border-zinc-800/80 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <FaCheckCircle className="text-zinc-400 text-lg" />
            <h3 className="text-2xl font-bold text-white tracking-tight">Professional Soft Skills</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}

                className="px-5 py-2.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-zinc-600 hover:text-white hover:bg-zinc-800/90  transition-[border-color,background-color,box-shadow,color] duration-200 shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaAws, FaPython, FaBrain, FaRobot } from "react-icons/fa";
import { SiSalesforce, SiOracle } from "react-icons/si";

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      date: "Issued: October 2025",
      credentialId: "6821624",
      category: "AI & Salesforce",
      url: "https://drive.google.com/file/d/1jKDQ-n03ziBGtK3879qhpNC9rXc5FFnU/view?usp=drivesdk",
      icon: <SiSalesforce className="text-3xl text-zinc-300 group-hover:text-white transition-colors" />,
      featured: true,
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle University",
      date: "Issued: July 2025",
      credentialId: null,
      category: "Cloud & AI",
      url: "https://drive.google.com/file/d/1e1lPVdZBrrnEHCyuDxPSpoxq5-_w22ag/view?usp=drivesdk",
      icon: <SiOracle className="text-3xl text-zinc-300 group-hover:text-white transition-colors" />,
      featured: true,
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Training & Certification",
      date: "Completed: July 2025",
      credentialId: null,
      category: "AWS Cloud",
      url: "https://drive.google.com/file/d/1BVFNmikaqNgCVyACuJeP7_i0BExwnoqq/view?usp=drivesdk",
      icon: <FaAws className="text-3xl text-zinc-300 group-hover:text-white transition-colors" />,
      featured: false,
    },
    {
      title: "Generative Models for Developers",
      issuer: "Infosys Springboard",
      date: "Completed: July 2025",
      credentialId: null,
      category: "Generative AI",
      url: "https://drive.google.com/file/d/1ip6T2AEX-hdEPx4elg3Fj0MQrz3FsKmv/view?usp=drivesdk",
      icon: <FaBrain className="text-3xl text-zinc-300 group-hover:text-white transition-colors" />,
      featured: false,
    },
    {
      title: "Python for Placement Readiness",
      issuer: "byteXL / SNS Institutions",
      date: "Completed: July 2025",
      credentialId: null,
      category: "Python",
      url: "https://drive.google.com/file/d/1jjXVeqOMlu5csLRgwLqRo_TPS-btwbGU/view?usp=drivesdk",
      icon: <FaPython className="text-3xl text-zinc-300 group-hover:text-white transition-colors" />,
      featured: false,
    },
    {
      title: "Explore GenAI Universe:SNS",
      issuer: "Analytics Vidhya",
      date: "Completed: November 2025",
      credentialId: null,
      category: "GenAI",
      url: "https://drive.google.com/file/d/1rlExJSx3LvZGAKX1AH7cuH5vbG0BBDyJ/view?usp=drivesdk",
      icon: <FaRobot className="text-3xl text-zinc-300 group-hover:text-white transition-colors" />,
      featured: false,
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" tabIndex={-1} className="relative bg-[#090a0f] text-zinc-100 py-20 md:py-24 px-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

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
            <FaAward className="text-white" /> Verified Credentials
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Certifications
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 rounded-full mx-auto mt-4 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed text-base">
            Professional certifications and continuous learning across AI, cloud, and software development.
          </p>
        </motion.div>

        {/* Certifications Responsive Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className={`bg-zinc-900/40 border rounded-3xl p-7 flex flex-col justify-between transition-[border-color,background-color,box-shadow,color] duration-200 group shadow-lg ${
                cert.featured
                  ? "border-zinc-700/90 hover:border-zinc-400 shadow-[0_0_25px_rgba(255,255,255,0.04)] bg-gradient-to-b from-zinc-900/70 to-zinc-900/30"
                  : "border-zinc-800/80 hover:border-zinc-600/80 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              }`}
            >
              <div>
                {/* Header Row: Category Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-800">
                    {cert.category}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 group-hover:border-zinc-600 transition-colors shadow-sm">
                    {cert.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-zinc-300 font-medium mb-4">
                  {cert.issuer}
                </p>

                {/* Meta details: Date & Credential ID */}
                <div className="space-y-1.5 mb-6 text-xs text-zinc-400 font-mono bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/60">
                  <p>{cert.date}</p>
                  {cert.credentialId && (
                    <p className="text-zinc-300 font-semibold">
                      Credential ID: <span className="text-white">{cert.credentialId}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="pt-4 border-t border-zinc-800/80">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} Certificate`}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-zinc-900/80 hover:bg-white text-zinc-300 hover:text-zinc-950 border border-zinc-700/80 hover:border-white px-5 py-3 rounded-xl text-sm font-bold transition-[border-color,background-color,box-shadow,color] duration-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  View Certificate <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;

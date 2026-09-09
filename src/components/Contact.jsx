import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaComments } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" tabIndex={-1} className="relative bg-[#090a0f] text-zinc-100 py-20 md:py-24 px-6 overflow-hidden">
      {/* Soft Ambient Background Blur */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

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
            <FaComments className="text-white" /> Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Connect</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-zinc-600 via-white to-zinc-600 rounded-full mx-auto mt-4 shadow-[0_0_12px_rgba(255,255,255,0.4)]"></div>

          <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-relaxed text-base">
            Have a question, software engineering opportunity, or project idea? Feel free to reach out directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-xl flex flex-col justify-between h-full space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Contact Information
              </h3>
              <p className="text-zinc-400 text-sm mb-8">
                Open for full-stack engineering roles, backend contracts, and technical collaborations.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 bg-zinc-800/80 rounded-2xl border border-zinc-700/60 text-white group-hover:border-zinc-500 transition-colors">
                    <FaLocationDot size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="text-zinc-200 font-medium text-base">Coimbatore, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 bg-zinc-800/80 rounded-2xl border border-zinc-700/60 text-white group-hover:border-zinc-500 transition-colors">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Phone</p>
                    <a href="tel:+919342170206" className="break-all text-zinc-200 font-medium text-base hover:text-white transition-colors">
                      +91 93421 70206
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 bg-zinc-800/80 rounded-2xl border border-zinc-700/60 text-white group-hover:border-zinc-500 transition-colors">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Email</p>
                    <a href="mailto:raahinsuhail5@gmail.com" className="break-all text-zinc-200 font-medium text-base hover:text-white transition-colors">
                      raahinsuhail5@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Box */}
            <div className="pt-8 border-t border-zinc-800/80">
              <p className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mb-4">
                Follow & Connect
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Raahin-SUhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/raahinsuhail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://leetcode.com/u/Raahinsuhail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.12)] transition-all"
                  aria-label="LeetCode"
                >
                  <SiLeetcode size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-zinc-900/40 rounded-3xl p-6 sm:p-8 border border-zinc-800/80 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    autoComplete="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3.5 text-base text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-[border-color,background-color,box-shadow,color] duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    autoComplete="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3.5 text-base text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-[border-color,background-color,box-shadow,color] duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Hi Raahin, I'd like to discuss an opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-3.5 text-base text-white placeholder:text-zinc-600 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-white/20 transition-[border-color,background-color,box-shadow,color] duration-200 resize-y min-h-36"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-white text-zinc-950 py-4 px-6 rounded-xl font-bold text-sm hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] active:scale-[0.98] transition-[border-color,background-color,box-shadow,color] duration-200 disabled:opacity-50 cursor-pointer shadow-lg"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? (
                  <><span className="loading-spinner" aria-hidden="true" /> Sending...</>
                ) : (
                  <>
                    <FaPaperPlane className="text-xs" /> Send Message
                  </>
                )}
              </button>

              {success === true && (
                <div role="status" className="form-feedback p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-center text-sm font-medium text-white">
                  ✓ Message sent successfully! I will reply shortly.
                </div>
              )}
              {success === false && (
                <div role="alert" className="form-feedback p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-center text-sm font-medium text-zinc-300">
                  ⚠️ Failed to send message. Please try again or email directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;


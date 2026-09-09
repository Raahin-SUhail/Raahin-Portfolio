import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const sections = [
  ["home", "Home"], ["about", "About"], ["project", "Projects"],
  ["certifications", "Certifications"], ["contact", "Contact"],
];
const socials = [
  ["GitHub Profile", "https://github.com/Raahin-SUhail", FaGithub],
  ["LinkedIn Profile", "https://www.linkedin.com/in/raahinsuhail", FaLinkedin],
  ["LeetCode Profile", "https://leetcode.com/u/Raahinsuhail/", SiLeetcode],
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let frame;
    const update = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const [id] of sections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 160) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = "contact";
      setActive(current);
      frame = undefined;
    };
    const onScroll = () => { if (frame === undefined) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = [...document.querySelectorAll("main, footer")].map((element) => [element, element.inert]);
    background.forEach(([element]) => { element.inert = true; });
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector("a")?.focus());
    const close = () => { setIsMenuOpen(false); toggleRef.current?.focus(); };
    const onKey = (event) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key !== "Tab") return;
      const items = [toggleRef.current, ...menuRef.current.querySelectorAll("a")];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setIsMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      background.forEach(([element, wasInert]) => { element.inert = wasInert; });
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [isMenuOpen]);

  const socialLinks = () => socials.map(([label, href, Icon]) => (
    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-link">
      <Icon size={18} />
    </a>
  ));

  const navigate = (id) => {
    setIsMenuOpen(false);
    // Move keyboard focus out of the closing panel, without a second scroll.
    requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  };

  return (
    <header className={`site-header sticky top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
      <div className="max-w-[1328px] mx-auto px-6 flex h-[72px] items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white" aria-label="Raahin — Home" onClick={() => navigate("home")}>
          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" aria-hidden="true" />
          <span>Raahin<span className="text-zinc-500">.</span></span>
        </a>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => navigate(id)} aria-current={active === id ? "location" : undefined} className={`nav-link ${active === id ? "is-active" : ""}`}>
                  {label}
                  {active === id && <motion.span layoutId="active-section" className="nav-indicator" transition={{ duration: reducedMotion ? 0 : 0.25 }} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:flex gap-2">{socialLinks()}</div>
        <button ref={toggleRef} className="social-link lg:hidden" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.span animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}>
            {isMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </motion.span>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div key="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} className="fixed inset-0 top-[72px] lg:hidden">
            <button tabIndex={-1} aria-label="Close navigation" onClick={() => { setIsMenuOpen(false); toggleRef.current?.focus(); }} className="absolute inset-0 bg-black/60" />
            <motion.nav initial={{ y: reducedMotion ? 0 : -8 }} animate={{ y: 0 }} exit={{ y: reducedMotion ? 0 : -8 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} id="mobile-navigation" ref={menuRef} aria-label="Mobile navigation" className="mobile-menu relative bg-[#0c0d12] border-y border-zinc-800 px-6 py-5 shadow-2xl max-h-[calc(100dvh-72px)] overflow-y-auto">
              <ul className="space-y-1">
                {sections.map(([id, label]) => (
                  <li key={id}><a href={`#${id}`} onClick={() => navigate(id)} aria-current={active === id ? "location" : undefined} className="mobile-nav-link">{label}</a></li>
                ))}
              </ul>
              <div className="flex gap-3 mt-5 pt-5 border-t border-zinc-800">{socialLinks()}</div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

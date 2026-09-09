import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const roles = [
  "Python Backend Systems",
  "High-Performance REST APIs",
  "AI Automation Pipelines",
  "Full Stack Web Apps",
];

export default function RotatingRole() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    let timer;
    const start = () => {
      clearInterval(timer);
      if (!document.hidden) timer = setInterval(() => setIndex((value) => (value + 1) % roles.length), 3600);
    };
    start();
    document.addEventListener("visibilitychange", start);
    return () => { clearInterval(timer); document.removeEventListener("visibilitychange", start); };
  }, [reducedMotion]);

  if (reducedMotion) return <span className="text-white">{roles[0]}</span>;
  return (
    <span className="role-rotator">
      <span className="sr-only">{roles.join(", ")}</span>
      {roles.map((role, i) => (
        <motion.span key={role} aria-hidden="true" className="role-option" initial={false}
          animate={{ opacity: i === index ? 1 : 0, y: i === index ? 0 : 8 }}
          transition={{ duration: 0.35 }}>
          {role}
        </motion.span>
      ))}
    </span>
  );
}

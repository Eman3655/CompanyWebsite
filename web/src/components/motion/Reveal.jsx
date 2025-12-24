// src/components/motion/Reveal.jsx
import React from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  from = "bottom",
  delay = 0,
  className = "",
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const axis =
    from === "left"
      ? { x: -18, y: 0 }
      : from === "right"
      ? { x: 18, y: 0 }
      : { x: 0, y: 18 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...axis }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.55, delay: delay / 1000, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

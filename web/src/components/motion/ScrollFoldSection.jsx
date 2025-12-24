// src/components/motion/ScrollSection.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollSection({ children, className = "" }) {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 35%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          opacity,
          y,
          willChange: "opacity, transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

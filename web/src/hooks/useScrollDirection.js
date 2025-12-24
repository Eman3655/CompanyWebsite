// src/hooks/useScrollDirection.js
import { useEffect, useRef, useState } from "react";

export function useScrollDirection({ threshold = 8 } = {}) {
  const [dir, setDir] = useState("down"); 
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        if (Math.abs(delta) >= threshold) {
          setDir(delta > 0 ? "down" : "up");
          lastY.current = y;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return dir;
}

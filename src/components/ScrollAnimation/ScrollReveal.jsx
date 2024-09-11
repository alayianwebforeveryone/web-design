"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScrollReveal = ({ children }) => {
  // Initialize the animation controller
  const controls = useAnimation();
  
  // Set up the Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger the animation when 20% of the component is in view
  });

  // Start the animation when the component is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref} // Attach the ref to the component to observe
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

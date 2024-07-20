import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedComponentProps {
  children: React.ReactNode;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;

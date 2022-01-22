import React from "react";
import { motion } from "framer-motion";

const Transition = (props) => {

  return (
    <motion.div
      initial={{filter: "blur(2px)", opacity: 0.7}}
      animate={{filter: "blur(0)", opacity: 1}}
      exit={{filter: "blur(2px)", opacity: 0.9}}
      onAnimationStart={() => window.scrollTo(0, 0)}>
      { props.children }
    </motion.div>
  );
}

export default Transition;

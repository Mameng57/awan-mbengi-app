import React from "react";
import { motion } from "framer-motion";

const Transition = (props) => {

  const variants = {
    initial: {
      filter: "blur(2px)",
      opacity: 0.7,
    },
  
    in: {
      filter: "blur(0)",
      opacity: 1,
    },

    out: {
      filter: "blur(2px)",
      opacity: 0.9,
    },
  };

  const onStart = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div variants={variants} initial="initial" animate="in" exit="out" onAnimationStart={onStart}>
      {props.children}
    </motion.div>
  );
}

export default Transition;

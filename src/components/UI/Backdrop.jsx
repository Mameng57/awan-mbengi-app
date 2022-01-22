import React from "react";
import { motion } from "framer-motion";
import Styles from "./Styles/Backdrop.module.css"

const Backdrop = ({children, setModal}) => {

  return(
    <motion.div className={Styles.backdrop}
      onClick={() => setModal(false)}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      {children}
    </motion.div>
  );
}

export default Backdrop;

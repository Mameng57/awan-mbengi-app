import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./Styles/Toast.module.css";

const Toast = (props) => {

  useEffect(
    () => {
      const timeId = setTimeout(
        () => {
          props.toggleToast(false);
        }, 2000
      );

      return () => clearTimeout(timeId);
    }, [props]
  );

  return (
    <AnimatePresence exitBeforeEnter> {
      props.isVisible &&
      <motion.div
        key={props.id}
        className={Styles.toast}
        initial={{opacity: 0, y: 50, x: 350}}
        animate={{opacity: 1, y: 30, x: 350}}
        exit={{opacity: 0, y: 50}}
        transition={{duration: 1.2, type:"spring", stiffness: 500, damping: 20}}>
        <div className={Styles.toast__inner}>
          <div className={Styles.pillar} />
          <svg xmlns="http://www.w3.org/2000/svg"
            className={Styles.icon} fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className={Styles.text}>
            <h2>{props.menu.name}</h2>
            <p>
              Berhasil ditambahkan ke dalam keranjang...
            </p>
          </div>
        </div>
      </motion.div>
    }
    </AnimatePresence>
  );
}

export default Toast;

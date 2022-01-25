import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./Styles/Toast.module.css";
import { ReactComponent as IconWarning } from "../../assets/icons/Warning.svg";

const Toast = (props) => {

  useEffect(
    () => {
      const timeId = setTimeout(
        () => {
          props.toggleToast(false);
        }, 1500
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
        initial={{opacity: 0, x: 350}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: 350}}
        transition={{duration: 1.2, type:"spring", stiffness: 500, damping: 20}}>
        <div className={Styles.toast__inner}>
          <div className={Styles.pillar} />
          <IconWarning className={Styles.icon} />
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

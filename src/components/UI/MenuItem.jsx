import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./Styles/MenuItem.module.css";

const MenuItem = (props) => {

  const [isClicked, setIsClicked] = useState(false);

  const slides = {
    initial: {
      x: "-100vw",
      filter: "blur(2px)",
    },
    animate: {
      x: 0,
      filter: "blur(0)",
    },
    exit: {
      x: "100vw",
      filter: "blur(1.5px)",
    }
  }

  const clicks = {
    initial: {
      y: -70,
    },
    animate: {
      y: 0,
      rotate: 0,
    },
    exit: {
      y: -70,
      rotate: 360,
    }
  }

  const onClickHandler = () => {
    props.addToCart(props.item);
    setIsClicked((prevState) => !prevState);
  }

  return (
    <motion.div
      key={props.id}
      className={Styles.menu__item}
      style={{backgroundImage: `url(${props.item.image})`}}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={slides}
      transition={{type: "spring", damping: 15}}>
      <div className={Styles.item__overlay}>
        <div className={Styles.overlay__texts}>
          <h3>{props.item.name}</h3>
          <h3>Rp. {props.item.price}</h3>
        </div>
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            key={isClicked}
            className={Styles.plus}
            onClick={onClickHandler}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={clicks}
            transition={{type: "tween"}}
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default MenuItem;

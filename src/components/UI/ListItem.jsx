import React from "react";
import { motion } from "framer-motion";
import Styles from "./Styles/ListItem.module.css";
import { ReactComponent as IconPlus } from "../../assets/icons/Plus.svg";
import { ReactComponent as IconMinus } from "../../assets/icons/Minus.svg";
import { ReactComponent as IconCross } from "../../assets/icons/Cross.svg";

const ListItem = ({item, idx, changeQty, deleteHandler}) => {

  return (
    <motion.div
      key={item.id}
      exit={{x: "-50vw"}}
      transition={{type: "just", duration: 0.7}}
      className={Styles.header}>
      <div className={Styles.header__column}>
        <div className={Styles.image} style={{backgroundImage: `url(${item.image})`}} />
        <div className={Styles.description}>
          {item.name}
        </div>
      </div>
      <div className={Styles.header__column}>
        <IconMinus className={Styles.button} onClick={() => changeQty("sub", idx)}></IconMinus>
        <div className={Styles.input}>
          <input
            type="text"
            pattern="\d*"
            maxLength="2"
            value={item.quantity}
            onChange={(event) => changeQty("", idx, event)}
          />
        </div>
        <IconPlus className={Styles.button} onClick={() => changeQty("add", idx)}></IconPlus>
      </div>
      <div className={Styles.header__column}>
        <h3>{item['total']}</h3>
      </div>
      <div className={Styles.header__column}>
        <IconCross className={Styles.delete} onClick={() => deleteHandler(item.id)}></IconCross>
      </div>
    </motion.div>
  );
}

export default ListItem;

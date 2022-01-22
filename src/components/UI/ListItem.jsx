import React from "react";
import { motion } from "framer-motion";
import Styles from "./Styles/ListItem.module.css";

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
        <svg xmlns="http://www.w3.org/2000/svg"
          className={Styles.button}
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor" onClick={() => changeQty("sub", idx)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
        </svg>
        <div className={Styles.input}>
          <input type="number" min="1" value={item.quantity} onChange={(event) => changeQty("", idx, event)}
          />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"
          className={Styles.button}
          fill="none" viewBox="0 0 24 24"
          stroke="currentColor" onClick={(event) => changeQty("add", idx, event)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div className={Styles.header__column}>
        <h3>{item['total']}</h3>
      </div>
      <div className={Styles.header__column}>
        <svg xmlns="http://www.w3.org/2000/svg"
          className={Styles.delete} fill="none"
          viewBox="0 0 24 24" stroke="currentColor"
          onClick={() => deleteHandler(item.id)}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </motion.div>
  );
}

export default ListItem;

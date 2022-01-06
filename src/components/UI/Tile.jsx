import React from "react";
import Styles from "./Styles/Tile.module.css";

const Tile = (props) => {

  return (
    <div className={Styles.tile}>
      <div className={Styles.image} style={{backgroundImage: `url(${props.special.image})`}}>
        <div className={Styles.image__price}>
          <span><b>Rp. {props.special.price}</b></span>
        </div>
      </div>
      <div className={Styles.text}>
        <h4 className={Styles.text__heading}>{props.special.name}</h4>
        <p> {
          props.special.description
        }
        </p>
      </div>
    </div>
  );
}

export default Tile;

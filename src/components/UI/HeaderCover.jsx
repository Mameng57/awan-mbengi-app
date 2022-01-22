import React from "react";
import Styles from "./Styles/HeaderCover.module.css";
import a from "../../assets/images/AwanMbengi_01.jpg";
import b from "../../assets/images/AwanMbengi_02.jpg";

const HeaderCover = ({image}) => {

  const imagePath = () => {
    if (image === "a") {
      return `url(${a})`;
    }

      return `url(${b})`;
  };

  return (
    <div className={Styles['cover-image']} style={{backgroundImage: imagePath()}}>
      <div className={`${Styles.overlay} ${Styles.logo}`} />
      <div className={`${Styles.overlay} ${Styles.text}`}>
        <span>It's not talk about taste, but soul</span>
      </div>
    </div>
  );
}

export default HeaderCover;

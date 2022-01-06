import React from "react";
import Button from "../UI/Button";
import Styles from "./Styles/About.module.css";
import facebook from "../../assets/images/Brands/Facebook.png";
import instagram from "../../assets/images/Brands/Instagram.png";
import twitter from "../../assets/images/Brands/Twitter.png";

const About = () => {

  return (
    <div className={Styles.about}>
      <div className={Styles.overlay}>
        <div className={Styles['text-box']}>
          <h1>About</h1>
          <p>
            Café instagramable berikutnya berada di Jalan Kaliurang dengan mengusung konsep bewarna rustik
            karena dari café tersebut sudah dirancang dengan gaya klasik namun otentik. Buka pukul 11.00- 24.00
            Awan Mbengi yang terdiri dari dua style ini mempunyai ruangan outdoor dan indoor yang pastinya tetap instragmable 
            untuk kalian yang suka foto loh!
          </p>
        </div>
        <div className={Styles.button}>
          <Button style={{borderRadius: "15px", fontSize: "1.5rem"}}>
            View More
          </Button>
        </div>
        <div className={Styles.footer}>
          <div className={Styles.footer__left}>
            <a href="https://www.facebook.com/pages/Waroeng-Kopi-Shisha-Awan-Mbengi/168423899870365">
              <img src={facebook} alt="Facebook"/>
            </a>
            <a href="https://www.instagram.com/awanmbengijogja/">
              <img src={instagram} alt="Instagram"/>
            </a>
           <img src={twitter} alt="Twitter"/>
          </div>
          <div className={Styles.footer__right} />
        </div>
      </div>
    </div>
  );
}

export default About;

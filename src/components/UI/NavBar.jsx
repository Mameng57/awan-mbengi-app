import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Styles/NavBar.module.css";
import { ReactComponent as IconCart } from "../../assets/icons/Cart.svg";
import { ReactComponent as IconUser } from "../../assets/icons/User.svg";

const NavBar = ({cartCounter, setModal}) => {

  return (
    <div className={Styles.navbar}>
      <div className={Styles['main-start']}>
        <Link to="/" style={{textDecoration: "none"}}>
          <div className={Styles.fancy}>
            Awan Mbengi
          </div>
        </Link>
      </div>
      <div className={Styles['main-end']}>
        <Link to="/order" style={{textDecoration: "none"}}>
          <span>Order and Menu</span>
        </Link>
        <Link to="/about" style={{textDecoration: "none"}}>
          <span>About</span>
        </Link>
        <div className={Styles.cart} orders={cartCounter !== 0 ? cartCounter : ""} onClick={() => setModal(true)}>
          <IconCart />
        </div>
        <div className={Styles.user}>
          <IconUser />
        </div>
      </div>
    </div>
  );
}

export default NavBar;

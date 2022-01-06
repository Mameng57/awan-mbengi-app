import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Styles/NavBar.module.css";

const NavBar = ({currentLocation, cartCounter, setModal}) => {

  const displayCart = () => {
    if (currentLocation.pathname !== "/order") {
      return (
        <Link to="/order" style={{textDecoration: "none"}}>
          <span>Order and Menu</span>
        </Link>
      );
    }

    return (
      <div className={Styles.cart} orders={cartCounter !== 0 ? cartCounter : ""} onClick={() => setModal(true)}>
        <span>CART</span>
      </div>
    );
  }

  return (
    <div className={Styles.navbar}>
      <div className={Styles['main-start']}>
        <div className={Styles.fancy}>
          Awan Mbengi
        </div>
      </div>
      <div className={Styles['main-end']}>
        <Link to="/" style={{textDecoration: "none"}}>
          <span>Home</span>
        </Link>
        {displayCart()}
        <Link to="/about" style={{textDecoration: "none"}}>
          <span>About</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

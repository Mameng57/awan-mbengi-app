import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CartModal from "./CartModal";
import Styles from "./Styles/NavBar.module.css";
import { ReactComponent as IconCart } from "../../assets/icons/Cart.svg";
import { ReactComponent as IconUser } from "../../assets/icons/User.svg";
import { ReactComponent as IconUserFill } from "../../assets/icons/User-Fill.svg";

const NavBar = (props) => {

  const [openDropdown, setOpenDropdown] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
     <AnimatePresence exitBeforeEnter> {
        modalOpen &&
        <CartModal
          items={props.items}
          setModal={setModalOpen}
          deleteItem={props.deleteItem}
          setItem={props.setItem}
        />
      }
      </AnimatePresence>
      <div className={Styles.navbar}>
        <div className={Styles['main-start']}>
          <Link to="/" style={{textDecoration: "none"}}>
            <div className={Styles.fancy}>
              Awan Mbengi
            </div>
          </Link>
        </div>
        <div className={Styles['main-end']}>
          <Link to="/about" style={{textDecoration: "none"}}>
            <span>About</span>
          </Link>
          <Link to="/order" style={{textDecoration: "none"}}>
            <span>Order and Menu</span>
          </Link>
          <div
            className={Styles.cart}
            orders={props.cartCounter !== 0 ? props.cartCounter : ""}
            onClick={() => setModalOpen(true)}>
            <IconCart />
          </div>
          <div>
            { openDropdown
              ? <IconUserFill
              className={Styles.user}
              onClick={() => setOpenDropdown((prevState) => !prevState)}>
                </IconUserFill>
              : <IconUser
              className={Styles.user}
                  onClick={() => setOpenDropdown((prevState) => !prevState)}>
                </IconUser>
            }
            { openDropdown &&
              <div className={Styles.dropdown}>
                <div className={Styles.dropdown__element}>
                  LOGIN
                </div>
                <div className={Styles.dropdown__element}>
                  DAFTAR
                </div>
                <div className={Styles.dropdown__footer}>
                  Selamat Pagi ...
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NavBar;

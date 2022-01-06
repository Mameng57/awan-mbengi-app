import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CategoryMenu from "../UI/CategoryMenu";
import MenuItem from "../UI/MenuItem";
import Styles from "./Styles/Menu.module.css";
import Toast from "../UI/Toast";

const Menu = ({menus, addCounter, addItem}) => {

  const [animateGrid, setAnimateGrid] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMenu, setToastMenu] = useState({});

  const addToCart = (menu) => {
    const addedMenu = {
      ...menu,
      quantity: 1,
      total: menu.price,
    }

    setShowToast(true);
    setToastMenu(menu);
    addItem(addedMenu);
    addCounter();
  }

  const [filteredMenus, setFilteredMenus] = useState([
    ...menus['coffee'].map(
      (item) => <MenuItem key={item.id} item={item} addToCart={addToCart} />
    )
  ]);

  const onClickHandler = (category) => {
    setFilteredMenus(
      menus[category.toLowerCase()].map(
        (item) => <MenuItem key={item.id} item={item} addToCart={addToCart} />
      )
    );

    setAnimateGrid((prevState) => !prevState);
  }

  return (
    <div className={Styles.menu}>
      <div className={Styles.menu__heading}>
        <h1>
          Berbagai Macam Makanan dan Minuman yang Kami Sediakan
        </h1>
        <h3>Silahkan pilih yang diingkan</h3>
      </div>
      <CategoryMenu menus={menus} onClick={onClickHandler} />
      <AnimatePresence exitBeforeEnter>
        <div key={animateGrid} className={Styles.menu__grid}> {
          filteredMenus
        }
        </div>
      </AnimatePresence>
      <div className={Styles.menu__navigation}>
        <div className={Styles.navigation}>
          <div className={`${Styles.arrow} ${Styles.left}`} />
        </div>
        <div className={Styles.navigation}>
          <div className={`${Styles.arrow} ${Styles.right}`} />
        </div>
      </div>
      <Toast menu={toastMenu} isVisible={showToast} toggleToast={setShowToast} />
    </div>
  );
}

export default Menu;

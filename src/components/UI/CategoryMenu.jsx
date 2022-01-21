import React, { useState } from "react";
import Button from "./Button";
import Styles from "./Styles/CategoryMenu.module.css";

const CategoryMenu = (props) => {

  const [activeCategory, setActiveCategory] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const css = {
    width: '10rem',
    minHeight: '3rem',
    borderRadius: '20px',
    color: 'black',
    textTransform: 'capitalize',
  };

  const changeCategoryHandler = (category, id) => {
    setActiveCategory(
      { [id]: true }
    );
    props.onClick(category);
  }

  return (
    <div className={Styles['category-menu']}>
      <h3>Kategori Menu</h3>
      <div className={Styles['category-menu__items']}> {
        Object.keys(props.menus).map(
          (category, idx) => (
            <Button
              key={category}
              id={idx}
              style={css}
              onChangeCategory={changeCategoryHandler}
              inverted active={activeCategory[idx]}>{category}
            </Button>
          )
        )
      }
      </div>
    </div>
  );
}

export default CategoryMenu;

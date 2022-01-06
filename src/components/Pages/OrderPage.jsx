import React from "react";
import Menu from "../Contents/Menu";
import HeaderCover from "../UI/HeaderCover";
import Transition from "../UI/Transition";

const OrderMenu = ({menus, addCounter, addItem}) => {

  return (
    <Transition>
      <HeaderCover image="b" />
      <Menu menus={menus} addCounter={addCounter} addItem={addItem} />
    </Transition>
  );
}

export default OrderMenu;

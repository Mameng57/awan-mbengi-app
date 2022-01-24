import React from "react";
import Menu from "../Contents/Menu";
import HeaderCover from "../UI/HeaderCover";
import Transition from "../UI/Transition";

const OrderMenu = ({menus, addItem}) => {

  return (
    <Transition>
      <HeaderCover image="b" />
      <Menu menus={menus} addItem={addItem} />
    </Transition>
  );
}

export default OrderMenu;

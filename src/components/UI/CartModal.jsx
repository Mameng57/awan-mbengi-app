import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { useReactToPrint } from "react-to-print";
import Backdrop from "./Backdrop";
import Styles from "./Styles/CartModal.module.css";
import CartTable from "./CartTable";

const CartModal = ({setModal, items, deleteItem, setCart}) => {

  const componentRef = useRef();
  const printHandler = useReactToPrint({content: () => componentRef.current})
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
    () => {
      let amount = 0;

      items.forEach((element) => amount += element.total);
      setTotalPrice(amount);
    }, [totalPrice, items]
  );

  const validateNumber = (value) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  }

  const updatePrice = (idx) => {
    setCart(
      (prevState) => {
        prevState[idx]['total'] = prevState[idx]['price'] * prevState[idx]['quantity'];
        return [...prevState];
      }
    );
  }

  const changeQtyHandler = (op, idx, event) => {
    if (op === "add") {
      setCart(
        (prevState) => {
          prevState[idx]['quantity'] += 1;
          return [...prevState];
        }
      );
    }
    else if (op === "sub") {
      if (!validateNumber(items[idx]['quantity'] - 2)) return;

      setCart(
        (prevState) => {
          prevState[idx]['quantity'] -= 1;
          return [...prevState];
        }
      );
    }
    else {
      if (!event.target.value) return;
      if (!validateNumber(event.target.value)) return;

      setCart(
        (prevState) => {
          prevState[idx]['quantity'] = parseInt(event.target.value);
          return [...prevState];
        }
      );
    }
    updatePrice(idx);
  }

  const deleteHandler = (id) => {
    setCart([...items.filter((value) => value.id !== id)]);
    deleteItem(id);
  }

  return (
    <React.Fragment> {
      ReactDOM.createPortal(
        <Backdrop setModal={setModal}>
          <motion.div
            className={Styles['cart-modal']}
            onClick={(event) => event.stopPropagation()}
            initial={{y: "-100vh"}} animate={{y: 0}} exit={{y: "100vh"}}
            transition={{type: "just", damping: 15}}>
            <CartTable ref={componentRef}
              cartItems={items}
              changeQtyHandler={changeQtyHandler}
              deleteHandler={deleteHandler}
              printHandler={printHandler}
              totalPrice={totalPrice}
            />
          </motion.div>
        </Backdrop>,
        document.getElementById('cart-modal')
      )
    }
    </React.Fragment>
  );
}

export default CartModal;

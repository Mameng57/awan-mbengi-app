import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./Styles/CartModal.module.css";
import ListItem from "./ListItem";
import { useReactToPrint } from "react-to-print";

const Backdrop = ({children, setModal}) => {

  return (
    <motion.div className={Styles.backdrop}
      onClick={() => setModal(false)}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      {children}
    </motion.div>
  );
}

const CartModal = ({setModal, items, subCounter, deleteItem}) => {

  const componentRef = useRef();
  const printHandler = useReactToPrint({content: () => componentRef.current})
  const [cartItems, setCartItems] = useState([...items]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(
    () => {
      setTotalPrice(
        () => {
          let amount = 0;

          cartItems.forEach(
            (element) => {
              amount += element.total;
            }
          );

          return amount;
        }
      );
    }, [totalPrice, cartItems]
  );

  const updatePrice = (idx) => {
    setCartItems(
      (prevState) => {
        const array = [...prevState];
        array[idx]['total'] = array[idx]['price'] * array[idx]['quantity'];

        return array;
      }
    );
  }

  const validateNumber = (value) => {
    const regex = /^[0-9]+$/;
    return regex.test(value);
  }

  const addQuantity = (idx) => {
    setCartItems(
      (prevState) => {
        const array = [...prevState];
        array[idx]['quantity'] += 1;

        return array;
      }
    );
    updatePrice(idx);
  }

  const subQuantity = (idx) => {
    if (!validateNumber(cartItems[idx]['quantity'] - 2)) return;

    setCartItems(
      (prevState) => {
        const array = [...prevState];
        array[idx]['quantity'] -= 1;

        return array;
      }
    );
    updatePrice(idx);
  }

  const changeQuantityHandler = (event, idx) => {
    if (!event.target.value) return;
    if (!validateNumber(event.target.value)) return;

    setCartItems(
      (prevState) => {
        const array = [...prevState];
        array[idx]['quantity'] = parseInt(event.target.value);

        return array;
      }
    );
    updatePrice(idx);
  }

  const deleteHandler = (id) => {
    setCartItems([...cartItems.filter((value) => value.id !== id)])
    deleteItem(id);
    subCounter();
  }

  const listIsEmpty = () => {
    if (cartItems.length === 0) {
      return (
        <div className={Styles.empty}>
          <div className={Styles['awan-mbengi']} />
          <h4>Silahkan pilih menu, untuk ditambahkan ke Keranjang...</h4>
        </div>
      );
    }

    return (
      <div className={Styles.container} ref={componentRef}>
        <div className={Styles.header}>
          <div className={Styles.header__column}><h3>Menu</h3></div>
          <div className={Styles.header__column}><h3>Jumlah</h3></div>
          <div className={Styles.header__column}><h3>Harga</h3></div>
          <div className={Styles.header__column}><h3>Hapus</h3></div>
        </div>
        <div className={Styles.items}> 
        <AnimatePresence initial={false}> {
          cartItems.map(
            (item, idx) => (
              <ListItem key={item.id}
                item={item} idx={idx} cartItems={cartItems}
                changeQuantity={changeQuantityHandler}
                addQuantity={addQuantity} subQuantity={subQuantity} deleteHandler={deleteHandler}
              />
            )
          )
        }
        </AnimatePresence>
        </div>
        <div className={Styles.footer}>
          <div className={Styles.total}>
            <span>TOTAL</span>
            <h3>{totalPrice}</h3>
          </div>
          <div className={Styles.order}>
            <div className={Styles.reservation} onClick={printHandler}>
              Reservasi
            </div>
            <div className={Styles.checkout}>
              Checkout
            </div>
          </div>
         
        </div>
      </div>
    );
  }

  return (
    <Backdrop setModal={setModal}>
      <motion.div
        className={Styles['cart-modal']}
        onClick={(event) => event.stopPropagation()}
        initial={{y: "-100vh"}} animate={{y: 0}} exit={{y: "100vh"}}
        transition={{type: "just", damping: 15}}>
        { listIsEmpty() }
      </motion.div>
    </Backdrop>
  );
}

export default CartModal;

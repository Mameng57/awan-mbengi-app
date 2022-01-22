import React from "react";
import { AnimatePresence } from "framer-motion";
import ListItem from "./ListItem";
import Styles from "./Styles/CartTable.module.css";

const CartTable = React.forwardRef(

  (props, ref) => {
    if (props.cartItems.length === 0) {
      return (
        <div className={Styles.empty}>
          <div className={Styles['awan-mbengi']} />
          <h4>Silahkan pilih menu, untuk ditambahkan ke Keranjang...</h4>
        </div>
      );
    }

    return(
      <div className={Styles.container} ref={ref}>
        <div className={Styles.header}>
          <div className={Styles.header__column}><h3>Menu</h3></div>
          <div className={Styles.header__column}><h3>Jumlah</h3></div>
          <div className={Styles.header__column}><h3>Harga</h3></div>
          <div className={Styles.header__column}><h3>Hapus</h3></div>
        </div>
        <div className={Styles.items}>
          <AnimatePresence initial={false}> {
            props.cartItems.map(
              (item, idx) => (
                <ListItem key={item.id}
                  item={item} idx={idx} cartItems={props.cartItems}
                  changeQty={props.changeQtyHandler}
                  deleteHandler={props.deleteHandler}
                />
              )
            )
          }
          </AnimatePresence>
        </div>
        <div className={Styles.footer}>
          <div className={Styles.total}>
            <span>TOTAL</span>
            <h3>{props.totalPrice}</h3>
          </div>
          <div className={Styles.order}>
            <div className={Styles.reservation} onClick={props.printHandler}>
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
)

export default CartTable;

import { MDBBtn } from "mdbreact";
import React from "react";
import styles from "./styles/Cart.module.css";


import CartItem from "./CartItem";

const Cart = (products) => {
 
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        <CartItem item={products[0]} />
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: (1 items)</span>
          <span>$ 10.00</span>
        </div>
        <MDBBtn   className=" teal accent-4 ml-auto mr-auto " position="absolute">Proceed To Checkout</MDBBtn>
      </div>
    </div>
  );
};

export default Cart;
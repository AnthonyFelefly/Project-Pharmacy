import React,{useState,useEffect} from "react";
import styles from "./styles/CartItem.module.css";
import { baseUrl } from "../shared/baseUrl";

const CartItem = ({itemData,rmFromCart,adjust_qty}) => {
  const [input,setInput]=useState(itemData.quantity)
  const onChangeHandler=(e)=>{
    setInput(e.target.value);
    adjust_qty(itemData.id,e.target.value);

  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        style={{width:"200px",height:"auto"}}
        src={baseUrl+itemData.image}
        alt={itemData.name}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{itemData.name}</p>
        <p className={styles.details__desc}>{itemData.description}</p>
        <p className={styles.details__price}>{itemData.quantity*itemData.price} $</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={itemData.quantity} onChange={onChangeHandler}/>
        </div>
        <button onClick={()=>rmFromCart(itemData.id)} className={styles.actions__deleteItemBtn}>
          <span className="fas fa-dumpster"></span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
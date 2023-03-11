import { useContext } from "react";
import ClothesContext from "../store/createContext";
import style from "./cart.module.css";
import { createPortal } from "react-dom";
import Modal from "../UI/Modal";
const Cart = (props) => {
const gettingCartInfo = useContext(ClothesContext)
console.log(gettingCartInfo.items[0].amount)
  return <Modal>
      <div className={style.center}>
        <div className={style.grid}>
          <div className={style.img}></div>
          <div className={style.description}><h1>{gettingCartInfo.items[0].amount}</h1></div>
          <div className={style.price}><button onClick={props.onCancel} type="submit">Cancel</button></div>
        </div>
    </div>
 </Modal>
};
export default Cart;

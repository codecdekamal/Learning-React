import Style from "./shopping.module.css";
import ShopingFormItem from "./shopingformItem";
import ClothesContext from "../store/createContext";
import { useContext } from "react";
const AvailableShopping = (props) => {
  const ContextInfo =   useContext(ClothesContext)
 const amountEntered = (amount) =>{
    ContextInfo.addItem({
      src:props.src,
      id:props.id,
      amount:amount,
      price:props.price,
      description:props.description
    })
    ContextInfo.removeItem({
      id:props.id
    })
 }
  return (
      <div key={props.id} className={Style.gridColumn}>
      <div className={Style.image}>
        <img width="200" height="300" src={props.src} alt={props.description} />
      </div>
      <div className={Style.descriptions}>{props.name}</div>
      <div className={Style.descriptions}>{props.description}</div>
      <div className={Style.price}>
      <div>{` $${props.price}`}</div>
        <ShopingFormItem
        onAddtoCart={amountEntered}      
        />
        </div>
    </div>
  );
};
export default AvailableShopping;

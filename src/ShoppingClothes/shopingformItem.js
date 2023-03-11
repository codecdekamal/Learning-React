import React from "react";
import Style from "./shopping.module.css";
import { useState } from "react";
import { useRef } from "react";
export default function ShopingFormItem(props) {
  const [initialValue, setValue] = useState(0);
  const ref = useRef(0);
  const OnClickEventHandler = () => {
    if (initialValue < 6) {
      setValue(initialValue + 1);
      // console.log(initialValue)
    }
  };
  const OnMinusEventHandler = () => {
    if (initialValue > 0) {
      setValue(initialValue - 1);
      // console.log(initialValue)
    }
  };
  const submitEventHandler = (e) => {
    e.preventDefault();
    props.onAddtoCart(initialValue);
  };
  return (
    <form className={Style.cart} onSubmit={submitEventHandler}>
      <button onClick={OnClickEventHandler}>+</button>
      <div>{initialValue}</div>
      <button onClick={OnMinusEventHandler}>−</button>
    </form>
  );
}

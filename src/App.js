import Navbar from "./Navbar/Navbar";
import ShoppingItem from "./ShoppingClothes/ShoppingItems";
import Cart from "./cart/cart";
import { useState } from "react";
import ClothProvider from "./store/provideContext";
const App = () => {
  const handlingEvent = () =>{
   setshowCart(true)
  }
  const handlingCancelEvent = () =>{
    setshowCart(false)
  }
  const [showCart, setshowCart] = useState(false)
  return (<ClothProvider>
     {showCart && <Cart onCancel={handlingCancelEvent} />} 
     
    <main> 
      <Navbar onClick={handlingEvent}/>
          </main>  
      <ShoppingItem />
      </ClothProvider>
  )
  
};
export default App;

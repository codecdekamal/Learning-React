import { createContext } from "react";
const ClothesContext = createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
});

export default ClothesContext;
 
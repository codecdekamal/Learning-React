import ClothesContext from "./createContext";
import { useReducer } from "react";
const InitialCartState = {
    items:[],
    totalAmount:0
} 
const cartReducer = (state,action)=>{
 if(action.type==="Add"){
        const totalAmountOfCart = state.totalAmount + action.item.price*action.item.amount;
        const indexOfExistingitems =  state.items.findIndex(element=>element.id===action.item.id)
        const existingCartItem = state.items[indexOfExistingitems]
        let updatedItems;
        if(existingCartItem){
        const updatedItem = action.item;
        updatedItems = [...state.items];
        updatedItems[indexOfExistingitems] = updatedItem;
     //   console.log(updatedItems)
      return{
        items:updatedItems,
        totalAmount:totalAmountOfCart,
      }
   }
    return {
        items:state.items.concat(action.item),
        totalAmount:totalAmountOfCart,
    }
 }
}

 const ClothProvider = (props) =>{
 const [currentState,dispatchValue] = useReducer(cartReducer,InitialCartState)
 //console.log(currentState)
 const addItemEvent = (item)=>{
 dispatchValue({type:"Add", item:item})
// console.log(item)   
}
const removeItemEvent = (id)=>{}
const ctx = {
    items:currentState.items,
    totalAmount:currentState.totalAmount,
    addItem:addItemEvent,
    removeItem:removeItemEvent
}
return(
    <ClothesContext.Provider value={ctx}>
    {props.children}
   </ClothesContext.Provider>
)
}
export default ClothProvider;
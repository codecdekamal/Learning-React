import { createPortal } from "react-dom"
const domNode = document.getElementById("overLay");
export default function Modal(props) {
  return (
    <>
        {createPortal(props.children, domNode)}  
    </>
  )
}



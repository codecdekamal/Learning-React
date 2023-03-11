import style from "./background.module.css"
const Background = (props)=>{
    return (
   <div className={style.color}>
    {props.children}
   </div>
    )
}
export default Background;
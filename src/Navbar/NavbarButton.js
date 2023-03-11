import CartIcon from "../cart/cartIcon";
import styles from "./Navbar.module.css";
const NavbarButton = (props) => {
  return (
    <button className={styles.button} type="submit" onClick={props.clickedInfo}>
      <span className={styles.addToCart}>
        <CartIcon></CartIcon>
      </span>
      <span className={styles.addToCart}>Add to cart</span>
      <span className={styles.addToCart}>0</span>
    </button>
  );
};
export default NavbarButton;

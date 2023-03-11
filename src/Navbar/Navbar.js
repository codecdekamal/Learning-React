import styles from "./Navbar.module.css";
import NavbarButton from "./NavbarButton";
const Navbar = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.logo} >Chorr-Bazzar</div>
      <NavbarButton clickedInfo={props.onClick}></NavbarButton>
    </div>
  );
};
export default Navbar;

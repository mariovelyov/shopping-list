import classes from "./index.module.css";
import logo from "../../assets/app_logo.png";

function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Shopping List Logo" className={classes.image} />
      <h1 className={classes.h1}>Shopping List</h1>
    </header>
  );
}

export default Header;

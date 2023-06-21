import classes from "./index.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img
        src="/images/app_logo.png"
        alt="Shopping List Logo"
        className={classes.image}
      />
      <h1 className={classes.h1}>Shopping List</h1>
    </header>
  );
}

export default Header;

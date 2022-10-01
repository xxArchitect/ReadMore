import classes from "./TopBar.module.css";

export default function TopBar() {
  return (
    <nav className={classes.topBar}>
      <h1 className={classes.logo}>ReadMore.</h1>
      <div className={classes.buttons}>
        <button>RATINGS</button>
        <div className={classes.circle} />
        <button>SAVED</button>
        <div className={classes.circle} />
        <button>LOG OUT</button>
      </div>
    </nav>
  );
}

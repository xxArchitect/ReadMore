import classes from "./TopBar.module.css";
import { Fragment } from "react";

export default function TopBar() {
  return (
    <Fragment>
      <div className={classes.logoWrapper}>
        <h1 className={classes.logo}>ReadMore.</h1>
      </div>
      <div className={classes.buttons}>
        <button>RATINGS</button>
        <div className={classes.circle} />
        <button>SAVED</button>
        <div className={classes.circle} />
        <button>LOG OUT</button>
      </div>
    </Fragment>
  );
}

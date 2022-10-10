import TopBar from "../../TopBar";
import classes from "./Layout.module.css";

/**
 * Renders main component which contains the top bar.
 * */
export default function Layout(props) {
  return (
    <main className={classes.mainContent}>
      <TopBar />
      {props.children}
    </main>
  );
}

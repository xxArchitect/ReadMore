import TopBar from "../../TopBar";
import classes from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={classes.mainContent}>
      <TopBar />
      {children}
    </main>
  );
}

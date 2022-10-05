import classes from "./LandingSection.module.css";

export default function LandingSection({ children }) {
  return <section className={classes.landingPage}>{children}</section>;
}

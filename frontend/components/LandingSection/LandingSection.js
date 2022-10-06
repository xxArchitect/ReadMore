import classes from "./LandingSection.module.css";

export default function LandingSection(props) {
  return <section className={classes.landingPage}>{props.children}</section>;
}

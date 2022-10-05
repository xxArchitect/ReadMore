import { forwardRef } from "react";
import classes from "./TopRatedBooksSection.module.css";

const TopRatedBooksSection = forwardRef((props, ref) => {
  return (
    <section className={classes.topRatedBooksPage} ref={ref}>
      {props.children}
    </section>
  );
});

export default TopRatedBooksSection;

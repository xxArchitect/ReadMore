import { forwardRef } from "react";
import classes from "./TopRatedBooksSection.module.css";

function TopRatedBooksSection(props, ref) {
  return (
    <section className={classes.topRatedBooksPage} ref={ref}>
      {props.children}
    </section>
  );
}

export default forwardRef(TopRatedBooksSection);

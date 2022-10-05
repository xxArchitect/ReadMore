import { forwardRef } from "react";
import classes from "./SearchBar.module.css";
import MagnifyingGlass from "../Icons/MagnifyingGlass";

const SearchBar = forwardRef((props, ref) => {
  const searchBarClass =
    props.intersection === "Landing"
      ? classes.searchBarLandingSection
      : props.intersection === "TopRatedBooks"
      ? classes.searchBarTopRatedBooksSection
      : classes.searchBarSearchBookByGenre;

  return (
    <div
      className={classes.searchBarWrapper}
      style={{
        height: props.intersection === "Landing" ? "8.5%" : "6.5%",
        position: props.position.position,
        top: props.position.top,
      }}
    >
      <div className={`${classes.searchBar} ${searchBarClass}`} ref={ref}>
        <MagnifyingGlass />
        <p>Search books...</p>
      </div>
    </div>
  );
});

export default SearchBar;

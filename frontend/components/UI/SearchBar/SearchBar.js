import { forwardRef } from "react";
import classes from "./SearchBar.module.css";
import MagnifyingGlass from "../Icons/MagnifyingGlass";

function SearchBar(props, ref) {
  let searchBarClass;

  switch (props.intersection) {
    case "Landing":
      searchBarClass = classes.landing;
      break;
    case "TopRatedBooks":
      searchBarClass = classes.topRatedBooks;
      break;
    case "SearchBooksByGenre":
      searchBarClass = classes.searchBooksByGenre;
      break;
    default:
      searchBarClass = classes.landing;
  }

  const searchBarWrapperClass =
    props.intersection === "Landing" ? classes.landing : "";

  return (
    <div
      className={`${classes.searchBarWrapper} ${searchBarWrapperClass}`}
      style={{
        position: props.position.position,
        top: props.position.top,
      }}
    >
      <div className={`${classes.searchBar} ${searchBarClass}`} ref={ref}>
        <form>
          <MagnifyingGlass />
          <input placeholder={"Search books..."} id={"book-name"} />
        </form>
      </div>
    </div>
  );
}

export default forwardRef(SearchBar);

import classes from "./SearchBar.module.css";
import MagnifyingGlass from "../Icons/MagnifyingGlass";

export default function SearchBar() {
  return (
    <div className={classes.searchBarOverlay}>
      <div className={classes.searchBar}>
        <MagnifyingGlass />
        <p>Search books...</p>
      </div>
    </div>
  );
}

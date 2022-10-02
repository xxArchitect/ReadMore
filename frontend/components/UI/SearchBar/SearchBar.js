import classes from "./SearchBar.module.css";
import MagnifyingGlass from "../Icons/MagnifyingGlass";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const searchBarRef = useRef();
  const [searchBarBottom, setSearchBarBottom] = useState(null);

  const handleScroll = () => {
    console.log(searchBarRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={classes.searchBarOverlay}>
      <div className={classes.searchBar} ref={searchBarRef}>
        <MagnifyingGlass />
        <p>Search books...</p>
      </div>
    </div>
  );
}

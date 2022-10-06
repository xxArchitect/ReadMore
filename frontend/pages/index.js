import { useRef, useState } from "react";
import LandingSection from "../components/LandingSection";
import TopRatedBooksSection from "../components/TopRatedBooksSection";
import BookSearchByGenreSection from "../components/BookSearchByGenreSection";
import SearchBar from "../components/UI/SearchBar";
import { InView } from "react-intersection-observer";

export default function HomePage() {
  // Create references to search bar and top-rated books section
  const searchBarRef = useRef();
  const topRatedBooksSectionRef = useRef();

  // Modify search bar position
  const [searchBarPos, setSearchBarPos] = useState({
    position: "fixed",
    top: "50%",
  });

  // Control which section the search bar is intersecting
  const [searchBarIntersect, setSearchBarIntersect] = useState("Landing");

  const setTopRatedBooksIntersect = (inView, entry) => {
    if (inView) {
      const topRatedBooksSectionCoords =
        topRatedBooksSectionRef.current.getBoundingClientRect();

      // This condition checks if the top-rated books section is coming into view
      if (topRatedBooksSectionCoords.top >= 0) {
        if (entry.intersectionRatio > 0.55) {
          // Fix search bar relative to the top-rated books section
          setSearchBarIntersect("TopRatedBooks");
          setSearchBarPos({ position: "absolute", top: "5%" });
        } else {
          // Make search appear in the center of the page on the landing section
          setSearchBarIntersect("Landing");
          setSearchBarPos({ position: "fixed", top: "50%" });
        }
      } else {
        // Fix search bar position if the last section is coming into view
        setSearchBarPos({ position: "fixed", top: "5%" });
      }
    }
  };

  const setSearchBooksByGenreIntersect = (inView, entry) => {
    if (inView) {
      // Change styling depending on which section is coming into view
      if (entry.intersectionRatio >= 0.9) {
        setSearchBarIntersect("SearchBooksByGenre");
      } else {
        setSearchBarIntersect("TopRatedBooks");
      }
    }
  };

  return (
    <div>
      <LandingSection />
      <InView
        as={"div"}
        onChange={setTopRatedBooksIntersect}
        threshold={[...range(0.45, 11, 0.01), ...range(0.95, 6, 0.01)]}
      >
        <TopRatedBooksSection ref={topRatedBooksSectionRef}>
          <SearchBar
            ref={searchBarRef}
            intersection={searchBarIntersect}
            position={searchBarPos}
          />
        </TopRatedBooksSection>
      </InView>
      <InView
        as={"div"}
        onChange={setSearchBooksByGenreIntersect}
        threshold={range(0, 11, 0.1)}
      >
        <BookSearchByGenreSection />
      </InView>
    </div>
  );
}

/**
 * This helper function creates an array containing a specified range of numbers.
 * */
function range(initialValue, range, step = 1) {
  return Array.from({ length: range }, (_, i) => i * step + initialValue);
}

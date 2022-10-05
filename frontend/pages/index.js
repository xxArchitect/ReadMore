// read-more.com
import { useEffect, useRef, useState } from "react";
import LandingSection from "../components/LandingSection";
import TopRatedBooksSection from "../components/TopRatedBooksSection";
import BookSearchByGenreSection from "../components/BookSearchByGenreSection";
import SearchBar from "../components/UI/SearchBar";
import topRatedBooksSection from "../components/TopRatedBooksSection";
import { InView } from "react-intersection-observer";

export default function HomePage() {
  const searchBarRef = useRef();
  const [searchBarPos, setSearchBarPos] = useState({
    position: "fixed",
    top: "50%",
  });
  const [searchBarIntersect, setSearchBarIntersect] = useState("Landing");

  const landingSectionRef = useRef();
  const topRatedBooksSectionRef = useRef();
  const bookSearchByGenreSectionRef = useRef();

  const [entry, setEntry] = useState({});

  const setTopRatedBooksIntersect = (inView, entry) => {
    if (inView) {
      const topRatedBooksSectionCoords =
        topRatedBooksSectionRef.current.getBoundingClientRect();
      if (topRatedBooksSectionCoords.top >= 0) {
        if (entry.intersectionRatio > 0.55) {
          setSearchBarIntersect("TopRatedBooks");
          setSearchBarPos({ position: "absolute", top: "5%" });
        } else {
          setSearchBarIntersect("Landing");
          setSearchBarPos({ position: "fixed", top: "50%" });
        }
      } else {
        setSearchBarPos({ position: "fixed", top: "5%" });
      }
    }
  };

  const setSearchBooksByGenreIntersect = (inView, entry) => {
    if (inView) {
      if (entry.intersectionRatio >= 0.9) {
        setSearchBarIntersect("SearchBooksByGenre");
      } else {
        setSearchBarIntersect("TopRatedBooks");
      }
    }
  };

  // const handleScroll = () => {
  //   const searchBarCoords = searchBarRef.current.getBoundingClientRect();
  //   const topRatedBooksCoords =
  //     topRatedBooksSectionRef.current.getBoundingClientRect();
  //
  //   if (searchBarIntersect === "TopRatedBooks") {
  //     if (searchBarTop === null) {
  //       if (searchBarCoords.top >= topRatedBooksCoords.top + 60) {
  //         setSearchBarTop(60);
  //       }
  //     }
  //   } else {
  //     if (searchBarCoords.bottom > topRatedBooksCoords.top) {
  //       setSearchBarIntersect("TopRatedBooks");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  return (
    <div>
      <LandingSection />
      <InView
        as={"div"}
        onChange={setTopRatedBooksIntersect}
        threshold={[
          0.45, 0.46, 0.47, 0.48, 0.49, 0.5, 0.51, 0.52, 0.53, 0.54, 0.55, 0.95,
          0.96, 0.97, 0.98, 0.99, 1,
        ]}
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
        threshold={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}
      >
        <BookSearchByGenreSection />
      </InView>
    </div>
  );
}

/*
* 		console.log("Expanded = ", expandedSearchBarCoords);
				setSearchBarIntersect("TopRatedBooks");
				setSearchBarStatus((prevState) => ({
					...prevState,
					collapsing: true,
				}));
				setSearchBarStatus((prevState) => ({
					...prevState,
					expanded: false,
				}));
				setSearchBarStatus((prevState) => ({
					...prevState,
					collapsed: true,
				}));
				const collapsedSearchBarCoords =
					searchBarRef.current.getBoundingClientRect();
				console.log("Collapsed = ", collapsedSearchBarCoords);

				setSearchBarStatus((prevState) => ({
					...prevState,
					transition: true,
				}));

				var invertedTop =
					expandedSearchBarCoords.top - collapsedSearchBarCoords.top;
				var invertedLeft =
					expandedSearchBarCoords.left - collapsedSearchBarCoords.left;

				var invertedWidth =
					expandedSearchBarCoords.width / collapsedSearchBarCoords.width;
				var invertedHeight =
					expandedSearchBarCoords.height / collapsedSearchBarCoords.height;

				console.log(invertedTop, invertedLeft, invertedHeight, invertedWidth);

				setSearchBarStatus((prevState) => ({
					...prevState,
					transform:
						"translateX(" +
						invertedLeft +
						"px) translateY(" +
						invertedTop +
						"px) translateZ(0) scaleX(" +
						invertedWidth +
						") scaleY(" +
						invertedHeight +
						")",
				}));

				searchBarRef.current.addEventListener(
					"transitionend",
					function handler() {
						setSearchBarStatus((prevState) => ({
							...prevState,
							transform: null,
							collapsing: false,
							collapsed: true,
							expanded: false,
						}));

						searchBarRef.current.removeEventListener("transitionend", handler);
					}
				);
* */

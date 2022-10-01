// read-more.com
import { Fragment } from "react";
import LandingPage from "../components/LandingPage";
import TopRatedBooksPage from "../components/TopRatedBooksPage";
import BookSearchByGenre from "../components/BookSearchByGenre";
import SearchBar from "../components/UI/SearchBar";

export default function HomePage() {
  return (
    <Fragment>
      <SearchBar />
      <LandingPage />
      <TopRatedBooksPage />
      <BookSearchByGenre />
    </Fragment>
  );
}

// read-more.com
import { Fragment } from "react";
import LandingPage from "../components/LandingPage";
import TopRatedBooksPage from "../components/TopRatedBooksPage";
import BookSearchByGenre from "../components/BookSearchByGenre";

export default function HomePage() {
  return (
    <Fragment>
      <LandingPage />
      <TopRatedBooksPage />
      <BookSearchByGenre />
    </Fragment>
  );
}

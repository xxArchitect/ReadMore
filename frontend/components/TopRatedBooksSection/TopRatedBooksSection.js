import { forwardRef, useEffect, useRef, useState } from "react";
import classes from "./TopRatedBooksSection.module.css";
import BookCover from "../UI/BookCover";

function TopRatedBooksSection(props, ref) {
  const bookContainerRef = useRef();
  const [bookLinkWidth, setBookLinkWidth] = useState("100%");

  const ReadMoreLink = (
    <div
      className={classes.bookLink}
      style={{
        width: bookLinkWidth,
      }}
    >
      <div className={classes.leftLine} />
      <p className={classes.link}>Read more</p>
      <div className={classes.rightLine} />
    </div>
  );

  useEffect(() => {
    // Set width of the underline dynamically based on the width of the book cover
    const bookContainerHeight =
      bookContainerRef.current.getBoundingClientRect().height;
    setBookLinkWidth(`${bookContainerHeight * 0.75}px`);
  }, []);

  // Apply different styling to the book container depending on the current section
  const bookContainerClasses = [
    classes.bookContainer,
    props.intersection !== "Landing" ? classes.slide : "",
  ];

  return (
    <section className={classes.topRatedBooksPage} ref={ref}>
      <h1 className={[classes.sign, classes.bigSign].join(" ")}>
        Top Rated Books
      </h1>
      <div className={classes.topRatedBooksContainer}>
        <div className={bookContainerClasses.join(" ")} ref={bookContainerRef}>
          <BookCover
            src={`/sample_book_covers/top_book_cover_1.webp`}
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
            intersection={props.intersection}
          />
          {ReadMoreLink}
        </div>
        <div className={bookContainerClasses.join(" ")}>
          <BookCover
            src={`/sample_book_covers/top_book_cover_2.webp`}
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
            intersection={props.intersection}
          />
          {ReadMoreLink}
        </div>
        <div className={bookContainerClasses.join(" ")}>
          <BookCover
            src={`/sample_book_covers/top_book_cover_3.webp`}
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
            intersection={props.intersection}
          />
          {ReadMoreLink}
        </div>
      </div>
      {props.children}
      <h2 className={[classes.sign, classes.smallSign].join(" ")}>
        by thousands of users
      </h2>
    </section>
  );
}

export default forwardRef(TopRatedBooksSection);

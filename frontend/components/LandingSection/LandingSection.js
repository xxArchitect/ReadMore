import { memo } from "react";
import classes from "./LandingSection.module.css";
import BookCover from "../UI/BookCover";

// Array containing paths to all displayed images
const imageNames = Array.from({ length: 21 }).map(
  (_, index) => `/sample_book_covers/sample_book_cover_${index}.webp`
);

function LandingSection(props) {
  // Create <Image /> element for each displayed image
  const images = imageNames.map((imageName) => (
    <BookCover src={imageName} key={Math.random()} />
  ));

  return (
    <section className={classes.landingPage}>
      <div className={[classes.bookRow, classes.leftScroll1].join(" ")}>
        {Array.from({ length: 3 }).map(() => images.slice(0, 7))}
      </div>
      <div className={[classes.bookRow, classes.rightScroll].join(" ")}>
        {Array.from({ length: 3 }).map(() => images.slice(7, 14))}
      </div>
      <div className={[classes.bookRow, classes.leftScroll2].join(" ")}>
        {Array.from({ length: 3 }).map(() => images.slice(14))}
      </div>

      {props.children}
    </section>
  );
}

export default memo(LandingSection);

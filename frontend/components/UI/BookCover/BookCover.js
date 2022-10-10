import Image from "next/image";
import classes from "./BookCover.module.css";

export default function BookCover(props) {
  return (
    <div className={classes.bookCoverContainer}>
      <Image
        src={props.src}
        layout={"fill"}
        objectFit={"contain"}
        alt={"Sample book cover"}
      />
    </div>
  );
}

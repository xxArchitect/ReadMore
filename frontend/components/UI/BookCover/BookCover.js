import Image from "next/image";
import classes from "./BookCover.module.css";

export default function BookCover({
  imageStyle = {},
  containerStyle = {},
  src,
  intersection = "Landing",
  children,
}) {
  return (
    <div
      className={[
        classes.bookCoverContainer,
        intersection === "TopRatedBooks" ? classes.shadow : "",
      ].join(" ")}
      style={containerStyle}
    >
      <Image
        src={src}
        layout={"fill"}
        objectFit={"contain"}
        alt={"Sample book cover"}
        style={imageStyle}
      />
      {children}
    </div>
  );
}

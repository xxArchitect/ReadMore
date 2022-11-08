import classes from "./BookSearchByGenreSection.module.css";

export default function BookSearchByGenreSection() {
  return (
    <section className={classes.bookSearchByGenre}>
      <h1 className={[classes.sign, classes.bigSign].join(" ")}>
        Select books by genres
      </h1>
      <div className={classes.bookGenresContainer}>
        <div className={classes.column}>
          <p>Fiction</p>
          <p>Humour</p>
          <p>Mystery & Thriller</p>
          <p>Memoir & Biography</p>
        </div>
        <div className={classes.column}>
          <p>Novel</p>
          <p>Poetry</p>
          <p>Nonfiction</p>
          <p>Historical Fiction</p>
        </div>
        <div className={classes.column}>
          <div
            style={{
              width: "75%",
            }}
          >
            <p className={classes.lastColumnText}>History & Biography</p>
          </div>
          <div
            style={{
              width: "92.5%",
            }}
          >
            <p className={classes.lastColumnText}>Graphic Novels & Comics</p>
          </div>

          <div className={classes.smallRow}>
            <div
              style={{
                width: "35%",
                textAlign: "center",
              }}
            >
              <p className={classes.lastColumnText}>Fantasy</p>
            </div>
            <div
              style={{
                textAlign: "center",
                width: "65%",
              }}
            >
              <p className={classes.lastColumnText}>Horror</p>
            </div>
          </div>
          <div className={classes.smallRow}>
            <div
              style={{
                textAlign: "center",
                width: "35%",
              }}
            >
              <p className={classes.lastColumnText}>Romance</p>
            </div>
            <div
              style={{
                width: "65%",
                textAlign: "center",
              }}
            >
              <p className={classes.lastColumnText}>Science Fiction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

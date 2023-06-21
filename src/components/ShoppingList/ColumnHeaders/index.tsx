// Styles
import classes from "../index.module.css";

// Constants
import { COLUMN_HEADERS } from "../../../constants";

function ColumnHeaders() {
  return (
    <>
      <section className={classes.headers}>
        {COLUMN_HEADERS.map((header) => (
          <span key={header} className={classes.headers_item}>
            {header}
          </span>
        ))}
      </section>
      <hr className={classes.hr} />
    </>
  );
}

export default ColumnHeaders;

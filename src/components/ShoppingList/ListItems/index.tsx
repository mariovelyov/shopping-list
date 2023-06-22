import { useSelector } from "react-redux";

// Models
import ListItem from "./ListItem";

// Components
import NoRecordsFound from "./NoRecordsFound";

// Styles
import classes from "../index.module.css";

// Store
import { GlobalStateType } from "../../../store";

function ListItems() {
  const items = useSelector((state: GlobalStateType) => state.products);

  if (!items?.length) {
    return <NoRecordsFound />;
  }

  return (
    <ul className={classes.shopping_list}>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ListItems;

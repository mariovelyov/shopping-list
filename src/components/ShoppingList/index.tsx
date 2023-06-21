// Components
import AddNewProducts from "./AddNewProducts";
import ColumnHeaders from "./ColumnHeaders";
import ListItems from "./ListItems";

function ShoppingList() {
  return (
    <main>
      <ColumnHeaders />
      <ListItems />
      <AddNewProducts />
    </main>
  );
}

export default ShoppingList;

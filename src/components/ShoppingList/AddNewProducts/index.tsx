import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Form from "../Form";

// Styles
import classes from "../index.module.css";

// Store
import { addProduct } from "../../../store/productsSlice";
import { GlobalStateType } from "../../../store";

function AddNewProducts() {
  const [error, setError] = useState("");
  const items = useSelector((state: GlobalStateType) => state.products);
  const dispatch = useDispatch();

  function onAddHandler(name: string | undefined, amount: string | undefined) {
    if (!name) {
      setError("Please enter a product name.");
      return;
    }

    if (items.find((item) => item.name === name)) {
      setError("Product already exists! Please add a new one.");
      return;
    }

    if (!amount) {
      setError("Please enter a product amount.");
      return;
    }

    if (+amount <= 0) {
      setError("Please enter a valid number for product amount.");
      return;
    }

    setError("");
    dispatch(addProduct({ name, amount }));
  }

  return (
    <section className={classes.add_new_products}>
      <section className={classes.headers}>
        <span className={classes.headers_item}>Add New Products</span>
      </section>
      <hr className={classes.hr} />
      <Form actionHandler={onAddHandler} error={error}>
        <button type="submit">Add</button>
      </Form>
    </section>
  );
}

export default AddNewProducts;

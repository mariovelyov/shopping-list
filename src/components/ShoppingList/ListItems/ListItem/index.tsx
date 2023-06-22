import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Models
import { ListItem as ListItemModel } from "../../../../models";

// Store
import { removeProduct, updateProduct } from "../../../../store/productsSlice";

// Components
import Form from "../../Form";

// Styles
import classes from "../../index.module.css";

function ListItem({ item }: { item: ListItemModel }) {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }
  }, [successMessage]);

  function onEditHandler(name: string | undefined, amount: string | undefined) {
    if (!name) {
      setError("Please enter a product name.");
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
    dispatch(updateProduct({ id: item.id, name, amount }));
    setSuccessMessage(`Product ${name} edited successfully.`);
  }

  function onRemoveHandler() {
    dispatch(removeProduct({ id: item.id }));
  }

  return (
    <li>
      <Form item={item} actionHandler={onEditHandler} error={error}>
        <>
          <button type="submit">Save</button>
          <button type="button" onClick={onRemoveHandler}>
            Remove
          </button>
        </>
      </Form>
      {successMessage && <p className={classes.success}>{successMessage}</p>}
    </li>
  );
}

export default ListItem;

import { FormEvent, ReactElement, useState } from "react";

// Styles
import classes from "../index.module.css";

// Models
import { ListItem } from "../../../models";

function Form({
  children,
  error,
  actionHandler,
  item,
}: {
  children: ReactElement;
  error: string;
  actionHandler: (name: string | undefined, amount: string | undefined) => void;
  item?: ListItem;
}) {
  const [name, setName] = useState(item ? item.name : "");
  const [amount, setAmount] = useState(item ? item.amount : "");

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    actionHandler(name, amount);
  }

  return (
    <>
      <form className={classes.shopping_list_item} onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Name"
          className={classes.item_name}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className={classes.item_amount}
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <span className={classes.buttons_container}>{children}</span>
      </form>
      {error && <p className={classes.error}>{error}</p>}
    </>
  );
}

export default Form;

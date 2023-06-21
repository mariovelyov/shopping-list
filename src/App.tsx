// Components
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

// Styles
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <ShoppingList />
    </div>
  );
}

export default App;

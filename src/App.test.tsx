import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";

describe("App component", () => {
  test("renders logo image and header text", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const logoElement = await screen.findByRole("img");
    const headerText = screen.getByText(/Shopping List/i);
    expect(logoElement).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
  });
});

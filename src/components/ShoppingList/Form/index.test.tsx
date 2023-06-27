import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./";

describe("Form", () => {
  const mockActionHandler = jest.fn();
  const mockItem = { id: "1", name: "Item 1", amount: "5" };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Form error="" actionHandler={mockActionHandler} item={mockItem}>
        <button>Submit</button>
      </Form>
    );
  });

  test("renders the form fields with initial values", () => {
    const nameInput = screen.getByPlaceholderText(/Name/i);
    const amountInput = screen.getByPlaceholderText(/Amount/i);

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue("Item 1");

    expect(amountInput).toBeInTheDocument();
    expect(amountInput).toHaveValue(5);
  });

  test("calls the actionHandler with the updated values on form submission", () => {
    const nameInput = screen.getByPlaceholderText(/Name/i);
    const amountInput = screen.getByPlaceholderText(/Amount/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    fireEvent.change(nameInput, { target: { value: "Updated Item" } });
    fireEvent.change(amountInput, { target: { value: "10" } });
    fireEvent.click(submitButton);

    expect(mockActionHandler).toHaveBeenCalledWith("Updated Item", "10");
  });

  test("displays an error message when error prop is provided", () => {
    const errorMessage = "This is an error message";

    render(
      <Form error={errorMessage} actionHandler={mockActionHandler}>
        <button>Submit</button>
      </Form>
    );

    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});

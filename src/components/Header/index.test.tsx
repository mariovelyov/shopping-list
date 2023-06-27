import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  test("renders the header with the correct text and image", () => {
    render(<Header />);

    // Check if the header text is rendered correctly
    const headerText = screen.getByText(/Shopping List/i);
    expect(headerText).toBeInTheDocument();

    // Check if the logo image is rendered correctly
    const logoImage = screen.getByAltText(/Shopping List Logo/i);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "app_logo.png");
  });

  test("has the correct CSS classes", () => {
    render(<Header />);

    // Check if the header element has the expected CSS class
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("header");

    // Check if the image element has the expected CSS class
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveClass("image");

    // Check if the h1 element has the expected CSS class
    const h1Element = screen.getByRole("heading", { level: 1 });
    expect(h1Element).toHaveClass("h1");
  });
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders GitHub is awesome text", () => {
  render(<App />);
  const linkElement = screen.getByText(/GitHub is awesome/i);
  const footer = screen.getByText(/Automate All The Things!!!/i)
  expect(linkElement).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});

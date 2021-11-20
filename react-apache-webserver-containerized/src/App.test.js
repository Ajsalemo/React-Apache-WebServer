import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React-Apache-Webserver-Containerized", () => {
  render(<App />);
  const linkElement = screen.getByText(/React-Apache-Webserver-Containerized/i);
  expect(linkElement).toBeInTheDocument();
});

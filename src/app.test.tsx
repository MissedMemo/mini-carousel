import { render, screen } from "@testing-library/react";
import App from "./app";

test("should display greeting", () => {
  render(<App />);

  const btnHello = screen.getByRole("button", { name: /hello/i });

  expect(btnHello).toBeInTheDocument();
});

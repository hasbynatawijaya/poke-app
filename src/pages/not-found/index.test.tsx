import { render, screen } from "@testing-library/react";

import NotFoundPage from "@/pages/not-found";

describe("Error pages", () => {
  it("Displays error message", () => {
    render(<NotFoundPage />);
    expect(screen.getByRole("heading")).toHaveTextContent("Oops!");
  });
});

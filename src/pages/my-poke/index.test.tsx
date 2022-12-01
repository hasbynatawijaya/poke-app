import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import MyPoke from "@/pages/my-poke";

const Components = () => (
  <BrowserRouter>
    <MyPoke />
  </BrowserRouter>
);

describe("My Poke", () => {
  it("Displays empty message when no pokemon catched", () => {
    render(<Components />);
    expect(screen.getAllByRole("heading")[0]).toHaveTextContent(
      "HI IT SEEMS YOU HAVENT CATCH ANY POKEMON?"
    );
  });
});

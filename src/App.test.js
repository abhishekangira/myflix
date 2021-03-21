import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

it("check proper title on render", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const { queryAllByTitle } = render(<HomePage />);
  const title = queryAllByTitle("Card Title");
  const initialTitle = title[0].innerHTML;
  expect(initialTitle).toBe("Now Showing in Britain");
});

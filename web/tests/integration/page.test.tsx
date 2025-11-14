import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("Page displays Hello World", () => {
  render(<Page></Page>);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

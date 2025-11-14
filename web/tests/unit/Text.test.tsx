import { render, screen } from "@testing-library/react";
import { Text } from "@/components/atoms/Text/Text";

test("Text renders children", () => {
  render(<Text>Hello</Text>);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});

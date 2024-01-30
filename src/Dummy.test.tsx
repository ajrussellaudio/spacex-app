import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { Dummy } from "./Dummy";

const renderComponent = (props: Partial<ComponentProps<typeof Dummy>> = {}) => render(<Dummy {...props} />);

describe("Dummy", () => {
  it("renders correctly", () => {
    renderComponent();
    expect(screen.getByText(/Dummy/)).toBeInTheDocument();
  });
});

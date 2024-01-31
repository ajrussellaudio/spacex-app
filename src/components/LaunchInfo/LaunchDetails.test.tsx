import { render, screen } from "@testing-library/react";
import { ComponentProps } from "react";
import { LaunchDetails } from "./LaunchDetails";
import mockLaunchJson from "../../../tests/mocks/responses/one_launch.json";

const defaultProps: ComponentProps<typeof LaunchDetails> = { ...mockLaunchJson };

const renderComponent = (props: Partial<ComponentProps<typeof LaunchDetails>> = {}) =>
  render(<LaunchDetails {...defaultProps} {...props} />);

describe("LaunchDetails", () => {
  it("renders the launch name as a heading", () => {
    renderComponent();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(mockLaunchJson.name);
  });
});

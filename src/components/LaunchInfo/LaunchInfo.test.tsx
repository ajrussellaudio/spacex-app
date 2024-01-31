import { render, screen, waitFor } from "@testing-library/react";
import { ComponentProps } from "react";
import { LaunchInfo } from "./LaunchInfo";
import { QueryClientWrapper } from "../../../tests/QueryClientWrapper";
import mockLaunchJson from "../../../tests/mocks/responses/one_launch.json";

const defaultProps: ComponentProps<typeof LaunchInfo> = {
  id: "TEST_ID",
};

const renderComponent = (props: Partial<ComponentProps<typeof LaunchInfo>> = {}) =>
  render(<LaunchInfo {...defaultProps} {...props} />, { wrapper: QueryClientWrapper });

describe("LaunchDetails", () => {
  it("displays a loading state", () => {
    renderComponent();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("displays the launch details", async () => {
    renderComponent();
    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });
    expect(screen.getByText(mockLaunchJson.name)).toBeInTheDocument();
  });
});

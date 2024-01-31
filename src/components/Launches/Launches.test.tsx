import { render, screen, waitFor } from "@testing-library/react";
import { ComponentProps } from "react";
import { Launches } from "./Launches";
import { QueryClientWrapper } from "../../../tests/QueryClientWrapper";
import mockAllLaunchesJson from "../../../tests/mocks/responses/all_launches.json";
import { server } from "../../../tests/mocks/server";
import { HttpResponse, http } from "msw";

const renderComponent = (props: Partial<ComponentProps<typeof Launches>> = {}) =>
  render(<Launches {...props} />, { wrapper: QueryClientWrapper });

describe("Launches", () => {
  it("displays a loading state", () => {
    renderComponent();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("displays a table of launches", async () => {
    renderComponent();
    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });
    expect(screen.getAllByRole("row")).toHaveLength(mockAllLaunchesJson.length + 1); // +1 for header row
  });

  it("displays a launch name and time", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launches", () => {
        return HttpResponse.json([
          {
            ...mockAllLaunchesJson[0],
            name: "Death Star",
            date_utc: "1977-05-04T22:30:00.000Z",
          } satisfies Launch,
          ...mockAllLaunchesJson.slice(1),
        ]);
      }),
    );
    renderComponent();
    await waitFor(() => {
      expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    });
    const firstDataRow = screen.getAllByRole("row")[1]; // 0 == header row
    const firstRowCells = firstDataRow.querySelectorAll("[role=cell]");
    expect(firstRowCells[0]).toHaveTextContent("Death Star");
    expect(firstRowCells[1]).toHaveTextContent("May 4th, 1977");
  });
});

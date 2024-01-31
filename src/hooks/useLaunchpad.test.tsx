import { renderHook, waitFor } from "@testing-library/react";
import { useLaunchpad } from "./useLaunchpad";
import mockLaunchpadJson from "../../tests/mocks/responses/one_launchpad.json";
import { server } from "../../tests/mocks/server";
import { HttpResponse, http } from "msw";
import { QueryClientWrapper } from "../../tests/QueryClientWrapper";

describe("useLaunchpad", () => {
  it("returns a single launchpad by ID", async () => {
    const { result } = renderHook(() => useLaunchpad("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    const { data } = result.current;
    expect(data).toEqual({ ...mockLaunchpadJson, id: "TEST_ID" });
    expectTypeOf(data!).toEqualTypeOf<Launchpad>();
  });

  it("handles an API error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launchpads/:id", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );
    const { result } = renderHook(() => useLaunchpad("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });

  it("handles a network error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launchpads/:id", () => {
        return HttpResponse.error();
      }),
    );
    const { result } = renderHook(() => useLaunchpad("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });
});

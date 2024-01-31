import { renderHook, waitFor } from "@testing-library/react";
import { useLaunch } from "./useLaunch";
import mockLaunchJson from "../../tests/mocks/responses/one_launch.json";
import { server } from "../../tests/mocks/server";
import { HttpResponse, http } from "msw";
import { QueryClientWrapper } from "../../tests/QueryClientWrapper";

describe("useLaunch", () => {
  it("returns a single launch by ID", async () => {
    const { result } = renderHook(() => useLaunch("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    const { data } = result.current;
    expect(data).toEqual({ ...mockLaunchJson, id: "TEST_ID" });
    expectTypeOf(data!).toEqualTypeOf<Launch>();
  });

  it("handles an API error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launches/:id", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );
    const { result } = renderHook(() => useLaunch("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });

  it("handles a network error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launches/:id", () => {
        return HttpResponse.error();
      }),
    );
    const { result } = renderHook(() => useLaunch("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });
});

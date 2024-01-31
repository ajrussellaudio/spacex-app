import { renderHook, waitFor } from "@testing-library/react";
import { useLaunches } from "./useLaunches";
import mockAllLaunchesJson from "../../tests/mocks/responses/all_launches.json";
import { server } from "../../tests/mocks/server";
import { HttpResponse, http } from "msw";
import { QueryClientWrapper } from "../../tests/QueryClientWrapper";

describe("useLaunches", () => {
  it("returns a list of all launches", async () => {
    const { result } = renderHook(() => useLaunches(), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    const { data } = result.current;
    expect(data).toEqual(mockAllLaunchesJson);
    expectTypeOf(data!).toEqualTypeOf<Launch[]>();
  });

  it("handles an API error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launches", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );
    const { result } = renderHook(() => useLaunches(), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });

  it("handles a network error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/launches", () => {
        return HttpResponse.error();
      }),
    );
    const { result } = renderHook(() => useLaunches(), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });
});

import { renderHook, waitFor } from "@testing-library/react";
import { usePayload } from "./usePayload";
import mockPayloadJson from "../../tests/mocks/responses/one_payload.json";
import { server } from "../../tests/mocks/server";
import { HttpResponse, http } from "msw";
import { QueryClientWrapper } from "../../tests/QueryClientWrapper";

describe("usePayload", () => {
  it("returns a single payload by ID", async () => {
    const { result } = renderHook(() => usePayload("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });
    const { data } = result.current;
    expect(data).toEqual({ ...mockPayloadJson, id: "TEST_ID" });
    expectTypeOf(data!).toEqualTypeOf<Payload>();
  });

  it("handles an API error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/payloads/:id", () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );
    const { result } = renderHook(() => usePayload("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });

  it("handles a network error", async () => {
    server.use(
      http.get("https://api.spacexdata.com/v4/payloads/:id", () => {
        return HttpResponse.error();
      }),
    );
    const { result } = renderHook(() => usePayload("TEST_ID"), { wrapper: QueryClientWrapper });
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
    expect(result.current.error).toBeDefined();
    expect(result.current.data).not.toBeDefined();
  });
});

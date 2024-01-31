import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../lib/ApiClient";

export function usePayload(id: Payload["id"]) {
  return useQuery({
    queryKey: ["payload", id],
    queryFn: async () => ApiClient.fetch<Payload>(`/payloads/${id}`),
  });
}

import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../lib/ApiClient";

export function useLaunchpad(id: Launchpad["id"]) {
  return useQuery({
    queryKey: ["launchpad", id],
    queryFn: async () => ApiClient.fetch<Launchpad>(`/launchpads/${id}`),
  });
}

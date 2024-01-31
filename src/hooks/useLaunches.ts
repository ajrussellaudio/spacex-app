import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../lib/ApiClient";

export function useLaunches() {
  return useQuery({
    queryKey: ["launches"],
    queryFn: async () => ApiClient.fetch<Launch[]>("/launches"),
  });
}

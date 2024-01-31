import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../lib/ApiClient";

export function useLaunch(id: Launch["id"]) {
  return useQuery({
    queryKey: ["launch", id],
    queryFn: async () => ApiClient.fetch<Launch>(`/launches/${id}`),
  });
}

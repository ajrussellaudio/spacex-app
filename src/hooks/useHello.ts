import { useQuery } from "@tanstack/react-query";

export function useHello() {
  return useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const response = await fetch("/hello");

      if (response.ok) {
        return response.json();
      }
    },
  });
}

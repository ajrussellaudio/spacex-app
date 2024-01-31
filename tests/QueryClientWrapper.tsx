import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { testQueryClient } from "./queryClient";

export const QueryClientWrapper = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={testQueryClient}>{children}</QueryClientProvider>;
};

import { expect, afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import { server } from "./mocks/server";
import { testQueryClient } from "./queryClient";

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => {
  testQueryClient.clear();
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());

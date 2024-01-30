import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("/hello", () => {
    return HttpResponse.json({ message: "Hello, world!" });
  }),
];

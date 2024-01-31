import { HttpResponse, http } from "msw";
import mockAllLaunchesJson from "./responses/all_launches.json";

export const handlers = [
  http.get("https://api.spacexdata.com/v4/launches", () => {
    return HttpResponse.json(mockAllLaunchesJson);
  }),
];

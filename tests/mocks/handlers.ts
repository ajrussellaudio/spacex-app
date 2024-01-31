import { HttpResponse, http } from "msw";
import mockAllLaunchesJson from "./responses/all_launches.json";
import mockOneLaunchJson from "./responses/one_launch.json";

export const handlers = [
  http.get("https://api.spacexdata.com/v4/launches", () => {
    return HttpResponse.json(mockAllLaunchesJson);
  }),
  http.get("https://api.spacexdata.com/v4/launches/:id", ({ params }) => {
    return HttpResponse.json({
      ...mockOneLaunchJson,
      id: params.id,
    });
  }),
];

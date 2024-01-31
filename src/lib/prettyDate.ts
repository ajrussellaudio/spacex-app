import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export function prettyDate(date: string) {
  return dayjs(date).format("MMMM Do, YYYY");
}

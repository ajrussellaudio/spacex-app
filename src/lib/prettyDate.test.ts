import { prettyDate } from "./prettyDate";

describe("prettyDate", () => {
  it("formats a date with date ordinal, full month name, comma and 4-digit year", () => {
    expect(prettyDate("2023-12-25T22:30:00.000Z")).toEqual("December 25th, 2023");
  });
});

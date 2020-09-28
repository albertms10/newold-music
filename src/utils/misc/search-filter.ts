import dayjs from "dayjs";
import initials from "../strings/initials";
import stripAccents from "../strings/strip-accents";

export interface SearchFilters {
  texts?: (string | undefined)[];
  dates?: (string | undefined)[];
}

/**
 * Returns `true` if the given query matches against
 * `texts` and `dates` arrays.
 */
const searchFilter = (
  query: string,
  { texts = [], dates = [] }: SearchFilters = {}
): boolean =>
  query?.split(/[ '’–-]+/).every(
    (frag) =>
      (texts &&
        texts.some((text) => {
          if (!text) return false;

          const strippedText = stripAccents(text.toString());

          return (
            strippedText
              .toLowerCase()
              .includes(stripAccents(frag.toLowerCase())) ||
            initials(strippedText, { minValue: 3 })
              .toLowerCase()
              .includes(frag.toLowerCase())
          );
        })) ||
      (dates &&
        dates.some((date) => {
          if (!date) return false;

          const parsedDate = dayjs(date);

          return (
            parsedDate.format("L").includes(frag) ||
            parsedDate.format("LT").includes(frag) ||
            parsedDate.format("LL").includes(frag)
          );
        }))
  ) ?? false;

export default searchFilter;
interface TimeDurationOptions {
  defaultText?: string;
}

/**
 * Returns the textual time duration of `time`.
 */
const timeDuration = (
  time?: string,
  { defaultText = null }: TimeDurationOptions = {}
): string => {
  if (!time) return defaultText;

  const timeUnits = time.split(/[:+]/).map((value) => parseInt(value));

  return ["h", "min", "s"]
    .map((unit, index) =>
      timeUnits[index] !== 0 ? `${timeUnits[index]}\u00a0${unit}` : ""
    )
    .filter(Boolean)
    .join(" ");
};

export default timeDuration;

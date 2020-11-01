const titleCase = (str: string) =>
  str?.replace(/(^|\s)\S/g, (l) => l.toLocaleUpperCase()) ?? "";

export default titleCase;

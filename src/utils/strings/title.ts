const title = (str: string) =>
  str?.replace(/(^|\s)\S/g, (l) => l.toLocaleUpperCase()) ?? "";

export default title;

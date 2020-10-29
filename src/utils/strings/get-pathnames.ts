const getPathnames = (path: string) =>
  `${path}/`.match(/(?!\/).*?(?=\/)/g) || [];

export default getPathnames;

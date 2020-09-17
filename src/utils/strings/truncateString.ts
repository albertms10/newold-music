// Gist: https://gist.github.com/DylanAttal/13716cfd9272e92a544ddddde221eab1

const truncateString = (str: string, num: number) => {
  if (num >= str.length) return str;

  return str.slice(0, num) + "…";
};

export default truncateString;

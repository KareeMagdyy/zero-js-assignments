function specialMix(...data) {
  let result = 0;
  for (let i of data) {
    if (Boolean(parseInt(i))) result += parseInt(i);
  }
  return result || "All Is Strings";
}

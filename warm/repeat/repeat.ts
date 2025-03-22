function repeatedString(s: string, n: number) {
  const times = s.split("").filter((l) => l === "a").length;
  const perfectTime = Math.floor(n / s.length) * times;
  const rest = n - Math.floor(n / s.length) * s.length;

  return (
    perfectTime +
    s
      .slice(0, rest)
      .split("")
      .filter((l) => l === "a").length
  );
}
console.log(repeatedString("a", 10000));
// return s
//   .repeat(Math.floor(n / (s.length || 1)) + 1)
//   .split("")
//   .slice(0, n)
//   .filter((l) => l === "a").length;

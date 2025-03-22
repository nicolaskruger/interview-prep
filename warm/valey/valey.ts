function countingValleys(steps: number, path: string): number {
  // Write your code here
  const cursor: { [key: string]: number } = {
    U: 1,
    D: -1,
  };
  let res = 0;
  path.split("").reduce((acc, curr) => {
    const sum = () => acc + cursor[curr];
    if (curr === "U" && sum() === 0) res++;
    return sum();
  }, 0);
  return res;
}

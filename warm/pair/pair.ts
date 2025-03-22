function sockMerchant(n: number, ar: number[]): number {
  return Object.values(
    ar.reduce((acc, curr) => {
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
      return acc;
    }, [] as { [key: number]: number })
  ).reduce((acc, curr) => acc + Math.floor(curr / 2), 0);
}

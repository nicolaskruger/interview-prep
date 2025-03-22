function jumpingOnClouds(c: number[]): number {
  // Write your code here
  let jumps = 0;
  for (let i = 0; i < c.length; i++) {
    const two = c[i + 2];
    const one = c[i + 1];
    if (one === undefined) return jumps;
    if (two === undefined) return jumps + 1;
    if (two === 0) i++;
    jumps++;
  }
  return jumps;
}

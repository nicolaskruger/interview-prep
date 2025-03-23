function minimumBribes(q: number[]): void {
  // Write your code here
  const smarts = q.map((_) => 0);
  const c = console;
  let count = 0;
  const cp = q.map((_, i) => i + 1);
  const swap = (i: number): number[] => {
    const hold = cp[i];
    cp[i] = cp[i + 1];
    cp[i + 1] = hold;
    return cp;
  };
  for (let i = 0; i < q.length - 1; i++) {
    const offset = () => q[i] - 1 - i;
    const smartJumps = () => smarts[q[i] - 1];
    const calc = () => offset() + smartJumps();
    const idx = (n: number) => cp[i + n] - 1;
    const nop = () => {};
    const one = () => {
      swap(i);
      smarts[idx(1)]++;
      count++;
    };
    const two = () => {
      swap(i + 1);
      swap(i);
      smarts[idx(1)]++;
      smarts[idx(2)]++;
      count += 2;
    };
    const operate: (() => void)[] = [nop, one, two];
    if (calc() > 2) {
      c.log("Too chaotic");
      return;
    }
    operate[calc() <= 0 ? 0 : calc()]();
  }
  c.log(count);
}

minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7

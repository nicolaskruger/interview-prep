function minimumBribes(q: number[]): void {
  // Write your code here
  const smarts = q.map((_) => 0);
  const c = console;

  const badPeoples = (): boolean => smarts.some((sheet) => sheet > 2);
  const order = (q: number[]): number => {
    const notCool = (i: number) => {
      smarts[q[i] - 1]++;
      return q;
    };
    const swap = (i: number): number[] => {
      const hold = q[i];
      q[i] = q[i + 1];
      q[i + 1] = hold;
      return q;
    };
    const isOrder = () => q.every((v, i) => v - 1 === i);
    const isNotOrder = () => !isOrder();

    let count = 0;

    for (let j = 0; j < q.length - 1; j++) {
      const ij = () => j;
      if (q[ij()] > q[ij() + 1]) {
        count++;
        notCool(ij());
        swap(ij());
        j = -1;
      }
      if (isNotOrder() && j == q.length - 2) j = -1;
    }
    return count;
  };
  const times = order(q);
  if (badPeoples()) c.log("Too chaotic");
  else c.log(times);
}

// minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic

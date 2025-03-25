function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  type Query = [number, number, number];
  const split = (queries: Query[], query: Query): Query[] => {
    const [a, b, k] = query;
    return queries
      .map((q) => {
        const [x, y, z] = q;
        if (a === x && b === y) return [[a, b, z + k]];
        if (a > x && b > y)
          return [
            [a, x - 1, k],
            [x, y, z + k],
            [y + 1, b, k],
          ];
        if (x > a && y > b)
          return [
            [x, a - 1, z],
            [a, y, z + k],
            [y + 1, b, z],
          ];
        if (a > x && b < y)
          return [
            [a, x - 1, k],
            [x, b, z + k],
            [b + 1, y, z],
          ];
        if (x > a && y < b)
          return [
            [x, a - 1, z],
            [a, y, z + k],
            [y + 1, b, z],
          ];
        if (a > x && y > b)
          return [
            [a, x - 1, k],
            [x, b, z + k],
            [b + 1, y, z],
          ];
        if (a === x && b > y)
          return [
            [a, b, z + k],
            [b + 1, y, z],
          ];
        if (a === x && y > b)
          return [
            [a, y, z + k],
            [y + 1, b, z],
          ];
        if (a > x && b === y)
          return [
            [a, x - 1, x],
            [x, y, z + k],
          ];
        if (x > a && b === y)
          return [
            [x, a - 1, z],
            [a + 1, b, z + k],
          ];
      })
      .flat(1) as Query[];
  };
  return Math.max(
    ...queries
      .reduce(split, [[0, n - 1, 0]] as Query[])
      .map(([_, __, res]) => res)
  );
}

// inp [   ]
// out  [  ]

// inp  [  ]
// out [   ]

// inp [ ] X
// out [  ]

// inp [  ] X
// out [ ]

// inp [  ] X
// out  [  ]

// inp  [  ] X
// out [ ]

// inp [  ] X
// out  [  ]

// inp [  ] X
// out [  ]

// inp [    ] X
// out  [  ]

// inp  [  ] X
// out [    ]

function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  type Query = [number, number, number];
  const split = (queries: Query[], query: Query): Query[] => {
    const [a, b, k] = query;
    queries.map((q) => {
      const [x, y, z] = q;
      if (a === x && b === y) return [a, b, z + k];
      if (a > x && b > y)
        return [
          [a, x - 1, k],
          [x, y, z + k],
          [y + 1, b, k],
        ];
    });
    throw new Error("Invalid query");
  };
  return Math.max(
    ...queries.reduce(split, [] as Query[]).map(([_, __, res]) => res)
  );
}

// inp [  ]
// out [  ]

// inp [    ]
// out  [  ]

// cases tod:

// inp  [  ]
// out [    ]

// inp [  ]
// out  [  ]

// inp  [  ]
// out [ ]

// inp [  ]
// out  [  ]

// inp [  ]
// out [ ]

// inp [ ]
// out [  ]

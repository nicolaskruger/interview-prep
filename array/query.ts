function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  type Query = [number, number, number];
  const split = (queries: Query[], query: Query): Query[] => {
    const [a, b, k] = query;
    const res = queries
      .map((q) => {
        const [x, y, z] = q;
        const joinQuery = (): Query[] => {
          const isNotColliding = () => (y > b && x > b) || (y < a && x < a);
          if (isNotColliding()) return [q];
          const queue: Query[] = [];
          // inp [  ]
          // out  []
          const a000: Query = [x, a - 1, z];
          const a001: Query = [a, y, z + k];
          const a002: Query = [y + 1, b, z];

          if (x < a) queue.push(a000);
          if (x < a && y > b) queue.push(a001);
          if (y > b) queue.push(a002);

          const a010: Query = [a, y - 1, z];
          const a011: Query = [a, b, z + k];
          const a012: Query = [b + 1, y, z];

          if (x === a && y === b) queue.push(a011);
          else if (x === a) queue.push(a010);
          else if (y === b) queue.push(a012);

          if (x < a && y > b) {
            queue.push(a000);
            queue.push(a001);
            queue.push(a002);
          }
          queue.push(a001);
          queue.push(a002);
          if (x <= a)
            return [
              [x, a - 1, z],
              [a, y, z + k],
              [y + 1, b, z],
            ];
          if (a < x)
            return [
              [x, y, z + k],
              [y + 1, b, z],
            ];
        };
        const query: Query[] = [];
        if ((x < a && y < a) || (b > x && b > y)) return [[x, y, z]];
        if (a > x) {
          query.push([x, a - 1, k]);
          if (b > y) {
            query.push([a, y, z + k]);
            query.push([y + 1, b, k]);
          }
          if (y > b) {
            query.push([a, b, z + k]);
            query.push([b + 1, y, z]);
          }
          if (b === y) query.push([a, b, z + k]);
        }
        if (x > a) {
          query.push([a, x - 1, k]);
          if (b > y) {
            query.push([x, y - 1, z + k]);
            query.push([y, b, k]);
          }
          if (y > b) {
            query.push([x, b - 1, z + k]);
            query.push([b, y, z]);
          }
          if (b === y) query.push([x, b, z + k]);
        }
        if (x === a) {
          if (b > y) {
            query.push([a, y, z + k]);
            query.push([y + 1, b, k]);
          }
          if (y > b) {
            query.push([a, b, z + k]);
            query.push([b + 1, y, z]);
          }
          if (b === y) query.push([a, b, z + k]);
        }
        return query;
      })
      .flat(1) as Query[];
    console.log(res);
    return res;
  };

  return Math.max(
    ...queries.reduce(split, [[1, n, 0]] as Query[]).map(([_, __, res]) => res)
  );
}
// const res = arrayManipulation(5, [
//   [1, 2, 100],
//   [2, 5, 100],
//   [3, 4, 100],
// ]);

const res = arrayManipulation(10, [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15],
]);

console.log(res);

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

// if (a === x && b === y) return [[a, b, z + k]];
// if (a > x && b > y)
//   return [
//     [a, x - 1, k],
//     [x, y, z + k],
//     [y + 1, b, k],
//   ];
// if (x > a && y > b)
//   return [
//     [x, a - 1, z],
//     [a, y, z + k],
//     [y + 1, b, z],
//   ];
// if (a > x && b < y)
//   return [
//     [a, x - 1, k],
//     [x, b, z + k],
//     [b + 1, y, z],
//   ];
// if (x > a && y < b)
//   return [
//     [x, a - 1, z],
//     [a, y, z + k],
//     [y + 1, b, z],
//   ];
// if (a > x && y > b)
//   return [
//     [a, x - 1, k],
//     [x, b, z + k],
//     [b + 1, y, z],
//   ];
// if (a === x && b > y)
//   return [
//     [a, b, z + k],
//     [b + 1, y, z],
//   ];
// if (a === x && y > b)
//   return [
//     [a, y, z + k],
//     [y + 1, b, z],
//   ];
// if (a > x && b === y)
//   return [
//     [a, x - 1, x],
//     [x, y, z + k],
//   ];
// if (x > a && b === y)
//   return [
//     [x, a - 1, z],
//     [a + 1, b, z + k],
//   ];

import * as fs from 'fs';

const fetchData = () => 
  fs.readFileSync("query.data").toString().split(/\n/)
    .map(str => str.split(" ").map(v => Number(v)));


function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  type Query = [number, number, number];
  type DQuery = {[key:string]: Query};
  const split = (queries: Query[], query: Query): Query[] => {
    const dic:DQuery = {}
    const upsert = (q: Query) => {
      const toKey = ([a, b]: Query): string => `${a}-${b}`;
      const getVal = () => dic[toKey(q)]
      const getPoint = () => getVal().slice(-1)[0];
      const isSmaller = () => getPoint() < q[2];
      const shouldUpsert = () => !getVal() || getVal() && isSmaller();
      if(shouldUpsert()){
        dic[toKey(q)] = q;  
      }
    }
    upsert(query);
    const [a, b, k] = query;
    const res = queries
      .reduce((dic, q) => {
        const joinQuery = (): Query[] => {
          const [x, y, z] = q;
          const isNotColliding = () => (y > b && x > b) || (y < a && x < a);
          if (isNotColliding()) return [q];
          const queue: Query[] = [];
          
          if(a===x && b===y) return [[x, y, z + k]]
          if(a===x && b > y) return [[x, y, z + k], [y + 1, b, k]]
          if(a===x && b < y) return [[x, b, z + k], [b + 1, y, z]]
          if(a > x && b===y) return [[x, a - 1, z], [a, b, z + k]]
          if(a > x && b > y) return [[x, a - 1, z], [a, y, z + k], [y + 1, b, k]]
          if(a > x && b < y) return [[x, a - 1, z], [a, b, z + k], [b + 1, y, z]]
          if(a < x && b===y) return [[a, x - 1, k], [x, b, z + k]]
          if(a < x && b > y) return [[a, x - 1, k], [x, y, z + k], [y + 1, b, k]]
          if(a < x && b < y) return [[a, x - 1, k], [x, b, z + k], [b + 1, y, z]]

          return queue;
        };
        joinQuery().forEach(upsert);
        return dic;
      }, dic);

    return Object.values(res);
  };

  return Math.max(
    ...queries.reduce(split, [[1, n, 0]] as Query[]).map(([_, __, res]) => res)
  );
}
const res = arrayManipulation(40, fetchData());

// const res = arrayManipulation(10, [
//   [2, 6, 8],
//   [3, 5, 7],
//   [1, 8, 1],
//   [5, 9, 15],
// ]);

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

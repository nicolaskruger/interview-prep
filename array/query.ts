import * as fs from 'fs';

const fetchData = () => 
  fs.readFileSync("query.data").toString().split(/\n/)
    .map(str => str.split(" ").map(v => Number(v)));


function arrayManipulation(n: number, queries: number[][]): number {
  // Write your code here
  type Query = [number, number, number];
  const store = "_".repeat(n+2).split("").map(_=> 0)
  queries.forEach(([a, b, z]) => {
    store[a] += z;
    store[b+1] -= z; 
  })
  let max = 0;
  store.reduce((acc, curr) => {
    if(acc > max) max = acc;
    return acc + curr;
  }, 0);
  return max;
}
const res = arrayManipulation(40, fetchData());
console.log(res)
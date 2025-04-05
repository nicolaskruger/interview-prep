const fs = require("fs");

function countTriplets(arr:number[], r:number) {
    type Dic = {
        [key: string]: [number, number, number]
    }

    const zero = () => 0;
    const one = () => 1;
    const two = () => 2;
    const tree = () => 3;
    const oneIdx = () => 0;
    const twoIdx = () => 1;
    const treeIdx = () => 2;

    const toFKey = (num:number) => `${num};${num*r};${num*r*r}`;
    const toSKey = (num:number) => `${Math.floor(num/r)};${num};${num*r}`;
    const toTKey = (num:number) => `${Math.floor(num/(r*r))};${Math.floor(num/r)};${num}`;
      
    const dic = () => arr.reduce((dic, num) => {
        const f = () =>  dic[toFKey(num)];
        const setUp = () => dic[toFKey(num)] = [one(), zero(), zero()];
        const s = () => dic[toSKey(num)];
        const t = () => dic[toTKey(num)];
        const add = (get: () => [number, number, number] , from: () => number, to: () => number) => {
            get()[to()] += get()[from()];
        }
        
        if(t()) add(t, twoIdx, treeIdx)
        if(s()) add(s, oneIdx, twoIdx)
        if(!f()) setUp();
        else ++f()[oneIdx()]

        return dic
    }, {} as Dic);

    return Object.values(dic()).map(([a, b, c]) => c).reduce((acc, curr) => acc + curr, 0)
}

const input = () => {
    const file = () => fs.readFileSync("triples.txt").toString();
    const r = () => Number(file().split("\n")[0].split(" ")[1]);
    const arr = () => file().split("\n")[1].split(" ").map(_ => Number(_));
    return [arr(), r()] as const;
}

const resp = countTriplets(
    ...input()
)

console.log(resp);
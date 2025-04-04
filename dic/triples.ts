const fs = require("fs");

function countTriplets(arr:number[], r:number) {
    type Dic = {
        [key: string]: number[]
    }

    const one = () => 1;
    const two = () => 2;
    const tree = () => 3;

    const toFKey = (num:number) => `${num};${num*r};${num*r*r}`;
    const toSKey = (num:number) => `${Math.floor(num/r)};${num};${num*r}`;
    const toTKey = (num:number) => `${Math.floor(num/(r*r))};${Math.floor(num/r)};${num}`;
      
    const dic = () => arr.reduce((dic, num) => {
        const f = () =>  dic[toFKey(num)];
        const setUpF = () => dic[toFKey(num)] = [one()];
        const s = () => dic[toSKey(num)];
        const si = () => s().findIndex(v => v === one())
        const t = () => dic[toTKey(num)];
        const ti = () => t().findIndex(v => v === two())
        if(t()) t()[ti()] = tree();
        if(s()) s()[si()] = two();
        if(!f()) setUpF();
        else f().push(one())

        return dic
    }, {} as Dic);

    return Object.values(dic()).flat(1).filter(num => num === tree()).length
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
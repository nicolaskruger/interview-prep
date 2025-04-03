const fs = require("fs");

function countTriplets(arr:number[], r:number) {
    type Dic = {
        [key: string]: [number]
    }

    const dic = () => arr.reduce((acc, curr, i) => {
        if(!acc[curr]) acc[curr] = [i];
        else acc[curr].push(i);
        return acc;
    }, {} as Dic);

    const calc = (dic: Dic) => {
        const loadSort = () => [...new Set(arr)]
        const _sort = loadSort()
        let _i = 0;
        const next = () => sort()[++_i]
        const sort = () => _sort;
        const curr = () => sort()[_i];
        const fetchTriple = () => [curr(), curr()*r, curr()*r*r];
        const isLast = () => _i === (sort().length - 1) 

        const calcTriple = () => {
            const [a, b, c] = fetchTriple().map(tp => dic[tp]);
            if ([a, b, c].some(v => !v)) return 0
            return a.reduce((res, _a) => 
                 res + b.filter(_b => _b >= _a)
                .reduce((res, _b) => 
                    res + c.filter(_c => _c >= _b).length 
                    , 0)
            , 0)
        }

        let count = 0;
        
        const isROne = () => r === 1;
        const calcOne = () => {
            let l = arr.length
            return Math.floor(l*--l*--l/6)
        } 
        const sum = () =>  calcTriple()
        if(isROne()) return calcOne()
        while(!isLast()){
            count += sum();
            next();            
        }
        return count
    }

    return calc(dic());
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
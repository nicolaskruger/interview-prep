import * as fs from 'fs'; 

function freqQuery(queries:[number, number][]):number[] {
    type FreqNum = {
        [freq: number]: Set<number>
    }
    type NumFreq = {
        [num: number]: number
    }

    const freqNum: FreqNum = {}
    const numFreq: NumFreq = {}

    const one = () => 1;

    const has = (num:number) => {
        return numFreq[num]
    } 

    const push = (num: number) => {
        const currFreq = () => numFreq[num]
        const next = () => ++numFreq[num]
        const populate = (freq: number, num: number) => {
            if (!freqNum[freq])
                freqNum[freq] = new Set([num])
            else
                freqNum[freq].add(num)
        }
        if(!has(num)){
            numFreq[num] = one();
            freqNum[one()] = new Set([num])
        } else {
            freqNum[currFreq()].delete(num)
            populate(next(), num)
        }
    }

    const pop = (num: number) => {
        if(!has(num)) return;
        freqNum[numFreq[num]].delete(num)
        delete numFreq[num];
    }
    const logger:number[] = []
    let count = 0;
    const log = (freq: number) => {
        const _log = () => freqNum[freq] && (freqNum[freq].size > 0) ? 1 : 0;
        logger.push(_log())
        if(count++ === 74)
        console.log(_log(), freqNum)
    }

    const sw = {
        [1] : push,
        [2] : pop,
        [3] : log
    }

    queries.forEach(([op, data], i) => {
        if(count == 74)
        console.log(i)
        if(op && data)
            sw[op](data)
    })

    return logger
}

 const file = () => fs.readFileSync("frequency.txt").toString();

const format = () => file()
    .split("\n")
    .slice(1)
    .map(v => v.split(" ").map(n => Number(n)) as [number, number])

const res = () => fs.readFileSync("frequency_res.txt").toString().split("\n").map(_ => Number(_))

const compare = (expected: number[], result: number[]) => {
    const log = console.log;
    const err = console.error;
    result.forEach((value, i) => {
        const isErr = () => value !== expected[i];
        const print = isErr()? err: log;
        print(i, value, expected[i])
    })
}

compare(res(), freqQuery(format()))
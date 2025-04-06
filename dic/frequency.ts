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
    const log = (freq: number) => {
        const _log = () => freqNum[freq] && (freqNum[freq].size > 0) ? 1 : 0;
        logger.push(_log())
    }

    const sw = {
        [1] : push,
        [2] : pop,
        [3] : log
    }

    queries.forEach(([op, data]) => {
        sw[op](data)
    })

    return logger
}
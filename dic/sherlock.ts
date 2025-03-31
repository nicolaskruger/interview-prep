function sherlockAndAnagrams(s: string): number {
    // Write your code here
    let size = 0;
    type Dic = { [key: string]: number}
    const toSet = (i: number): Dic => s.substring(i, i + size).split("").reduce((acc, curr)=> {
        if(!acc[curr]) acc[curr] = 1;
        else acc[curr]++
        return acc;
    }, {} as Dic);
    const match = (a: Dic, b: Dic) => {
        const aKey = Object.keys(a);
        const bKey = Object.keys(b);
        if (aKey.length !== bKey.length) return false;
        return aKey.every(key => a[key] === b[key]);
    }
    const length = () => (s.length)
    let count = 0;
    while(++size < length()){
        for (let i = 0; i < length(); i++) 
            for(let j = 1 + i; j < length() - size + 1; j++)
            {
                if(match(toSet(i), toSet(j))) 
                    count++;
            } 
    }

    return count;
}
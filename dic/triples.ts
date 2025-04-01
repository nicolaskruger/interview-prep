function countTriplets(arr:number[], r:number) {
    type Dic = {
        [key: string]: number
    }

    const dic = () => arr.reduce((acc, curr) => {
        if(!acc[curr]) acc[curr] = 1;
        else ++acc[curr];
        return acc;
    }, {} as Dic);

    const calc = (dic: Dic) => {
        const max = () => r*Math.floor(Math.max(...arr)/r);
        const min = () => 1;
        let triple = [min(), min()*r, min()*r*r];
        const getLast = () => triple.slice(-1)[0];
        const next = () => triple = [...triple.slice(1), getLast()*r]
        let count = 0;
        const sum = () =>  triple.reduce((acc, curr) => {
                const val = () => dic[curr]? dic[curr] : 0
                return acc*val();
            }, 1)
        while(getLast() <= max()){
            count += sum();
            next();            
        }
        return count
    }

    return calc(dic());
}
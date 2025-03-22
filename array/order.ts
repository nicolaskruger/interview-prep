

function minimumBribes(q: number[]): void {
    // Write your code here
    const smarts = q.map(_ => 0)
    const c = console;
    
    const badPeoples = ():boolean => 
        smarts.some(sheet => sheet>= 2)
    const order = (q:number[]):number => {
        const notCool = (i: number) => {
            smarts[q[i]-1]++
            return q;
        }
        const swap = (i:number):number[] => {
            const hold = q[i];
            q[i] = q[i+1];
            q[i+1] = hold;
            return q;
        } 
        const isOrder = () => q.every((v, i) => (v-1) === i)
        const isNotOrder = () => !isOrder()
        for(let i = 0; i < q.length - 1; i++)
            if(q[i]>q[i+1])return 1 + order(notCool(i) && swap(i));
        return isNotOrder() ? order(q): 0 
    }
    const times = order(q)
    if(badPeoples())
        c.log("Too chaotic")
    else
        c.log(times)
}

function minimumBribes(q: number[]): void {
    // Write your code here
    const smarts = q.map(_ => 0)
    const c = console;
    
    const badPeoples = ():boolean => 
        smarts.some(sheet => sheet>= 2)
    const order = (q: number[]): number => {
        let count = 0;
        let cursor = 0;
        
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
        while(isNotOrder()){
            if(q[cursor]>q[cursor+1]) {
                ++count;
                notCool(cursor);
                swap(cursor);
                cursor = 0;
            } else{
                cursor = (cursor+1)%q.length;
            }
        }
        return count;        
    }
  }
minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7

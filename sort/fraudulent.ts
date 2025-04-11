function activityNotifications(expenditure: number[], d: number): number {
    // Write your code here
    const dIterator = (iter:(i: number) => void) => {
        for(let i = d; i < expenditure.length; i++)
            iter(i)
        
    }
    const media = () => {
        const start = () => expenditure.slice(0, d).reduce((acc, curr) => acc+curr, 0);
        const arr = (start: number) => {
            const res: number[] = []
            dIterator(i => {
                const beg = () => expenditure[i - d];
                const end = () => expenditure[i];
                res.push(Math.ceil(start/d));
                start += end() - beg();
            })
            return res;
        }
        return arr(start())
    }

    const fraudulent = (media: number[]) => {
        let count = 0;
        let medIdx = 0;
        dIterator(i => {
            const curr = () => expenditure[i] 
            const med = () => media[medIdx++]
            if(curr()>=2*med()) count++;
        })
        return count;
    }

    return fraudulent(media());
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
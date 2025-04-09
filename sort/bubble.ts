function countSwaps(a: number[]): void {
    // Write your code here

    let count = 0;

    const swap = (i: number, j: number) => {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        count++;
    }

    for (let i = 0; i < a.length; i++) 
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(j, j + 1);
            }
        }
    const res = () =>    `Array is sorted in ${count} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a.slice(-1)[0]}`
    console.log(res())      
}
function hourglassSum(arr: number[][]): number {
    // Write your code here
    let max = Number.NEGATIVE_INFINITY;
    const calc = (x: number, y: number) => 
        arr[y][x] + arr[y][x+1] + arr[y][x+2]
                    +  arr[y+1][x+1]
        + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
    for(let y = 0;y< arr.length - 2; y++)
        for(let x = 0;x< arr[y].length - 2; x++)
            max = Math.max(calc(x, y), max)
    return max;
}
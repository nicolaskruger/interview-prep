function maximumToys(prices: number[], k: number): number {
    // Write your code here
    return prices.sort((a,b) => a - b).reduce((acc, curr) => {
        let [sum, count] = acc;
        const nextSum = () => sum + curr;
        return nextSum() > k ? [nextSum(), count] : [nextSum(), ++count] 
    }, [0, 0])[1]
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
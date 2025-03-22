function rotLeft(a: number[], d: number): number[] {
    const calc = () => a.length - d % a.length
    return [...a.slice(-calc()),...a.slice(0, a.length-calc()) ]
}
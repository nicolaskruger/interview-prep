'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    const arr = () => inputLines.slice(1);
    const sorted = () => arr().map(line => line.split(" ") as [string, string])
    .map(([name, score]) => [name, Number(score)] as const)
    .sort(([aName, aScore], [bName, bScore]) => {
        const byScore = () => bScore - aScore;
        const byName = () =>aName.localeCompare(bName)
        return byScore() === 0 ? byName() : byScore()
    }).map(([name, score]) => `${name} ${score}`)
    .join("\n")
    console.log(sorted());
}
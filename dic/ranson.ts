
function checkMagazine(magazine: string[], note: string[]): void {
    // Write your code here
    type Dic = { [key: string]: number }

    const gen = (mag: string[]) => mag.reduce((dic, word) => {
        const isNull = () => dic[word] == undefined;
        if(isNull()) dic[word] = 1;
        else ++dic[word];
        return dic;
    }, {} as Dic);

    const check = (mag: Dic, note: Dic) => 
        Object.keys(note).every(key => note[key] <= mag[key])
    
    const log = console.log

    log(check(gen(magazine), gen(note))? "Yes": "No");
}
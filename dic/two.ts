function twoStrings(s1: string, s2: string): string {
    // Write your code here
    const toSet =  (s: string) => new Set(s.split(""));
    const set1 = toSet(s1);
    const set2 = toSet(s2);
    for (const val of set1.values()) {
        if(set2.has(val)) return "YES"
    }
    return "NO"
}
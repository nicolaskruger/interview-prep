function freqQuery(queries) {
    var _a;
    var freqNum = {};
    var numFreq = {};
    var one = function () { return 1; };
    var has = function (num) {
        return numFreq[num];
    };
    var push = function (num) {
        var currFreq = function () { return numFreq[num]; };
        var next = function () { return ++numFreq[num]; };
        var populate = function (freq, num) {
            if (!freqNum[freq])
                freqNum[freq] = new Set([num]);
            else
                freqNum[freq].add(num);
        };
        if (!has(num)) {
            numFreq[num] = one();
            freqNum[one()] = new Set([num]);
        }
        else {
            freqNum[currFreq()].delete(num);
            populate(next(), num);
        }
    };
    var pop = function (num) {
        if (!has(num))
            return;
        freqNum[numFreq[num]].delete(num);
        delete numFreq[num];
    };
    var logger = [];
    var log = function (freq) {
        var _log = function () { return freqNum[freq] && (freqNum[freq].size > 0) ? 1 : 0; };
        logger.push(_log());
    };
    var sw = (_a = {},
        _a[1] = push,
        _a[2] = pop,
        _a[3] = log,
        _a);
    queries.forEach(function (_a) {
        var op = _a[0], data = _a[1];
        sw[op](data);
    });
    return logger;
}

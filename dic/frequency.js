"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
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
            populate(one(), num);
        }
        else {
            freqNum[currFreq()].delete(num);
            populate(next(), num);
        }
    };
    var pop = function (num) {
        if (!has(num))
            return;
        var curr = function () { return numFreq[num]; };
        var prev = function () { return --numFreq[num]; };
        freqNum[curr()].delete(num);
        if (prev() <= 0)
            delete numFreq[num];
        else
            freqNum[curr()].add(num);
    };
    var logger = [];
    var count = 0;
    var log = function (freq) {
        var _log = function () { return freqNum[freq] && (freqNum[freq].size > 0) ? 1 : 0; };
        logger.push(_log());
    };
    var sw = (_a = {},
        _a[1] = push,
        _a[2] = pop,
        _a[3] = log,
        _a);
    queries.forEach(function (_a, i) {
        var op = _a[0], data = _a[1];
        if (op && data)
            sw[op](data);
    });
    return logger;
}
var file = function () { return fs.readFileSync("frequency.txt").toString(); };
var format = function () { return file()
    .split("\n")
    .slice(1)
    .map(function (v) { return v.split(" ").map(function (n) { return Number(n); }); }); };
var res = function () { return fs.readFileSync("frequency_res.txt").toString().split("\n").map(function (_) { return Number(_); }); };
var compare = function (expected, result) {
    var log = console.log;
    var err = console.error;
    result.forEach(function (value, i) {
        var isErr = function () { return value !== expected[i]; };
        var print = isErr() ? err : log;
        print(i, value, expected[i]);
    });
};
compare(res(), freqQuery(format()));

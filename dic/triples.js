var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fs = require("fs");
function countTriplets(arr, r) {
    var dic = function () { return arr.reduce(function (acc, curr) {
        if (!acc[curr])
            acc[curr] = 1;
        else
            ++acc[curr];
        return acc;
    }, {}); };
    var calc = function (dic) {
        var max = function () { return r * Math.floor(Math.max.apply(Math, arr) / r); };
        var min = function () { return 1; };
        var triple = [min(), min() * r, min() * r * r];
        var getLast = function () { return triple.slice(-1)[0]; };
        var next = function () { return triple = __spreadArray(__spreadArray([], triple.slice(1), true), [getLast() * r], false); };
        var count = 0;
        var isROne = function () { return r === 1; };
        var calcOne = function () {
            var l = arr.length;
            return Math.floor(l * --l * --l / 6);
        };
        var sum = function () { return triple.reduce(function (acc, curr) {
            var val = function () { return dic[curr] ? dic[curr] : 0; };
            return acc * val();
        }, 1); };
        if (isROne())
            return calcOne();
        while (getLast() <= max()) {
            count += sum();
            next();
        }
        return count;
    };
    return calc(dic());
}
var input = function () {
    var file = function () { return fs.readFileSync("triples.txt").toString(); };
    var r = function () { return Number(file().split("\n")[0].split(" ")[1]); };
    var arr = function () { return file().split("\n")[1].split(" ").map(function (_) { return Number(_); }); };
    return [arr(), r()];
};
var resp = countTriplets.apply(void 0, input());
console.log(resp);

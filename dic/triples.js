var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
    var dic = function () { return arr.reduce(function (acc, curr, i) {
        if (!acc[curr])
            acc[curr] = [i];
        else
            acc[curr].push(i);
        return acc;
    }, {}); };
    var calc = function (dic) {
        var loadSort = function () { return __spreadArray([], __read(new Set(arr)), false); };
        var _sort = loadSort();
        var _i = 0;
        var next = function () { return sort()[++_i]; };
        var sort = function () { return _sort; };
        var curr = function () { return sort()[_i]; };
        var fetchTriple = function () { return [curr(), curr() * r, curr() * r * r]; };
        var isLast = function () { return _i === (sort().length - 1); };
        var calcTriple = function () {
            var _d = __read(fetchTriple().map(function (tp) { return dic[tp]; }), 3), a = _d[0], b = _d[1], c = _d[2];
            if ([a, b, c].some(function (v) { return !v; }))
                return 0;
            return a.reduce(function (res, _a) {
                return res + b.filter(function (_b) { return _b >= _a; })
                    .reduce(function (res, _b) {
                    return res + c.filter(function (_c) { return _c >= _b; }).length;
                }, 0);
            }, 0);
        };
        var count = 0;
        var isROne = function () { return r === 1; };
        var calcOne = function () {
            var l = arr.length;
            return Math.floor(l * --l * --l / 6);
        };
        var sum = function () { return calcTriple(); };
        if (isROne())
            return calcOne();
        while (!isLast()) {
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
var resp = countTriplets.apply(void 0, __spreadArray([], __read(input()), false));
console.log(resp);

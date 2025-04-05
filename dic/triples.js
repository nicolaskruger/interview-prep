var fs = require("fs");
function countTriplets(arr, r) {
    var zero = function () { return 0; };
    var one = function () { return 1; };
    var two = function () { return 2; };
    var tree = function () { return 3; };
    var oneIdx = function () { return 0; };
    var twoIdx = function () { return 1; };
    var treeIdx = function () { return 2; };
    var toFKey = function (num) { return "".concat(num, ";").concat(num * r, ";").concat(num * r * r); };
    var toSKey = function (num) { return "".concat(Math.floor(num / r), ";").concat(num, ";").concat(num * r); };
    var toTKey = function (num) { return "".concat(Math.floor(num / (r * r)), ";").concat(Math.floor(num / r), ";").concat(num); };
    var dic = function () { return arr.reduce(function (dic, num) {
        var f = function () { return dic[toFKey(num)]; };
        var setUp = function () { return dic[toFKey(num)] = [one(), zero(), zero()]; };
        var s = function () { return dic[toSKey(num)]; };
        var t = function () { return dic[toTKey(num)]; };
        var add = function (get, from, to) {
            get()[to()] += get()[from()];
        };
        if (t())
            add(t, twoIdx, treeIdx);
        if (s())
            add(s, oneIdx, twoIdx);
        if (!f())
            setUp();
        else
            ++f()[oneIdx()];
        return dic;
    }, {}); };
    return Object.values(dic()).map(function (_a) {
        var a = _a[0], b = _a[1], c = _a[2];
        return c;
    }).reduce(function (acc, curr) { return acc + curr; }, 0);
}
var input = function () {
    var file = function () { return fs.readFileSync("triples.txt").toString(); };
    var r = function () { return Number(file().split("\n")[0].split(" ")[1]); };
    var arr = function () { return file().split("\n")[1].split(" ").map(function (_) { return Number(_); }); };
    return [arr(), r()];
};
var resp = countTriplets.apply(void 0, input());
console.log(resp);

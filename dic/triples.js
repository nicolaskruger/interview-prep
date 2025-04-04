var fs = require("fs");
function countTriplets(arr, r) {
    var one = function () { return 1; };
    var two = function () { return 2; };
    var tree = function () { return 3; };
    var toFKey = function (num) { return "".concat(num, ";").concat(num * r, ";").concat(num * r * r); };
    var toSKey = function (num) { return "".concat(Math.floor(num / r), ";").concat(num, ";").concat(num * r); };
    var toTKey = function (num) { return "".concat(Math.floor(num / (r * r)), ";").concat(Math.floor(num / r), ";").concat(num); };
    var dic = function () { return arr.reduce(function (dic, num) {
        var f = function () { return dic[toFKey(num)]; };
        var setUpF = function () { return dic[toFKey(num)] = [one()]; };
        var s = function () { return dic[toSKey(num)]; };
        var si = function () { return s().findIndex(function (v) { return v === one(); }); };
        var t = function () { return dic[toTKey(num)]; };
        var ti = function () { return t().findIndex(function (v) { return v === two(); }); };
        if (t())
            t()[ti()] = tree();
        if (s())
            s()[si()] = two();
        if (!f())
            setUpF();
        else
            f().push(one());
        return dic;
    }, {}); };
    return Object.values(dic()).flat(1).filter(function (num) { return num === tree(); }).length;
}
var input = function () {
    var file = function () { return fs.readFileSync("triples.txt").toString(); };
    var r = function () { return Number(file().split("\n")[0].split(" ")[1]); };
    var arr = function () { return file().split("\n")[1].split(" ").map(function (_) { return Number(_); }); };
    return [arr(), r()];
};
var resp = countTriplets.apply(void 0, input());
console.log(resp);

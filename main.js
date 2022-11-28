var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var bookletSplitter = function (pages, siteCount, splicer) {
    if (siteCount === void 0) { siteCount = 4; }
    if (splicer === void 0) { splicer = [-1, 0, 0, -1]; }
    if (pages.length % siteCount !== 0) {
        throw new Error("Die Seitenanzahl muss durch 4 teilbar sein. Es fehlen ".concat(siteCount - (pages.length % siteCount), " Seiten"));
    }
    var newOrder = [];
    while (pages.length > 0) {
        for (var _i = 0, splicer_1 = splicer; _i < splicer_1.length; _i++) {
            var spliceNumber = splicer_1[_i];
            console.log(spliceNumber);
            newOrder = __spreadArray([], newOrder, true);
        }
    }
    return newOrder;
};
var sites = [];
var sitesCount = 48;
for (var i = 1; i <= sitesCount; i++) {
    sites.push("Seite ".concat(i));
}
console.log(bookletSplitter(sites));

module.exports = function reverse(n) {
    let strN = "" + n;
    let newStr = strN.replace(/\-/g, "");
    return Number(
        newStr
            .split("")
            .map(e => Number(e))
            .reverse()
            .join("")
    );
};

Array.prototype.myJoin = function (sep) {
    let result = '';

    for (let i = 0; i < this.length; i++) {
        result += this[i] + sep;
    }
    return result;
}
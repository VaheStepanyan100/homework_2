Array.prototype.myFilter = function (callback) {
    const filtered = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filtered.push(this[i]);
        }
    }
    return filtered;
}
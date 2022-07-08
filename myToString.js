Array.prototype.myToString = function () {
    let result = '';

    for (let i = 0; i < this.length; i++) {
        result += this[i] + ',';
    }
    return result;
}
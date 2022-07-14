Array.prototype.mySlice = function(start = 0, end) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (i === end) {
            break;
        }
        if (i >= start) {
            result.push(this[i]);
        }
    }
    return result;
}
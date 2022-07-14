Array.prototype.myShift = function () {
    let length = this.length;
    let retunedValue = this[0];
    for (let i = 0; i < length - 1; i++) {
        this[i] = this[i + 1];
    }
    this.length = length - 1;
    return retunedValue;
}